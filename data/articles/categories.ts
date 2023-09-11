export const Categories : TCategories = {
  'web-development':      'Web Development',
  'software-engineering': 'Software Engineering',
  'de-tering':            'De tering',
  'random':               'Random',
};

export type TCategories = { [slug: string]: string };

export const GetCategoryBySlug = (slug: string): string => {
  if (Categories.hasOwnProperty(slug)) {
    return Categories[slug];
  }
  return slug;
};

export const GetCategorySlugByName = (name: string): string | undefined => {
  return Object.keys(Categories).find((slug) => Categories[slug] === name);
};