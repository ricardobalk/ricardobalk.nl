<!-- Renders the recursive list part of the navigation menu, i.e. ul>li>(a|span) -->
<template>
  <ul>
    <template v-for="item in props.items" :key="item.label">
      <li v-if="!item.feature || isFeatureEnabled(item.feature)" tabindex="0">
        <template v-if="item.link">
          <UiLink :to="item.link.to">
            {{ item.label }}
          </UiLink>
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
    </template>
  </ul>
</template>

<script setup lang="ts">
  import type { NavigationItems } from '@/types/navigation'

  export interface Props {
    items: NavigationItems;
  }
  const { isFeatureEnabled } = useFeatureFlags();
  const props = defineProps<Props>();
</script>
