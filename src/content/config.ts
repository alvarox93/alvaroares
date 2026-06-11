import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    readTime: z.string(),
    date: z.string(),
    placeholder: z.string(),
    description: z.string().optional(),
    lang: z.enum(['en', 'es']).default('en'),
    transitionLine1: z.string().optional(),
    transitionLine2: z.string().optional(),
  }),
});

export const collections = { posts };
