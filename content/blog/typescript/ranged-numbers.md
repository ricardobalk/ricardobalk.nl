---
type: "article"
author: 1
category: "web-development"
date: "2023-06-09"
excerpt: "TypeScript's type system can be extended to create a fixed range of numbers, adding an extra layer of safety and predictability to our code."
---

# TypeScript: Crafting Fixed Number Ranges

In JavaScript, the dynamic and versatile language that underpins the web, numbers can range from negative Infinity to positive Infinity, including everything in between. But what if we need to constrain this vast expanse to a specific range?

What if, for example, we're creating a game and we want our player's level to range only between 1 and 100? Or when we're dealing with the RGB color model, where each color channel can only range between 0 and 255?

Here's where TypeScript, a statically-typed superset of JavaScript, comes into the picture. Although TypeScript doesn't inherently provide an option to limit the range of numbers, its powerful and flexible type system can be extended to create this functionality ourselves. This will add an extra layer of safety and predictability to our code, preventing bugs and anomalies that might occur when a number falls outside the expected range.

## Defining a Fixed Number Range

Let's dive into the code to see how to define and work with fixed number ranges in TypeScript.

We start by creating a recursive Enumerate type. This type is used to generate a tuple type where each element is a numeric literal type from 0 up to N - 1. Here is the definition:

```typescript
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>
```

```typescript
type Enumerate<N extends number> = Partial<Record<keyof any, never>> extends infer O ? { [K in keyof O]: K extends N ? never : K } : never;
```

The next step is to define a RangedNumber type. This type takes two parameters: F and T, representing the range's starting and ending values. The Exclude utility type is used to exclude the range of numbers that fall below the starting value from the entire range:

```typescript
type RangedNumber<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>
```

With these types in place, we can now define a type alias for a specific range. For instance, TBookCategoryID is a type representing a book category ID that can only fall within the range 1 to 254:

```typescript
type TBookCategoryID = RangedNumber<1, 254>;
```

Now that we have a type alias for a specific range, we can use it to define a type alias for a specific value. For instance, `TBookCategory` is a type representing a book category that uses the `TBookCategoryID` type alias to constrain the category ID to the range 1 to 254:

```typescript
const BookCategories : Record<TBookCategoryID, string> = {
  1: "Fantasy",
  2: "Science Fiction",
  3: "Horror",
  4: "Thriller",
  5: "Mystery",
  6: "Romance",
  7: "Western",
  8: "Dystopian",
  9: "Memoir",
  10: "Biography",
  11: "Play",
  12: "Poetry",
  13: "Comic",
  14: "Graphic Novel",
  15: "Children's",
  16: "Young Adult",
  17: "Other",
  300: "Cooking", // <-- This will throw an error, because 300 is outside the range 1 to 254
};
```

Even though we've defined the `BookCategories` object with a category ID of 300, TypeScript will throw an error because 300 is outside the range 1 to 254. This is the power of TypeScript's type system at work.

## Continuing the Journey with complex structures

Technically, all you need to know about fixed number ranges in TypeScript has been covered. But let's just continue for a bit longer, because we're having fun, right?

Now that we've defined our `TBookCategory` type and added some categories to `BookCategories`, we can use it to create more complex structures. Let's define the `IBookInformation` interface that represents a book's information:

```typescript
interface IBookInformation {
  title:       string;
  category:    TBookCategoryID; // <-- Using TBookCategoryID, which is a RangedNumber type
  description: string;
}
```

We can also define a type alias for a collection of books, where each book is identified by its ID:

```typescript
type TBooks = Record<Number, IBookInformation>;
```

Finally, we can define a small collection of books, where each book is identified by its ID, and each book has a title, a category ID, and a short description:

```typescript
export const Books = {
  1: {
    title:       "The Lord of the Rings",
    category:    1,
    description: "The Lord of the Rings is an epic high fantasy novel by the British author and scholar J. R. R. Tolkien.",
  },
  2: {
    title:       "The Hobbit",
    category:    1,
    description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien.",
  },
  3: {
    title:       "The Silmarillion",
    category:    1,
    description: "The Silmarillion is a collection of mythopoeic works by English writer J. R. R. Tolkien, edited and published posthumously by his son, Christopher Tolkien, in 1977.",
  },
  4: {
    title:       "The Hunger Games",
    category:    2,
    description: "The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America.",
  },
  5: {
    title:       "Catching Fire",
    category:    2,
    description: "Catching Fire is a 2009 science fiction young adult novel by the American novelist Suzanne Collins, the second book in The Hunger Games series.",
  },
  6: {
    title:       "Mockingjay",
    category:    2,
    description: "Mockingjay is a 2010 science fiction novel by American author Suzanne Collins. It is the last installment of The Hunger Games, following 2008's The Hunger Games and 2009's Catching Fire.",
  },
  7: {
    title:       "Harry Potter and the Philosopher's Stone",
    category:    3,
    description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.",
  }, // ...
};
```

Let's build a function that returns a book's information, given its ID, and also looks up the book's category name based on the category ID:

```typescript
interface IBookInformationExtended extends IBookInformation {
  category: string; // <-- Using string instead of TBookCategoryID
}
  
const getBookInformation = (bookID: number): IBookInformationExtended => {
  if (!Books.hasOwnProperty(bookID)) {
    throw new Error(`Book with ID ${bookID} not found`;
  }

  const book = Books[bookID];

  if (!BookCategories.hasOwnProperty(Books[bookID].category)) {
    return {
      ...book,
      category: "Unknown", // <-- Using string instead of TBookCategoryID
    };
  }

  return {
    ...book
    category: BookCategories[Books[bookID].category], // <-- Using string instead of TBookCategoryID
  };
}
```

The `getBookInformation` function returns an object that contains the book's title, description, and category name. The category name is looked up in the `BookCategories` object, based on the book's category ID. If the category ID is not found in the `BookCategories` object, the category name is set to "Unknown". There is also a check to make sure that the book ID exists in the `Books` object.

## Conclusion

In this article, we've seen how to define a type alias for a specific Number range, and we've also seen how TypeScript's type system can be used to enforce constraints on the values that are used in these type aliases. We've also seen how to use these type aliases to define more complex structures, such as a collection of books, where each book is identified by its ID, and each book has a title, a category ID, and a short description. Finally, we've seen how to build a function that returns a book's information, given its ID, and also looks up the book's category name based on the category ID.

I hope you've enjoyed this article, and that you've learned something new. Remember, nothing is bad or good, it's all about how you use it. TypeScript's type system is a powerful tool, and it's up to you how you'd like to use it. Happy coding!