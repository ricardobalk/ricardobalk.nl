<template>
  <UiLink :to="props.link" :title="props.title" target="_blank">
    <UiIcon :iconName="icon" />
  </UiLink>
</template>

<script setup lang="ts">
  import type { IconName } from '@fortawesome/fontawesome-common-types';
  import type { ILink } from '@/types/link';

  interface Props {
    icon:  IconName
    link:  ILink["to"],
    title: ILink["title"],
  }

  const props = defineProps<Props>();
</script>
