import { Categories } from '@/data/categories';

export const getCategoryBySlug = (slug: string): string => {
  if (Categories.hasOwnProperty(slug)) {
    return Categories[slug] ?? '';
  }
  return slug;
};

export const getCategorySlugByName = (name: string): string | undefined => {
  return Object.keys(Categories).find((slug) => Categories[slug] === name);
};
