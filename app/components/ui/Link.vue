<!-- Renders a link using NuxtLink.
     This component can be extended to differentiate between internal and external links, 
     like showing a small icon after the link when it's an external link. -->
<template>
  <NuxtLink
    :to="props.to"
    :target="props.target"
    :title="props.title"
    :rel="props.rel"
    :download="props.download"
    :referrerpolicy="props.referrerpolicy"
    class="ui-link"
  >
    <slot />
  </NuxtLink>
</template>

<style>
@reference "~/assets/css/main.css";
.ui-link {
  @apply text-link hover:text-link-hover;
  @apply transition-colors duration-100 ease-in-out;
}
</style>

<script setup lang="ts">
  import type { ILink } from '@/types/link';

  const props = defineProps<ILink>();
</script>
