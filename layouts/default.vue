<template>
  <slot name="site-header" />

  <main>
    <slot />
  </main>

  <slot name="site-footer" />
</template>

<style lang="postcss" scoped>
main {
  @apply flex flex-col items-center;
}
</style>