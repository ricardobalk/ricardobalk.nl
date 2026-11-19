<template>
  <UiLink :to="props.link" :title="props.title" target="_self" class="button">
    <slot />
  </UiLink>
</template>

<script lang="ts" setup>
  import type { ILink } from '@/types/link';

  interface Props {
    link:   ILink["to"],
    title?: ILink["title"],
  }

  const props = defineProps<Props>();
</script>

<style>
@reference "~/assets/css/main.css";
  .button {
    @apply inline-flex items-center justify-center px-4 py-2 text-center rounded-full
           text-white bg-teal-500 no-underline
           transition-colors duration-100 ease-in-out
           hover:bg-teal-700 hover:text-white
           dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-200 dark:hover:text-slate-50
           dark:border dark:border-slate-700 dark:hover:border-slate-600;
     > * {
       @apply m-0;
     }

    @apply md:hidden; /* TODO: make this a prop somehow */
  }
</style>
