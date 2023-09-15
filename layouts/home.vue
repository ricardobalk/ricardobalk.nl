<template>
  <slot name="site-header" />
  <slot />
  <slot name="site-footer" />
</template>

<style lang="postcss" scoped>
main {
  @apply flex flex-col items-stretch w-screen;
}
</style>