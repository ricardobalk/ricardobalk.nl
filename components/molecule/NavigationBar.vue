<!-- Renders a styled navigation menu, using CSS classes. -->
<template>
  <MoleculeNavigation :items="props.items" class="navbar" />
</template>

<style lang="postcss">
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
      @apply block py-2 no-underline text-gray-700 bg-white break-inside-avoid px-2;
      @apply w-full min-w-max;

      &:hover,
      &:focus,
      &:active {
        @apply bg-green-200;
      }
    }

    ul ul {
      a {
        @apply py-2 pl-4 pr-8 no-underline text-gray-700 bg-white;

        &:hover,
        &:focus,
        &:active {
          @apply bg-green-200;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
  import { NavigationItems } from "@/components/molecule/Navigation.vue"

  export interface Props {
    items: NavigationItems;
  };

  const props = defineProps<Props>();
</script>