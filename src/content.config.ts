import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const vacancies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vacancies' }),
  schema: z.object({
    title: z.string(),
    location: z.string().default('NSW'),
    discipline: z.string().default('Structural Engineering'),
    type: z.string().default('Permanent'),
    active: z.boolean().default(true),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    company: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { vacancies, testimonials };
