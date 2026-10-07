import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
  }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      categories: z.array(z.string()),
      cover: image(),
      images: z.array(image()),
    }),
});

export const collections = {
  projects,
};