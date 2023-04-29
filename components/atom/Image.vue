<!-- Renders an image, ensures that there's an alt tag, allows adding a caption. -->
<template>
  <figure>
    <img :src="props.src" :alt="props.alt" :width="props.width" :height="props.height" />

    <figcaption v-if="showCaption">
      {{ props.caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
  interface Props {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    caption?: string;
  }

  const props = defineProps<Props>();

  const showCaption = computed(() => {
    return props.caption !== undefined && props.caption.length > 0;
  });
  </script>