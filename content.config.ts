import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        author: z.number().optional(),
        category: z.string().optional(),
        date: z.coerce.date().optional(),
        draft: z.boolean().optional(),
        featured: z.boolean().optional(),
        layout: z.string().optional(),
        locale: z.string().optional(),
        type: z.string().optional(),
        updated: z.coerce.date().optional(),
      }),
    }),
  },
})
