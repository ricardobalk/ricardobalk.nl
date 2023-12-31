export const Categories : TCategories = {
  'web-development':      'Web Development',
  'software-engineering': 'Software Engineering',
  'random':               'Random',
  'livestreaming':        'Livestreaming',
};

export type TCategories = { [slug: string]: string };

export const GetCategoryNameFromSlug = (slug: string): string => {
  if (Categories.hasOwnProperty(slug)) {
    return Categories[slug];
  }

  return slug;
};

export const GetCategorySlugFromName = (name: string): string | undefined => {
  return Object.keys(Categories).find((slug) => Categories[slug] === name);
};