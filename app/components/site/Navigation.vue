<!-- Renders a styled navigation menu, using CSS classes. -->
<template>
  <nav class="navbar">
    <SiteNavigationList :items="props.items" />
  </nav>
</template>

<style>
@reference "~/assets/css/main.css";
.navbar {
  @apply flex;

  ul {
    @apply list-none p-0 m-0;
    @apply flex;

    li {
      @apply relative w-full;

      ul {
        @apply absolute top-full right-0 z-10 hidden;
      }

      &:hover > ul,
      &:focus-within > ul {
        @apply block;
      }
    }

    a {
      @apply block py-2 no-underline text-gray-700 bg-transparent dark:bg-transparent dark:text-gray-200 break-inside-avoid px-2;
      @apply w-full min-w-max;

      &:hover,
      &:focus,
      &:active {
        @apply bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50;
      }
    }

    ul ul {
      a {
        @apply py-2 pl-4 pr-8 no-underline text-gray-700 bg-white dark:bg-gray-900 dark:text-gray-200;

        &:hover,
        &:focus,
        &:active {
          @apply bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
  import type { NavigationItems } from '@/types/navigation'

  export interface Props {
    items: NavigationItems;
  };

  const props = defineProps<Props>();
</script>
