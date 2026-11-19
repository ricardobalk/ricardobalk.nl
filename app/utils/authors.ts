import { Authors } from '@/data/authors';
import type { IAuthor, TAuthorID } from '@/data/authors';

export const getAuthorById = (id: TAuthorID): IAuthor => {
  if (!Authors.hasOwnProperty(id)) {
    return { name: "Unattributed" }
  }
  return Authors[id];
}

export const getAuthorByName = (name: string): IAuthor => {
  return Object.values(Authors).find((author) => {
    return author.name === name;
  }) as IAuthor;
};

export const getAuthorsByOccupation = (occupation: string): IAuthor[] => {
  return Object.values(Authors).filter((author) => {
    return author.occupation === occupation;
  }) as IAuthor[];
};

export const getAllAuthorsPictures = (): string[] => {
  return Object.values(Authors).map((author) => {
    return author.picture;
  }).filter((picture): picture is string => picture !== undefined);
};
