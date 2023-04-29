<template>
  <AtomLink :to="props.link" :title="props.title" target="_blank">
    <AtomIcon :iconName="icon" />
  </AtomLink>
</template>

<script setup lang="ts">
  import { IconName }  from '@fortawesome/fontawesome-common-types';
  import { ILink }     from '@/components/atom/Link.vue';

  interface Props {
    icon:  IconName
    link:  ILink["to"],
    title: ILink["title"],
  }

  const props = defineProps<Props>();
</script>