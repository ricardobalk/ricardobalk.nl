<template>
  <button v-if="!props.asLink" @click="$emit('click')" class="button">
    <slot />
  </button>

  <AtomLink v-else :to="to" class="button">
    <slot />
  </AtomLink>
</template>

<script lang="ts" setup>
  import { ILink } from '@/components/atom/Link.vue';

  interface Props {
    asLink: boolean,
    to:     ILink["to"],
    title?: ILink["title"],
  }

  const props = withDefaults(defineProps<Props>(), {
    asLink: false,
  });
</script>

<style lang="postcss">
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
