<!-- Renders an accessible, simple, unstyled navigation menu, i.e. nav>ul>li -->
<template>
  <nav>
    <NavigationList :items="props.items" />
  </nav>
</template>

<script setup lang="ts">
  import { ILink } from '@/components/atoms/Link.vue';
  import NavigationList from '@/components/molecules/NavigationList.vue'

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