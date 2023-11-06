---
type: "article"
author: 1
category: "web-development"
date: "2023-10-16"
excerpt: "Manipulating and organizing data in JavaScript is a common task, especially when dealing with complex hierarchical relationships."
---

# JavaScript Wizardry: Exploring Data and Accumulation Techniques

Manipulating and organizing data in JavaScript is a common task, especially when dealing with complex hierarchical relationships.

In my current role as a full-stack software engineer, I work with lots of data that originates from both structured (SQL) and unstructured databases (node&mdash;edge relationships). However, to keep our tables clean and sane, we aim to keeping our records as easy as possible, handing off the processing of the data to the front-end as much as possible.


Imagine a scenario where we have a database table with a list of items, each of which can have a parent item.

The data, when represented as a tree, would look like this:

```
Item 1
├── Item 2
│   └── Item 4
└── Item 3
```

However, the data is stored in a flat structure, where each item only references its parent, and the front-end is responsible for creating the tree structure.

This means that our database contents look like this:

| id | display_name | parent | other_property           |
|----|--------------|--------|--------------------------|
| 1  | "Item 1"     | NULL   | "Example string"         |
| 2  | "Item 2"     | 1      | "Another example string" |
| 3  | "Item 3"     | 1      | "Yet another example string" |
| 4  | "Item 4"     | 2      | "One more example string" |

The same data, when represented in JSON, would look like this:

```json
[
  {
    id: 1,
    display_name: "Item 1",
    parent: null,
    other_property: "Example string"
  },
  {
    id: 2,
    display_name: "Item 2",
    parent: 1,
    other_property: "Another example string"
  },
  {
    id: 3,
    display_name: "Item 3",
    parent: 1,
    other_property: "Yet another example string"
  },
  {
    id: 4,
    display_name: "Item 4",
    parent: 2,
    other_property: "One more example string"
  },
  // ... more items
];
```

In this article, we'll explore different ways of transforming our flat data into a hierarchical tree structure, and how to use different array methods to manipulate and organize the data.


## 1) Turning flat data into a hierarchical array using Object.reduce() and Object.assign()

The `Object.reduce()` method, in combination with `Object.assign()`, can be a powerful tool for creating structured tree arrays. We will also discuss why this approach is particularly useful compared to traditional for loops and alternative methods.

### Understanding the data

Before diving into the benefits of using Object.reduce(), let's refresh our understanding of structured tree arrays. These arrays represent hierarchical data structures, where each item can have children nested within it. The goal is to organize the data in a way that allows for easy navigation and manipulation.

**Output from our API**

As mentioned earlier, most of the data is stored in an as easy way as possible, thus our API output is in JSON and looks like this:

```json
[
  {
    id: 1,
    display_name: "Item 1",
    parent: null,
    other_property: "Example string"
  },
  // More items here
  {
    id: 4,
    display_name: "Item 4",
    parent: 2,
    other_property: "One more example string"
  }
]
```

And as you can see, these are the database records, where each item only references its parent. This makes it lightweight for our server to distribute, and also easy to work with.

**Desired output**

Ultimately we'd like our data to be represented as an array of top-level items, each with a "children" array containing any child items. This is ideal for creating tree views on the front-end, like the one shown below:

```
Item 1
├── Item 2
│   └── Item 4
└── Item 3
```

### Let's get to code!

Using `Object.reduce()` and `Object.assign()`: With the advent of ES6, JavaScript introduced the powerful Object.reduce() method. This method iterates over an array and accumulates a value by applying a callback function to each element. By leveraging Object.reduce(), we can seamlessly build a structured tree array from an initial data set.

```javascript
// Example data:

const data = [
  {
    id: 1,
    display_name: "Item 1",
    parent: null,
    other_property: "Example string"
  },
  {
    id: 2,
    display_name: "Item 2",
    parent: 1,
    other_property: "Another example string"
  },
  {
    id: 3,
    display_name: "Item 3",
    parent: 1,
    other_property: "Yet another example string"
  },
  {
    id: 4,
    display_name: "Item 4",
    parent: 2,
    other_property: "One more example string"
  },
  // ... more items
];

// Using Array.reduce() to create a structured tree array
const structuredData = data.reduce((acc, item) => {
  const newItem = { ...item };

  if (item.parent === null) {
    // If an item has no parent, add it to the accumulator as a top-level item
    acc.push(newItem);
  } else {
    // If an item has a parent, find the parent item in the accumulator and add the current item as its child
    const parentItem = acc.find(obj => obj.id === item.parent);

    if (!parentItem.children) {
      parentItem.children = []; // Create a children array if it doesn't exist
    }

    parentItem.children.push(newItem);
  }

  return acc;
}, []);
```

Now, when we use `console.log(structuredData);`, we will find that the output looks like this:

```json
[
  {
    "id": 1,
    "display_name": "Item 1",
    "parent": null,
    "other_property": "Example string",
    "children": [
      {
        "id": 2,
        "display_name": "Item 2",
        "parent": 1,
        "other_property": "Another example string",
        "children": [
          {
            "id": 4,
            "display_name": "Item 4",
            "parent": 2,
            "other_property": "One more example string"
          }
        ]
      },
      {
        "id": 3,
        "display_name": "Item 3",
        "parent": 1,
        "other_property": "Yet another example string"
      }
    ]
  }
]
```

Now, let's provide code examples for rendering this hierarchical list in Vue 3, React, and Angular:

**Vue 3:**

```vue
<template>
  <ul>
    <li v-for="item in structuredData" :key="item.id">
      {{ item.display_name }}
      <HierarchicalList :structuredData="item.children" v-if="item.children" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    structuredData: Array
  }
}
</script>
```

**React:**

```tsx
function HierarchicalList({ structuredData }) {
  return (
    <ul>
      {structuredData.map(item => (
        <li key={item.id}>
          {item.display_name}
          {item.children && <HierarchicalList structuredData={item.children} />}
        </li>
      ))}
    </ul>
  );
}

export default HierarchicalList;
```

**Angular:**

Assuming you already have an Angular application, you can follow these steps to create the "HierarchicalList" component and render the hierarchical list:

**Generate the "HierarchicalList" Component:**

In your Angular project's root directory, open your command-line interface and run the following command:

```sh
ng generate component hierarchical-list
```

This command will create the necessary component files and folder structure.

```
src/
├── app/
    ├── hierarchical-list/
        ├── hierarchical-list.component.ts
        ├── hierarchical-list.component.html
        ├── hierarchical-list.component.css
```

**Implementation**

Open the file `hierarchical-list.component.ts`  and implement the component as follows:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hierarchical-list',
  templateUrl: './hierarchical-list.component.html',
  styleUrls: ['./hierarchical-list.component.css']
})
export class HierarchicalListComponent {
  @Input() structuredData: any[]; // Use a suitable data type for structured data
}
```

Open the file `hierarchical-list.component.html`  and implement the template for rendering the hierarchical list. This is where you'll use Angular's template syntax and structural directives.

```html
<ul>
  <li *ngFor="let item of structuredData" [key]="item.id">
    {{ item.display_name }}
    <app-hierarchical-list *ngIf="item.children" [structuredData]="item.children"></app-hierarchical-list>
  </li>
</ul>
```

In your application's main component or any other component where you want to use the "HierarchicalList" component, import and include it. For example, if you want to use it in the `app.component.html`, include the following code:

```html
<app-hierarchical-list [structuredData]="yourStructuredData"></app-hierarchical-list>
```

You can style the component by editing the `hierarchical-list.component.css` file or by using Angular's encapsulated styling techniques.

## 2) Using map() to obtain derived data.

We can use the `map()` function in JavaScript to derive new data based on our hierarchical tree. Map iterates through an array and transforms each item by applying a provided function, returning a new array of transformed items. This can, for example, be used to append new properties to objects, such as a custom key made up of processing other properties, or to calculate and add a new field, based on its input.

### Example of using map() on our data.

Consider a case where you would need to add a new derived property to our hierarchy, for instance, a `hasChildren` flag which will be `true` if an item has children, and `false` otherwise. We could achieve this by using the `map()` method. This is how it can be implemented:

```javascript
// Using Array.map() to add a hasChildren property
const enhancedData = structuredData.map((item) => {
  // Set the hasChildren property based on whether the item has child objects
  return {
    ...item,
    hasChildren: item.children.length > 0
  };
});
```

With this new flag, it'll be straightforward for the front-end to determine whether an item has children without having to check its children array's length, thus simplifying the rendering logic.

## 3) Leveraging filter() for data pruning.

`filter()` is a method designed to create a new array from an existing one, including only those elements that satisfy a particular condition. This function is handy for pruning data that doesn't meet a required criterion.

```javascript
function filterItemsWithChildren(item) {
  // Filter out items that don't have children
  if (!item.hasChildren) {
    return false;
  }

  // Recursively filter children
  item.children = item.children.filter(filterItemsWithChildren);

  return true;
}

const prunedData = enhancedData.filter(filterItemsWithChildren);
```

The `filterItemsWithChildren` function checks whether an item has children, and if it does, it applies the filter function recursively to that item's children. This way, any item at any level of the hierarchy that doesn't have children is excluded.

## More Array methods

### Array.find()

`Array.find()` returns the **first** item in an array that satisfies a provided testing function. It is useful when you need to find **one** specific item in an array based on a condition.

**Basic example:**

```javascript
let data = [1, 2, 3, 4, 5];
let foundItem = data.find(item => item > 2);
console.log(foundItem); // Returns: 3
```

**Practical example:**

Assuming we have a more complex hierarchy with various levels of nested children, we could use `find()` in combination with a loop to locate a specific item in our tree structure.

```javascript
const findItem = (id, items) => {
  let found = items.find(item => item.id === id);

  if (found) return found;

  for (let item of items) {
    if (item.children) {
      found = findItem(id, item.children);
      if (found) return found;
    }
  }

  return null;
}
```

### Array.includes()

`Array.includes()` checks if a certain value is present in an array. It is useful to verify if a certain element is present in the array.

**Basic example:**

```javascript
let data = ['apple', 'banana', 'mango'];
console.log(data.includes('apple'));
// expected output: true
```

**Practical example:**

Assuming you want to check if a specific item with a certain ID is present in your hierarchical data structure, you could use `Array.includes()` as follows:

```javascript
const isItemPresent = data.some(item => item.id === 3);

console.log(isItemPresent); // true if an item with ID 3 is present.
```

**Limitation: Not directly usable on deeply-nested objects.**

One of the limitations of `Array.includes()` is that it does not support searching for a specific object in a complex array of objects or a deeply nested array structure. This function uses the SameZero comparison algorithm, similar to the strict equality (`===`) comparison, meaning it will only return true if the search item and array element are **exactly** the same.

In terms of object comparison, two variables are strictly equal only if they refer to the same object. This means that even if two distinct objects have the exact same properties and values, the includes method will not identify them as equal.

An illustration of this limitation is shown below:

```javascript
let obj1 = { a: 1, b: 2 };
let arr = [{ a: 1, b: 2 }, { a: 2, b: 3 }];

console.log(arr.includes(obj1)); // Returns: false, even though the *values* of obj1 are present in the array. However, the *objects* are not the same.
```

To solve this, you would need to use more advanced techniques, such as deep equality checks, recursive functions, or logical functions to compare the properties (keys and values) of each object individually. Some third-party libraries such as Lodash or Underscore provide utility functions that can handle these more complicated scenarios.

## Array.forEach()

 `Array.forEach()` executes a provided function once for each array element. It is particularly useful when you need to do something for each element of a list, but don't need to create a new list or return a value.
 
 **Basic example:**
 
 ```javascript
let words = ['one', 'two', 'three'];
words.forEach(word => {
  console.log(word);
});
// expected output: 'one' 'two' 'three'
```

**Practical example:**

`forEach()` would be useful for executing something specific for each item. For instance, printing each item's `id` and `display_name`:

```javascript
structuredData.forEach(item => {
  console.log(`ID: ${item.id}, Name: ${item.display_name}`);
});
```

## Array.every()

The `every()` method tests whether all elements in the array pass the provided function. You could use this to test if **all** items in your array meet certain criteria.

```javascript
let numbers = [1, 30, 39, 29, 10, 13];
console.log(numbers.every(number => number < 40));
// expected output: true
```

**Practical example:**

Using `every()`, we could verify if all items in our structuredData array have a `display_name` property, ensuring data consistency:

```javascript
const allItemsHaveDisplayName = structuredData.every(item => item.hasOwnProperty('display_name'));

console.log(allItemsHaveDisplayName); // true if every item has a "display_name" property.
```

## Array.some()

**Practical example:**

```javascript
const someHaveChildren = structuredData.some(item => item.children.length > 0);

console.log(someHaveChildren); // true if at least one item has children.
```

## Array.sort()

**Practical example:**

```javascript
const sortedData = structuredData.sort((a, b) => {
  if (a.sort_order === null || b.sort_order === null || a.sort_order === undefined || b.sort_order === undefined) {
    return a.display_name.localeCompare(b.display_name);
  }

  if (a.sort_order < b.sort_order) {
    return -1;
  }
  if (a.sort_order > b.sort_order) {
    return 1;
  }

  // Fallback to comparing display_name if sort_order is the same
  return a.display_name.localeCompare(b.display_name);
});

console.log(sortedData);
```

In the code, we first check whether `sort_order` of either `a` or `b` is `null` or `undefined`. If so, the comparison done will be solely dependent on `display_name`. If `sort_order` values are defined, the function does the comparison on `sort_order` first and then falls back to `display_name`.	

## Conclusion

JavaScript provides an array of powerful array methods that can significantly simplify data manipulation and organization tasks, particularly when working with hierarchical data. By mastering these methods, you can enhance your productivity and build more efficient and maintainable code.

In this article, we've explored techniques to transform flat data into hierarchical structures using `Object.reduce()`, add derived properties with `map()`, and prune data using `filter()`. We've also looked at other essential array methods like `find()`, `includes()`, `forEach()`, `every()`, `some()`, and `sort()`, each with its unique use cases and advantages.

By combining these methods with your web development skills, you can become a JavaScript wizard capable of taming complex data structures with ease. Experiment with these techniques to find the setup that works best for you and your specific needs.