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
    class="atom-link"
  >
    <slot />
  </NuxtLink>
</template>

<style lang="postcss">
.atom-link {
  @apply text-green-500 hover:text-green-700;
  @apply transition-colors duration-100 ease-in-out;
}
</style>

<script setup lang="ts">
  import { RouteLocationRaw } from 'vue-router';

  export interface ILink {
    to: RouteLocationRaw;
    target?: '_blank' | '_self' | '_parent' | '_top';
    title?: string;
    rel?: 'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noreferrer' | 'noopener' | 'prev' | 'search' | 'tag';
    download?: boolean;
    referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
  }

  const props = defineProps<ILink>();
</script>