import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content", // Content type for markdown files
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    image: z.string().optional(), // Add the image field as optional
  }),
});

export const collections = {
  blog: blogCollection,
};
