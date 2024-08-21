import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";
import fs from "fs/promises";
import path from "path";

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
        padding: "2rem",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0d0d0d",
        background:
          "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                  },
                  children: [
                    {
                      type: "svg",
                      props: {
                        width: "30",
                        height: "35",
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
                    ,
                    {
                      type: "span",
                      props: {
                        style: {
                          marginLeft: "1rem",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          color: "#878787",
                        },
                        children: "@RaillyHugo",
                      },
                    },
                  ],
                },
              },
              {
                type: "span",
                props: {
                  style: {
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "#888681",
                  },
                  children: new Date(post.data.date).toLocaleDateString(
                    "en-US",
                    { month: "long", day: "numeric", year: "numeric" },
                  ),
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            },
            children: [
              {
                type: "h1",
                props: {
                  style: {
                    fontSize: "4.2rem",
                    fontWeight: 700,
                    color: "#FEFCF0",
                    marginBottom: "1rem",
                  },
                  children: post.data.title,
                },
              },
              {
                type: "p",
                props: {
                  style: {
                    fontSize: "1.85rem",
                    fontWeight: 600,
                    color: "#878787",
                    maxWidth: "700px",
                  },
                  children: post.data.excerpt,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "flex-end",
            },
            children: [
              {
                type: "span",
                props: {
                  style: {
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "#888681",
                  },
                  children: "railly.dev",
                },
              },
            ],
          },
        },
      ],
    },
  };

  const loadFont = async (fontPath: string) => {
    const absolutePath = path.resolve(process.cwd(), "src/assets", fontPath);
    return fs.readFile(absolutePath);
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Figtree",
        data: await loadFont("figtree/figtree-latin-500-normal.ttf"),
        style: "normal",
        weight: 500,
      },
      {
        name: "Figtree",
        data: await loadFont("figtree/figtree-latin-600-normal.ttf"),
        style: "normal",
        weight: 600,
      },
      {
        name: "Figtree",
        data: await loadFont("figtree/figtree-latin-700-normal.ttf"),
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
