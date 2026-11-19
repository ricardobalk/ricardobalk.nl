<template>
  <article class="article-card" role="region">
    <NuxtLink :to="articlePath" class="no-underline text-inherit hover:text-inherit dark:hover:text-inherit" :title="`Read more about the article '${articleTitle}'.`">
      <template v-if="hasArticleImage">
        <figure class="article-image">
            <img :src="articlePath" alt="Description of the image">
        </figure>
      </template>

      <div class="information">
        <div class="meta" aria-label="Article information">
          <span v-if="hasAuthor" :aria-label="`This article was written by ${articleAuthor}`" class="author">
            {{ articleAuthor }}
          </span>

          <span v-if="hasPublicationDate" class="time">
            <time :datetime="articleDate" :aria-label="`Published on ${articleDateFormatted}`">
              {{ articleDateFormatted }}
            </time>
          </span>

          <span v-if="hasCategory" :aria-label="`in category: ${articleCategory}.`" class="articleCategory">
            {{ articleCategory }}
          </span>
        </div>

        <h3 v-if="hasTitle" class="title">
          {{ articleTitle }}
        </h3>

        <p v-if="hasDescription" class="excerpt">
          {{ articleDescription }}
        </p>

        <span class="read-more">
          Read this article &rarr;
        </span>
      </div>
    </NuxtLink>
  </article>
</template>

<style>
@reference "~/assets/css/main.css";
  .article-card {
    @apply flex flex-col gap-4;

    .article-image {
      @apply w-1/2;

      img {
        @apply w-full h-full object-cover;
      }

      & ~ .information {
        /* if an image is present, the information should take up the other half of the space */
        @apply w-1/2;
      }
    }
    
    .information {
      @apply flex flex-col w-full flex-1;

      .meta {
        @apply text-gray-500 text-sm;

        /* bullets between the elements inside the meta, except for the last element */
        >* {
          &::after {
            @apply inline content-['\2022'] mx-0.5;
          }
          &:last-child::after {
            @apply content-none;
          }
        }
      }

      .title {
        @apply text-xl font-black;
      }

      .read-more {
        @apply text-gray-500 text-sm;
      }

    }
  }
</style>

<script setup lang="ts">
  import { getAuthorById } from '@/utils/authors';
  import { getCategoryBySlug } from '@/utils/categories';

  import type { IArticle, IImageProperties } from '@/types/article';

  const props = defineProps<{
    article: IArticle;
  }>();

  const articleTitle : ComputedRef<string> = computed(() => {
    return props.article.title || '';
  });

  const hasTitle : ComputedRef<boolean> = computed(() => {
    return articleTitle && articleTitle.value.length > 0;
  });

  const articleCategory : ComputedRef<string> = computed(() => {
    return getCategoryBySlug(props.article.category || '') || '';
  });

  const hasCategory : ComputedRef<boolean> = computed(() => {
    return articleCategory && articleCategory.value.length > 0;
  });

  const articlePath : ComputedRef<string> = computed(() => {
    return props.article.path || '/blog';
  });

  const articleDescription : ComputedRef<string> = computed(() => {
    return props.article.description || '';
  });

  const hasDescription : ComputedRef<boolean> = computed(() => {
    return articleDescription.value.length > 0;
  });

  const articleDate : ComputedRef<string> = computed(() => {
    return props.article.date || '';
  });

  const hasPublicationDate : ComputedRef<boolean> = computed(() => {
    return articleDate && articleDate.value.length > 0;
  });

  const articleDateFormatted : ComputedRef<string> = computed(() => {
    const locale  : Intl.LocalesArgument       = 'en-US'                                            ;
    const options : Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' } ;
    const date    : Date                       = new Date(articleDate.value)                       ;

    return date.toLocaleDateString(locale, options);
  });

  const articleImage : ComputedRef<IImageProperties | undefined> = computed(() => {
    /* check if the image is a string, if so, return an object with the src property */
    if (typeof props.article.image === 'string') {
      return {
        src: props.article.image,
      };
    }

    /* check if the image is an object and has the required properties specified in the interface IImageProperties */
    if (typeof props.article.image === 'object' && props.article.image !== null && props.article.image.hasOwnProperty('src')) {
      return props.article.image;
    }

    /* if the image is not a string or an object, return undefined, so we can use it in v-if via hasArticleImage */
    return undefined;
  });

  const hasArticleImage : ComputedRef<boolean> = computed(() => {
    return articleImage.value !== undefined;
  });

  const articleAuthor : ComputedRef<string> = computed(() => {
    if (!props.article.author) {
      return '';
    }
    
    const author = getAuthorById(props.article.author);

    return author.name;
  });

  const hasAuthor : ComputedRef<boolean> = computed(() => {
    return articleAuthor && articleAuthor.value.length > 0;
  });
</script>
