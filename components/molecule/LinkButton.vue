<template>
  <AtomButton asLink :to="props.link" :title="props.title" target="_self">
    <slot />
  </AtomButton>
</template>

<script lang="ts" setup>
  import { ILink } from '@/components/atom/Link.vue';

  interface Props {
    link:   ILink["to"],
    title?: ILink["title"],
  }

  const props = defineProps<Props>();
</script>