import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(), // We use this for the URL
      coverImage: image().optional(), // This enables Astro's image optimization
      pubDate: z.date(),
      author: z.string(),
    }),
});

export const collections = {
  posts: postsCollection,
};
