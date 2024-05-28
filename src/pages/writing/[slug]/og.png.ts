import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;

  const post = await getEntry("writing", slug as string);
  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  const html = {
    type: "div",
    props: {
      style: {
        fontFamily: "Figtree, sans-serif",
        padding: "1rem",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background:
          "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundColor: "#0d0d0d",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              display: "flex",
              top: "35px",
              left: "49%",
              right: "50%",
            },
            children: [
              {
                type: "svg",
                props: {
                  width: "50",
                  height: "57",
                  viewBox: "0 0 219 249",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    {
                      type: "path",
                      props: {
                        d: "M104.586 8.32431C107.627 6.55857 111.373 6.55856 114.414 8.32431L207.086 62.1319C210.127 63.8977 212 67.1609 212 70.6924V178.308C212 181.839 210.127 185.102 207.086 186.868L114.414 240.676C111.373 242.441 107.627 242.441 104.586 240.676L11.9145 186.868C8.87339 185.102 7 181.839 7 178.308V70.6924C7 67.1609 8.87339 63.8977 11.9145 62.1319L104.586 8.32431Z",
                        stroke: "#FEFCF0",
                        strokeWidth: "13",
                      },
                    },
                    {
                      type: "path",
                      props: {
                        d: "M108.5 13.5C154.5 52.3333 218.9 151.3 108.5 236.5",
                        stroke: "#FEFCF0",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                      },
                    },
                    {
                      type: "path",
                      props: {
                        d: "M12.5 68L105.5 233",
                        stroke: "#FEFCF0",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                      },
                    },
                    {
                      type: "path",
                      props: {
                        d: "M12 183L105 18",
                        stroke: "#FEFCF0",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: "h1",
          props: {
            style: {
              fontSize: "2.5rem",
              fontWeight: 700,
              marginTop: "4rem",
              marginBottom: "1rem",
              color: "#FEFCF0",
              textAlign: "center",
            },
            children: post.data.title,
          },
        },
        {
          type: "p",
          props: {
            style: {
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#cfcec4",
              marginBottom: "1rem",
              textAlign: "center",
              maxWidth: "650px",
            },
            children: post.data.excerpt,
          },
        },
        {
          type: "p",
          props: {
            style: { fontSize: "1rem", fontWeight: 500, color: "#888681" },
            children: `Published on ${new Date(
              post.data.date
            ).toLocaleDateString()} • railly.dev`,
          },
        },
      ],
    },
  };

  const loadFont = async (fontPath: string) => {
    console.log({
      newURL: new URL(fontPath, import.meta.url),
    });
    const response = await fetch(new URL(fontPath, import.meta.url));
    if (!response.ok) {
      throw new Error(`Failed to load font from ${fontPath}`);
    }
    return response.arrayBuffer();
  };

  return new ImageResponse(html, {
    width: 800,
    height: 400,
    fonts: [
      {
        name: "Figtree",
        data: await loadFont(
          "../../../assets/figtree/figtree-latin-500-normal.ttf"
        ),
        style: "normal",
        weight: 500,
      },
      {
        name: "Figtree",
        data: await loadFont(
          "../../../assets/figtree/figtree-latin-600-normal.ttf"
        ),
        style: "normal",
        weight: 600,
      },
      {
        name: "Figtree",
        data: await loadFont(
          "../../../assets/figtree/figtree-latin-700-normal.ttf"
        ),
        style: "normal",
        weight: 700,
      },
    ],
  });
};

export async function getStaticPaths() {
  const blogPosts = await getCollection("writing");
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
}
