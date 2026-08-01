<!-- Renders a few Lorem Ipsum paragraphs. -->
<template>
  <ClientOnly>
    <p v-for="n in props.count" :key="n">
      <AtomLoremIpsumParagraph />
    </p>
  </ClientOnly>
</template>

<script setup lang="ts">  
  const props = defineProps<{
    count?: number;
  }>();
</script>