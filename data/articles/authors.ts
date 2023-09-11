/***
 * Custom types for authors.
 */

/**
 * Generates a type that represents a list of numbers from 0 to N
 * Acc is accumulator that stores the generated numbers
 * @param N The number to generate to.
 * @param Acc Accumulator to store the generated numbers. Initial value is empty array `[]`.
 */
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

/**
 * Generates a type that represents a list of numbers from F to T
 * @param F the first number in range.
 * @param T the last number in range.
 */
type RangedNumber<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>


/**
 * Type definitions for authors.
 */

// Define the ID type for the author. Accepts numbers from 1 to 255.
export type TAuthorID = RangedNumber<1, 255>;

// Define the author interface
export interface IAuthor {
  name:          string;
  occupation?:   string;
  organization?: string;
  picture?:      string;
}

// Define the authors type, author ID as key and object of author details as value
export type TAuthors = Record<TAuthorID, IAuthor>;


/**
 * Author data
 */

// Define all authors
export const Authors = {
  1: {
    name:       "Ricardo",
    occupation: "Full Stack Software Engineer",
    picture:    "/images/avatar-ricardo-balk.webp",
  },
  2: {
    name:       "Mike",
    occupation: "Platform Engineer",
    picture:    "/images/avatar-darkflib.webp",
  },
} as TAuthors;

export const GetAuthorById = (id: TAuthorID): IAuthor => {
  if (!Authors.hasOwnProperty(id)) {
    return { name: "Unattributed" }
  }
  return Authors[id];
}

/***
 * Functions to get author details
 */

/**
 * Get author by ID
 * @param id ID of the author.
 * @return The author object, if found. If not found, return an object with name as "Unattributed".
 */
export const GetAuthorByName = (name: string): IAuthor => {
  return Object.values(Authors).find((author) => {
    return author.name === name;
  }) as IAuthor;
};

/**
 * Get author by name
 * @param name Name of the author.
 * @return The author object, if found. If not found, return an undefined object.
 */
export const GetAuthorsByOccupation = (occupation: string): IAuthor[] => {
  return Object.values(Authors).filter((author) => {
    return author.occupation === occupation;
  }) as IAuthor[];
};

/**
 * Get authors by occupation
 * @param occupation Occupation of the authors.
 * @return Array of author objects that match the occupation. If no authors match, return an empty array.
 */
export const GetAllAuthorsPictures = (): string[] => {
  return Object.values(Authors).map((author) => {
    return author.picture;
  });
};