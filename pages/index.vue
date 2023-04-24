<template>
  <NuxtLayout name="hello">
    <template #title>{{ productName }}</template>
    <template #message>{{ message }}</template>
    
    <div class="test-fontawesome">
      <p>Font Awesome Icon test:</p>

      <span class="icons">
        <span class="icon">
          <FontAwesomeIcon icon="fa-brands fa-mastodon"    />
        </span>

        <span class="icon">
          <FontAwesomeIcon icon="fa-solid fa-user-secret" />
        </span>

        <span class="icon">
          <FontAwesomeIcon icon="fa-regular fa-address-book"   />
        </span>
      </span>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faMastodon } from '@fortawesome/free-brands-svg-icons'

import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const productName: string = "Nuxt 3 Starter Kit";
const features: string[] = ["Vite", "Vue 3", "TypeScript", "PostCSS", "TailwindCSS"];
const message = computed(
  () => `This is a ${productName} with ${features.slice(0, -1).join(", ")} and ${features.slice(-1)}!`
);

library.add(faAddressBook, faUserSecret, faMastodon);

definePageMeta({
  layout: false,
});
</script>