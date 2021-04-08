---
type: post
lang: en-GB
date: 2021-03-01 08:00:00 +01:00
permalink: /blog/my-vue-3-journey/
---

# My journey of upgrading to Vue 3

This past month, I upgraded my website to VuePress 2, which is based on Vue 3, the latest version of the Vue framework. Although Vue 3 is very new (at the time of writing) and many companies are still working with Vue 2, I chose to become one of the early adaptors, so I can try out all the fancy new things that come with it. I thought it would be cool to share some of my experiences.

# Vue 3 in comparison to Vue 2

## Single versus multiple template root elements

Before Vue 3, the template needed to contain a single root element:

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>
```

But with Vue 3, it is possible to have multiple elements in your template's root:

```vue
<template>
  <h1>{{ title }}</h1>
  <h2>{{ subtitle }}</h2>
</template>
```

This could be helpful. I'm personally sticking to the single root element method.

## TypeScript becomes the default

Vue 3 uses TypeScript as default language, instead of JavaScript with custom type checking. One of the benefits of TypeScript is that the application becomes more robust, as JavaScript lacks a proper typing system.

Example... Let's write a function that checks if a word is an isogram. An isogram is a word that has no repeating letters, consecutive or non-consecutive. For example: `monkey` is an isogram, `cheetah` is not.

In JavaScript, one would write:

```js
const isIsogram = (input) => (input.length === new Set(input.toLowerCase()).size);
```

In TypeScript, one would write:

```ts
const isIsogram = (input: string): Boolean => (input.length === new Set(input.toLowerCase()).size);
```

As you can see in this very basic example, TypeScript requires you to write types the function uses. This helps in avoiding bugs, because in JavaScript, one could write `isIsogram(1234)` - `1234` being a `number` instead of a `string`. When trying to execute it in JavaScript, you will get an error: `Uncaught TypeError: input.toLowerCase is not a function`.

However, if you'd be using TypeScript, the compiler will already notify you about it when you're writing it: `Argument of type 'number' is not assignable to parameter of type 'string'. (2345)`.


```js
isIsogram("monkey") && console.log(`monkey is an isogram`)
!isIsogram("monkey") && console.log(`monkey is not an isogram`)

isIsogram("cheetah") && console.log(`cheetah is an isogram`)
!isIsogram("cheetah") && console.log(`cheetah is not an isogram`)
```

---

The simple example I've shown you comes from one the exercises I've made on [CodeWars](https://codewars.com). But besides doing some simple type checking, TypeScript can do many more things, like checking data against pre-defined 'interfaces'. It's a bit outside the scope of this document, but here's an interface I've written some time ago for a webshop demo:

```ts
// ./interfaces/ShoppingCart.ts

export interface Product extends Record<string, any> {
  // Please note that Record<string, any> is the strict variant of 'Object' ;-)
  id: number;
  title: string;
  price: number;
}

export interface WebshopProduct extends Product {
  description: string;
  thumb: string;
}

export interface ShoppingCartItem extends Product {
  quantity: number;
}
```

The idea is that different places use some common pieces of information, but some also require additional information. So instead of writing a lot of interfaces, we're using inheritance. And now we've defined these interface, it is time import and use them elsewhere...

```ts
import * from './interfaces/ShoppingCart'

let myShoppingCart !: Array<ShoppingCartItem>;

const currentlyChosenProduct : Product = {
	id: 10,
	title: "Some product",
	price: 12.34
}
```

```ts
myShoppingCart.push(currentlyChosenProduct) // Will fail, as type Product lacks the 'quantity' required by ShoppingCartItem.
myShoppingCart.push({ quantity: 1, ...currentlyChosenProduct }) // Will succeed, as we included the 'quantity'.
```

---

## Decorators

To be entirely honest, I already used TypeScript for writing my own code, a long time before Vue 3 got released &mdash; even with the lack of online guidance. I loved using decorators, which allowed me to write short and manageable pieces of code for my Vue components.

For example, take a look at this piece of code:

```ts
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ name: "Polaroid" })
export default class Polaroid extends Vue {
  @Prop({ required: true, default: "https://placehold.it/500x500" }) image!: string;
  @Prop({ required: true, default: "No caption given, did you forget to pass props?" }) caption!: string;
}
```

Thanks to `vue-property-decorator` this was all the functional code I needed to write for showing my Polaroid image on the home page of my website. Very cool and well-structured. `vue-property-decorator` depends on `vue-class-component`, which does currently not support Vue 3 (as of writing). So, with the new syntax of Vue 3 and the lack of decorators, the same piece of code now looks like this:

```ts
import { defineComponent } from 'vue'

export const Polaroid = defineComponent({
  name: 'Polaroid',
  props: {
    image: {
      type: String,
      required: true,
      default: "https://placehold.it/500x500"
    },
    caption: {
      type: String,
      required: true,
      default: "No caption given, did you forget to pass props?"
    },
  }
})

export default Polaroid
```

I don't necessarily mind learning about and adapting myself to new programming concepts, I still hope that decorators for Vue 3 will be back soon, as you can see that I had to write much more code for having the same thing.

## Composition API vs Options API

Oh, the Composition API versus the Options API &mdash; well&hellip;

Before Vue 3, one would define the `<script>` of a component in the following way:

```js
export default {
    name: 'Add',
    data() {
        return {
            num1: 0,
            num2: 0,
            sum: 0
        };
    },
    methods: {
        addNumbers: function () {
            this.sum = parseInt(this.num1) + parseInt(this.num2);
        }
    }
}
```

This is called the Options API. In Vue 3, the Composition API has been added. The same component re-written for the Composition API looks like this:


```ts
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: 'Add',
    setup() {
        let num1 = ref(0);
        let num2 = ref(0);
        let sum = ref(0);
		
        const addNumbers = () => { sum.value = parseInt(num1.value) + parseInt(num2.value); }
		
        return { num1, num2, sum, addNumbers }
    }
})
```

As you can see, we're defining the component via `defineComponent`. By doing this, it allows us to put all of our lifecycle hooks, variables, computed properties, etc. inside the `setup()`-function. Eventually, we use the `return` statement to decide which things are going to be exposed to (and therefore can be used within) the component.

The main advantage of the Composition API comes when you're writing re-usable functionalities. For example, let's import and extend our component from above:

```ts
import { defineComponent } from "vue";
import { addNumbers } from "Add";

export default defineComponent ({
  name: "SomeOtherComponent",
  setup() {
    return {
      addNumbers()
    }
  }
})
```

As you can see, we could use and (re-)expose a functionality from our previous code, without copy-pasting the entire functionality.

For simple components, you can keep using the Options API and see the Composition API as an upgrade option. If you're working or planning to work with reusable functionalities, it's clever to use the Composition API. If you want to learn more about the Options API vs the Composition API and get to know how it relates to Mixins &mdash; [this article from Bilal Haidar](https://labs.thisdot.co/blog/vue-3-composition-api-do-you-really-need-it) is worth reading!


# Splitting Vue Components

Most Vue users will use Vue's SFC (Single File Component) strategy for creating components, and their components will look like this:

```vue
<template>
 <!-- ... -->
</tempate>

<style lang="stylus">
  /* ... */
</style>

<script lang="ts">
  // ...
</script>
```

I'm using a different approach... I'm doing the opposite of Vue's SFC strategy... I have put each component in a separate directory, with an `index.ts`, an optional `types.ts`, a `.vue`-file for the template, a stylesheet and a TypeScript file with the logic. The reason for doing this is to allow the use of external linters and code analysis, which may not understand Vue SFCs yet. It also allows to easily detect when the website's logic has been altered, so it can get reviewed before applying the changes.

The first thing I do is splitting up the component into the template, stylesheet and logic. In order to do this, I create a new directory for each component. For the components themselves, I keep the contents between `<template>` and `</template>` as-is, but instead of putting the stylesheet and app logic directly into the `.vue` component, I save them in separate files. As a result, my Vue components look like this:

```vue
<template>
 <!-- ... -->
</template>

<style lang="stylus" src="./SomeComponent.styl" />
<script lang="ts" src="./SomeComponent.ts" />
```

I also put the following content in a file called `index.ts`:

```ts
import SomeComponent from "./SomeComponent.vue"
export default SomeComponent
```

> Please note that the `.vue` extension is mandatory, otherwise it would load the `.ts` file, which does not include the entire Vue component.

Thanks to this `index.ts`, it allows to do the following in other places:

```ts
import SomeComponent from "./path/to/SomeComponent" // No need for an extension now!
```

I normally also create a file called `types.ts`, which contains my types. This allows me to solely import the types in different components:

```ts
import type { FooterLinks } from "./path/to/FooterComponent/types"
```

The resulting directory structure of a splitted Vue component looks like this:

```
./SomeComponent
├── SomeComponent.styl
├── SomeComponent.ts
├── SomeComponent.vue
├── index.ts
└── types.ts
```

I have done this for each component, and now I can more easily see what's been changed, run linters, tidy up files, etc. Awesome!

Don't get me wrong, if you like using SFCs, just keep using them :wink:



---



# Conclusion

Upgrading my website from VuePress 1.x to VuePress 2 and therefore from Vue 2 to Vue 3 was a cool thing to do, despite its steep learning curve. I'm still getting used to the new syntax and conventions of Vue 3, but I'm a quick learner that loves a bit of a challenge. Every day is an adventure! :wink:

If you're planning on building something with Vue 3, I would recommend [this article written by Archita Nayak](https://www.bacancytechnology.com/blog/vue3-typescript), which guides you through the creation of a note app written in Vue 3 with TypeScript, step-by-step, and is well-written for starters.