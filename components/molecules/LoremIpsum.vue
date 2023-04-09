<!-- Renders a few Lorem Ipsum paragraphs. -->
<template>
  <ClientOnly>
    <p v-for="n in props.paragraphCount" :key="n">
      <LoremIpsumParagraph />
    </p>
  </ClientOnly>
</template>

<script setup lang="ts">
  import LoremIpsumParagraph from '@/components/atoms/LoremIpsumParagraph.vue';
  
  const props = defineProps<{
    paragraphCount?: number;
  }>();
</script>