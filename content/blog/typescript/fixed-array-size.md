---
type: "article"
author: 1
category: "web-development"
date: "2023-06-09"
excerpt: "TypeScript's type system can be extended to create a fixed range of numbers, adding an extra layer of safety and predictability to our code."
---

# TypeScript: Fixed Array Size

Arrays in JavaScript are handy, but we often use them without thinking about their size or content. However, sometimes we need arrays with a specific number of items, like Bitcoin's BIP39 word list with 2048 words. TypeScript, with its strong typing, can help us with this.

But here's the catch: TypeScript doesn't naturally support fixed-size arrays (that is, arrays with a predefined number of items it holds). So, we need to create a custom type to make it work. This is where TypeScript shines, as it has the capability to enhance fundamental types so that we can tailor them to specific needs and constraints.

## Defining a Fixed-Length Array

Let's dive into the code and discover how to implement fixed-length arrays in TypeScript.

We begin by defining a Shift function that takes an array and shifts the array's elements, eliminating the first item:

```typescript
type Shift<A extends Array<any>> = ((...args: A) => void) extends ((...args: [A[0], ...infer R]) => void) ? R : never;
```

Next, we define two helper types: GrowExpRev and GrowExp. These types are used to grow our array until it reaches the desired length:

```typescript
type GrowExpRev<A extends Array<any>, N extends number, P extends Array<Array<any>>> = A['length'] extends N ? A : {
  0: GrowExpRev<[...A, ...P[0]], N, P>,
  1: GrowExpRev<A, N, Shift<P>>
}[[...A, ...P[0]][N] extends undefined ? 0 : 1];

type GrowExp<A extends Array<any>, N extends number, P extends Array<Array<any>>> = A['length'] extends N ? A : {
  0: GrowExp<[...A, ...A], N, [A, ...P]>,
  1: GrowExpRev<A, N, P>
}[[...A, ...A][N] extends undefined ? 0 : 1];
```

Finally, we declare our FixedLengthArray type, which takes two parameters: the type of the items it will contain (T), and the number of items it will hold (N). It also includes special cases for 0 and 1 length arrays:

```typescript
export type FixedLengthArray<T, N extends number> = N extends 0 ? [] : N extends 1 ? [T] : GrowExp<[T, T], N, [[T]]];
```

And there you have it! A custom type that ensures a fixed-length array, regardless of the circumstances. With the type defined, you can confidently use arrays in your code without having to worry about their size unexpectedly changing.

## Usage

Let's see how we can use our FixedLengthArray type in practice. We'll start by creating a type that represents a BIP39 mnemonic phrase, which is a list of 12, 18, or 24 words:

```typescript
type BIP39Mnemonic = FixedLengthArray<string, 12 | 18 | 24>;
```

This type can then be used to create a variable that will hold a mnemonic phrase:

```typescript
const mnemonic: BIP39Mnemonic = ["hello", "world", "foo", "bar", "baz", "qux", "lorem", "ipsum", "dolor", "sit", "amet", "consectetur"];
```

In this case, the mnemonic phrase contains 12 words, which is the minimum size of a BIP39 mnemonic phrase. If we try to assign an array with fewer than 12 words, TypeScript will prevent us from doing so:

```typescript
const mnemonic: BIP39Mnemonic = ["hello", "world", "foo", "bar", "baz", "qux", "lorem", "ipsum", "dolor", "sit", "amet"]; // Type 'string[]' is not assignable to type 'FixedLengthArray<string, 12 | 18 | 24>'.
```

Also, if we try to add or remove an item from a FixedLengthArray, TypeScript will prevent us from doing so, as the FixedLengthArray type will not allow it:

```typescript
mnemonic.push('hello'); // Argument of type '"hello"' is not assignable to parameter of type 'never'.
mnemonic.pop();         // Property 'pop' does not exist on type 'FixedLengthArray<string, 12>'.
```

## Conclusion

In this article, we've learned how to create a custom type that ensures an array will always have a fixed size. This is a powerful feature that can be used in a wide variety of situations, such as ensuring that a list of items is always the same length, or that an array has a minimum or maximum number of elements. By using TypeScript's type system, we can create a custom type that will enforce the rules we define and provide an extra layer of safety to our code.