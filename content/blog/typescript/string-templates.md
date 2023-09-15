---
type: "article"
author: 1
category: "web-development"
date: "2023-06-09"
excerpt: "Explaining how to use TypeScript's fixed string templates and template literal types to create a fixed range of strings."
---

# TypeScript: Fixed String Templates and Template Literal Types

As technology evolves, so does our toolkit. Back in 2020, I embarked on a journey into the realm of TypeScript. My motivation? To create a demo webshop within an impossibly tight timeframe for an in-person presentation. It was a moment of decision: Why not learn something new in the process?

Fast forward to 2023, and TypeScript has become an integral part of my web development toolkit. Today, I'm excited to explore a lesser-known, yet incredibly powerful feature: TypeScript's ability to validate template literals, alongside its usual string validation.

## Harnessing the Power of Template Literal Types

TypeScript's template literal types are a versatile tool that allows you to define string structures with precision. They offer a new level of type safety and code clarity, making your applications more robust and maintainable.

### The Power of Validation

Let's dive into this feature with an example. Consider a location tracker, which, for the sake of illustration, uses a somewhat "questionable" type definition for its database records:

```typescript
type Bearing = "N" | "E" | "S" | "W";

interface Position {
	latitude:  number;
	longitude: number;
	speed?:    number;
	bearing?:  Bearing;
};

export type PositionRecords = Position[];
```

With this setup, you can create an array of position records, like so:

```typescript
const Positions: PositionRecords = [
	{
		latitude: 12.34,
		longitude: 34.56,
		speed: 1.23,
		bearing: "N"
	},
	{
		latitude: 12.34,
		longitude: 34.56,
		speed: 1.23,
		bearing: "E"
	}
	// ... and so on
];
```

This code adheres to the `PositionRecords` type definition, ensuring type safety. However, if you attempt to use "North" instead of "N," TypeScript will rightfully throw an error.

```typescript
const Positions: PositionRecords = [
	{
		latitude: 12.34,
		longitude: 34.56,
		speed: 1.23,
		bearing: "North"
	}, // This will trigger a TypeScript error
];
```

The good news is that TypeScript offers an elegant solution to allow both short and long forms of cardinal directions. By updating the `Bearing` type, you can achieve this effortlessly:

```typescript
type BearingShort = "N" | "E" | "S" | "W";
type BearingLong = "North" | "East" | "South" | "West";
type Bearing = BearingShort | BearingLong;
```

Alternatively, you can opt for a more concise version:

```typescript
type Bearing = "N" | "E" | "S" | "W" | "North" | "East" | "South" | "West";
```

With this adjustment, your location tracker gracefully accommodates both "N" and "North" as valid values for the `bearing` property.

### Practical Implementation

While our example serves as a clear illustration, a practical implementation may involve assigning numerical values to `bearing` instead, ranging from 0 to 360 degrees. You could then derive the relevant cardinal direction (north, east, south, west) by creating a small function. In theory, the `speed` and `bearing` properties might not even be necessary, as they could be calculated based on multiple records using mathematical methods. All you would truly need is a historical record of latitude and longitude pairs.

## Elevating Data Structures: Fixed String Templates for IDs

Beyond confining template literals for simple strings, TypeScript's fixed string templates offer a compelling way to define and enforce specific structures for data. Let's explore this concept with a real-world example: user IDs.

### Crafting Structured User IDs

In your application, user IDs are a crucial part of user management. Traditionally, these IDs might be represented as simple integers or strings. However, TypeScript's fixed string templates empower you to create more structured IDs, enhancing type safety and code maintainability.

Imagine defining a user ID type using a fixed string template:

```typescript
type UserId = `user-${string}`;
```

This definition specifies that a `UserId` must start with the string "user-" followed by any string. Here's how it works in practice:

```typescript
const validUserId   :UserId = "user-12345"; // This is valid
const invalidUserId :UserId = "12345";      // This triggers a TypeScript error
```

TypeScript's fixed string templates ensure that any attempt to assign a non-conforming value to a `UserId` variable results in a compile-time error. This early detection prevents issues from surfacing in your running application. However, as a developer, always place safety guards in place to prevent unexpected errors from occurring.

### Applying Structured IDs

The structured `UserId` type can be used throughout your application, improving consistency and preventing unexpected data problems. For instance, you can use it in function parameters, return types, or database schemas:

```typescript
function getUser(userId: UserId): User {
  // Function logic here
}

interface User {
  id: UserId;
  name: string;
  // Other user properties
}
```

By consistently applying this approach, you establish a clear contract for the structure of user IDs across your entire codebase. It's worth noting that you can extend this strategy to other data structures, such as product IDs, order numbers, or any other identifier that follows a specific pattern.

## Conclusion

TypeScript's fixed string templates and template literal types are formidable tools that empower you to define, validate, and structure data with precision. By leveraging these templates, you not only catch errors early in the development process but also create more robust and maintainable code. As we continue to explore TypeScript's capabilities, we discover new ways to master web development.

## References

- *Documentation - Template Literal Types.* (n.d.). Retrieved October 3, 2022, from [https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
- Template literals (Template strings) - JavaScript | MDN. (2022, September 19). Retrieved October 3, 2022, from [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


[template literal types]: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

[template literals]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals "Article on Mozilla Developer Network on Template literals, also called Template strings"