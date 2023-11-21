import { z, defineCollection } from "astro:content";

export const postsSchema = z.object({
  isDraft: z.boolean().default(false),
  title: z.string(),
  description: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  author: z.string().default("Anonymous"),
  tags: z.array(z.string()),
  // An optional frontmatter property. Very common!
  footnote: z.string().optional(),
  // In frontmatter, dates written without quotes around them are interpreted as Date objects
  publishDate: z.date(),
  // You can also transform a date string (e.g. "2022-07-08") to a Date object
  // publishDate: z.string().transform((str) => new Date(str)),
  // Advanced: Validate that the string is also an email
  authorContact: z.string().email().optional(),
  // Advanced: Validate that the string is also a URL
  canonicalURL: z.string().url().optional(),
});

const postsCollection = defineCollection({
  type: "content",
  schema: postsSchema,
});

export const collections = {
  posts: postsCollection,
};
