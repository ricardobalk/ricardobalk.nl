<!-- Renders an accessible, simple, unstyled navigation menu, i.e. nav>ul>li -->
<template>
  <nav>
    <MoleculeNavigationList :items="props.items" />
  </nav>
</template>

<script setup lang="ts">
  import type { NavigationItems } from '@/types/navigation';

  export interface Props {
    items: NavigationItems;
  }
  const props = defineProps<Props>();
</script>
