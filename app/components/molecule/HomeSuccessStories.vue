<template>
  <section class="success-stories">
    <slot />

    <div class="stories">
      <slot name="stories" />
    </div>
  </section>
</template>

<style lang="postcss">
  .success-stories {
    @apply flex flex-col items-center py-12 dark:py-8;

    .stories {
      @apply max-w-screen-xl flex flex-wrap md:flex-nowrap gap-12 my-6 justify-center px-8 sm:px-0;
    }
  }
</style>