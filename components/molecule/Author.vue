<template>
  <div class="author">
    <img :src="author.picture"
         :alt="`Profile picture of ${author.name}.`"
         v-if="author.picture"
         class="author-avatar">

    <div class="author-info">
      <span class="author-name" v-if="author.name">
       {{ author.name }}
      </span>
      <span class="author-occupation" v-if="author.occupation">
        {{ author.occupation }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { TAuthorID, GetAuthorById } from '@/data/articles/authors';

  interface Props {
    author: TAuthorID;
  }

  const props = withDefaults(defineProps<Props>(), {
    author: 1,
  });

  const author = computed(() => {
    return GetAuthorById(props.author);
  });
</script>

<style lang="postcss" scoped>
  .author {
    @apply flex gap-4 w-full border-b border-b-gray-200 pb-4;

    &-avatar {
      @apply w-24 h-24 rounded-full border;
    }

    &-info {
      @apply flex flex-col justify-center;
    }

    &-name {
      @apply text-lg font-bold mb-0;
    }

    &-occupation {
      @apply text-base mb-0;
    }
  }
</style>