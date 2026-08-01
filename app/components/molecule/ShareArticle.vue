<template>
  <div class="share-article">
    <span>
      Share this article:
    </span>
    
      <MoleculeCopyBox :value="currentUrl" class="flex-1" />
  </div>
</template>

<style lang="postcss">
  .share-article {
    @apply flex gap-2 items-center content-center;
  }
</style>

<script setup lang="ts">
  const currentUrl = ref('');

  if (typeof window !== 'undefined') {
    currentUrl.value = window.location.href;
  }
</script>