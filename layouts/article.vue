<template>
  <NuxtLayout name="default">
      <article>
        <slot />
      </article>
  </NuxtLayout>
</template>

<style lang="postcss">
article {
  @apply px-4 py-8 w-full max-w-2xl;
  
  h1 {
    @apply text-3xl
  }
  h2 {
    @apply text-2xl
  }
  h3 {
    @apply text-xl
  }
  h1, h2, h3 {
    @apply mb-4 mt-4 first:mt-0;
  }
  p {
    @apply mb-4;
  }
  table {
    @apply w-full border-collapse;
    &, th, td {
      @apply border border-gray-300;
    }
    th, td {
      @apply p-2;
    }
  }
  pre {
    @apply bg-gray-100 p-4;
  }
}
</style>

<script setup lang="ts">
  const hasSlot = (name : string) => useSlots()[name] !== undefined;
</script>