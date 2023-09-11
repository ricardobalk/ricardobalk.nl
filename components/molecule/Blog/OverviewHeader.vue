<template>
  <header class="blog-overview-header">
    <div class="inner-container">
      <slot />
    </div>
  </header>
</template>

<style lang="postcss">
  .blog-overview-header {
    @apply py-8 w-full text-center border-b mb-4;
    @apply dark:border-gray-600 dark:border-dashed dark:bg-black;
    .inner-container { @apply container mx-auto px-4; }
  }
</style>