<template>
  <slot name="site-header" />
  <slot />
  <slot name="site-footer" />
</template>

<style lang="postcss">
main {
  @apply flex flex-col items-stretch w-screen gap-6;
}
</style>