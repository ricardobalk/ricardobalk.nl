<template>
  <slot name="site-header" />
  <slot />
  <slot name="site-footer" />
</template>

<style scoped>
@reference "~/assets/css/main.css";
main {
  @apply flex flex-col items-stretch w-screen;
}
</style>