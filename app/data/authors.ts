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
