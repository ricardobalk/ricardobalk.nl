<template>
  <slot name="site-header">
    <OrganismSiteHeader />
  </slot>
  <slot />
  <slot name="site-footer">
    <OrganismSiteFooter />
  </slot>
</template>

<style lang="postcss" scoped>
main {
  @apply flex flex-col items-stretch w-screen;
}
</style>