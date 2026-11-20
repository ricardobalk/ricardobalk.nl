<template>
  <aside class="warning-banner" :class="computedClassNames">
    <slot />
  </aside>
</template>

<style>
@reference "~/assets/css/main.css";
.warning-banner {
  @apply bg-gray-50 text-black p-3 md:px-4 md:py-2 w-full text-xs text-justify border rounded-md
         dark:bg-slate-900 dark:text-slate-400 dark:border-slate-400 my-4;
  
  a {
    @apply text-link hover:text-link-hover font-semibold decoration-dotted;
  }

  & > p:last-child {
    @apply p-0 mb-0;
  }

  &.info {
    @apply bg-blue-100 text-blue-900
           dark:bg-blue-900 dark:text-blue-50 dark:border-blue-50;
  }

  &.warning {
    @apply bg-yellow-50 text-yellow-900 dark:bg-yellow-900/30
           dark:text-yellow-600 dark:border-yellow-200;
  }

  &.error {
    @apply bg-red-50 text-red-900
           dark:bg-red-900 dark:text-red-50 dark:border-red-50;
  }
}
</style>

<script setup lang="ts">
  interface IProps {
    type: 'info' | 'warning' | 'error';
  };

  const props = defineProps<IProps>();

  const computedClassNames = computed(() => {
    if (props.type) {
      return { [props.type]: true };
    }
  });
</script>
