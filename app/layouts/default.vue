<template>
  <slot name="site-header" />

  <main>
    <slot />
  </main>

  <slot name="site-footer" />
</template>

<style scoped>
@reference "~/assets/css/main.css";
main {
  @apply flex flex-1 flex-col items-center;
}
</style>