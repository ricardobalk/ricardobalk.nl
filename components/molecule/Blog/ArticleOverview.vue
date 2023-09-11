<template>
  <section class="article-overview">
    <MoleculeBlogArticleOverviewItem v-for="(article, index) in props.articles" :key="index" :article="article" />
  </section>
</template>

<style lang="postcss">
  .article-overview {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-xl p-4 sm:p-8;
    
    .article-card {
      @apply px-6 py-4 border border-gray-200 shadow-md rounded-md max-w-none;
      @apply dark:border-dotted dark:border-gray-600 dark:transition-colors dark:hover:bg-gray-900 dark:hover:border-gray-500 dark:hover:border-dashed;

      /* first child: full width (3 grid columns) */
      &:first-child {
        @apply col-span-full; 
      }

      /* first and 2nd child: full width (3 grid columns), 2nd child: reverse order */
      /* @apply even:flex-row-reverse;
      &:nth-child(-n + 2) {
        @apply col-span-3 w-full; 
      } */
      
      /* from 2nd child on, flex-col */
      &:nth-child(n + 2) {
        @apply flex-col;
        .article-image, .information {
          @apply w-full;
        }
        .information {
          @apply p-0 mb-4;
        }
      }
    }
  }
</style>

<script setup lang="ts">
  import { IArticle } from '@/components/molecule/Blog/ArticleOverviewItem.vue';

  const props = defineProps<{
    articles: IArticle[];
  }>();
</script>