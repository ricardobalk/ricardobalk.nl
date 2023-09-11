<!-- Renders an accessible, simple, unstyled navigation menu, i.e. nav>ul>li -->
<template>
  <nav>
    <MoleculeNavigationList :items="props.items" />
  </nav>
</template>

<script setup lang="ts">
  import { ILink } from '@/components/atom/Link.vue';

  export interface NavigationItem {
    label: string;
    link?: ILink;
    children?: NavigationItem[];
  }

  export type NavigationItems = NavigationItem[];

  export interface Props {
    items: NavigationItems;
  }
  const props = defineProps<Props>();
</script>