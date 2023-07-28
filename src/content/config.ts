import { defineCollection, z } from 'astro:content';

const commonCollection = {
  schema: z.object({
    title: z.string(),
    description: z.string(),
    contentImageAlt: z.string(),
    draft: z.boolean(),
    type: z.string(),
    cta: z.string().optional(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .or(z.date())
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    contentImage: z.string().optional(),
  }),
};

const blog = defineCollection({ ...commonCollection });

const resources = defineCollection({ ...commonCollection });

export const collections = { blog, resources };
