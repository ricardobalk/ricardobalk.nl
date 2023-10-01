<template>
  <aside class="warning-banner" :class="computedClassNames">
    <slot />
  </aside>
</template>

<style lang="postcss">
.warning-banner {
  @apply bg-gray-50 text-black px-4 py-2 w-full text-xs text-justify border rounded-md
         dark:bg-slate-900 dark:text-slate-400 dark:border-slate-400 my-4;
  
  a {
    @apply font-semibold decoration-dotted;
  }

  & > p:last-child {
    @apply p-0 mb-0;
  }

  &.info {
    @apply bg-blue-100 text-blue-900
           dark:bg-blue-900 dark:text-blue-50 dark:border-blue-50;
    
    a {
      @apply text-blue-900 hover:text-blue-700
             dark:text-blue-50 dark:hover:text-blue-300;
    }
  }

  &.warning {
    @apply bg-yellow-50 text-yellow-900 dark:bg-yellow-900
           dark:text-yellow-50 dark:border-yellow-50;
    
    a {
      @apply text-yellow-900 hover:text-yellow-700
             dark:text-yellow-50 dark:hover:text-yellow-300;
    }
  }

  &.error {
    @apply bg-red-50 text-red-900
           dark:bg-red-900 dark:text-red-50 dark:border-red-50;

    a {
      @apply text-red-900 hover:text-red-700
             dark:text-red-50 dark:hover:text-red-300;
    }
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