<template>
  <slot name="site-header" />

  <main>
    <slot />
  </main>

  <slot name="site-footer" />
</template>

<style lang="postcss">
main {
  @apply flex flex-col items-center gap-4;
}
</style>