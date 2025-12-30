import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.enum(["coding", "digital-ops", "it-infrastructure"]),
    date: z.date(),
  }),
});

export const collections = { blog };
