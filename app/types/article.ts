import type { TAuthorID } from '@/data/authors';

export interface IImageProperties {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface IArticle extends Record<string, unknown> {
  author:      TAuthorID;
  category?:   string;
  date:        string;
  updated?:    string;
  description: string;
  featured?:   boolean;
  path:        string;
  title:       string;
  image?:      string | IImageProperties; // TODO: add image type, check Nuxt Content docs if we could inherit from there
};
