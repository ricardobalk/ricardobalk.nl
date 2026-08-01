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
  import { GetAuthorById } from '@/data/articles/authors';
  import type { TAuthorID } from '@/data/articles/authors';

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

<style scoped>
@reference "~/assets/css/main.css";
  .author {
    @apply flex gap-4 w-full border-b border-b-gray-200 pb-4;
  }

  .author-avatar {
    @apply w-24 h-24 shrink-0 object-cover rounded-full border;
  }

  .author-info {
    @apply flex flex-col justify-center;
  }

  .author-name {
    @apply text-lg font-bold mb-0;
  }

  .author-occupation {
    @apply text-base mb-0;
  }
</style>
