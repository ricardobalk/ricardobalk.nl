<template>
  <header v-if="hasSlot('site-header')" class="site-header">
    <slot name="site-header" />
  </header>

  <main>
    <slot />
  </main>

  <footer v-if="hasSlot('site-footer')" class="site-footer">
    <slot name="site-footer" />
  </footer>
</template>

<style lang="postcss">
.site-header, main, .site-footer {
  @apply flex flex-col items-center;
}
</style>

<script setup lang="ts">
const hasSlot = (name : string) => useSlots()[name] !== undefined;
</script>