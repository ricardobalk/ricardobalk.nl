<!-- Renders the recursive list part of the navigation menu, i.e. ul>li>(a|span) -->
<template>
  <ul>
    <li v-for="(item, index) in props.items" :key="index" tabindex="0">
      <template v-if="item.link">
        <Link :to="item.link.to">
          {{ item.label }}
        </Link>
      </template>

      <template v-else>
        <span>
          {{ item.label }}
        </span>
      </template>

      <template v-if="item.children">
        <NavigationList :items="item.children" />
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import Link                from '@/components/atoms/Link.vue';
  import { NavigationItems } from '@/components/molecules/Navigation.vue'

  export interface Props {
    items: NavigationItems;
  }
  const props = defineProps<Props>();
</script>