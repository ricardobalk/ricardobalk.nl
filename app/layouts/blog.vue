<template>
  <div class="blog">
    <NuxtLayout name="default">
      <template #site-header>
        <SiteHeader />
      </template>

      <BlogOverviewHeader>
        <slot />
      </BlogOverviewHeader>

      <UiWarningBanner type="info" v-if="false">
        <p>
          This blog will be transferred to a separate domain,
          so that it can be used as a standalone blog where other people
          can also write articles.
        </p>
      </UiWarningBanner>

      <section class="filters">
        <div class="filter">
          <span>
            Filter by category:
          </span>

          <UiMultiSelectBox
            v-model="chosenCategories"
            :options="availableCategories"
            :title="'Filter by category:'"
            type="checkbox"
          />
        </div>
      </section>

      <BlogArticleOverview :articles="articles" />

      <template #site-footer>
        <SiteFooter />
      </template>
    </NuxtLayout>
  </div>
</template>

<style>
@reference "~/assets/css/main.css";
  .blog {
    @apply dark:bg-black;

    > main {
      @apply dark:text-gray-200;
    }

    .filters {
      @apply px-8 py-4;
      .filter { @apply flex items-center gap-4 flex-wrap; }
    }
  }
</style>

<script setup lang="ts">
  import type { IArticle }                  from '@/types/article';
  import { getCategoryBySlug }              from '@/utils/categories';
  import type { TAuthorID }                 from '@/data/authors';
  import type { TCategories }               from '@/data/categories';

  const chosenCategories = ref<string[]>([]);

  const fetchArticles = async () => {
    /**
     * Fetches all articles from the Nuxt Content API, and returns them as an array of IArticle objects.
     * The articles are sorted by date, where the most recently updated article precedes the next most recently updated article,
     * followed by the most recently created article. Within each group, the featured articles precede the non-featured articles.
     */

    /**
     * Fetches all articles that match the query.
     */
    const contentQuery = queryCollection('content')
      .where('path', 'LIKE', '/blog/%')
      .where('type', '=', 'article')
      .where('date', '<=', new Date().toISOString())
      .orWhere(query => query
        .where('draft', '=', false)
        .where('draft', 'IS NULL'));

    const contentQueryResult = await contentQuery.all().catch((error: Error) => {
      console.error(`Error while fetching articles: ${error.message}`);
      return [];
    });

    /**
     * Sort the articles by date, where the most recently updated article precedes the next most recently updated article,
     * followed by the most recently created article. Within each group, the featured articles precede the non-featured articles.
     */
    const sortedArticles = contentQueryResult.reduce((accumulator, contentQueryResult) => {
      const article: IArticle = {
        locale:      contentQueryResult.locale,
        type:        contentQueryResult.type,
        author:      (contentQueryResult.author ?? 1) as TAuthorID,
        category:    contentQueryResult.category,
        date:        contentQueryResult.date ?? '',
        updated:     contentQueryResult.updated,
        description: contentQueryResult.description ?? '',
        path:        contentQueryResult.path,
        title:       contentQueryResult.title,
        featured:    contentQueryResult.featured,
      };

      /**
       * Inserts the article in the correct position in the accumulator array, based on the date(s) and featured properties.
       */
      const articleDate = article.updated ?? article.date;
      const index = accumulator.findIndex((a) => {
        if (a.featured && !article.featured) {
          return false;
        } else if (!a.featured && article.featured) {
          return true;
        } else {
          return new Date(a.updated ?? a.date).getTime() < new Date(articleDate).getTime();
        }
      });

      if (index === -1) {
        accumulator.push(article);
      } else {
        accumulator.splice(index, 0, article);
      }

      return accumulator;
    }, [] as IArticle[]);

    return sortedArticles;
  }

  const { data: allArticles } = await useAsyncData(
    'blog-articles',
    fetchArticles,
    { default: () => [] },
  );

  const articles = computed(() => {
    if (chosenCategories.value.length === 0) {
      return allArticles.value;
    }

    return allArticles.value.filter(article => (
      article.category && chosenCategories.value.includes(article.category)
    ));
  });

  const availableCategories = computed<TCategories>(() => {
    /**
     * Use a Set to build a list of unique categories, based on the articles in const `articles`.
     * Then, convert the Set to an array, and sort the array alphabetically.
     * Use an accumulator to build an object with the category slug as key, and the category name as value.
     * the name of the category gets looked up by getCategoryBySlug, which is imported from '@/utils/categories'.
     */

    const categories = allArticles.value.reduce((accumulator, article) => {
      if (article.category === undefined) return accumulator;
        accumulator.add(article.category);
      return accumulator;
    }, new Set<string>()); // e.g. Set(2) { 'web-development', 'software-engineering' }

    return Array.from(categories).sort().reduce((accumulator, category) => {
      accumulator[category] = getCategoryBySlug(category);
      return accumulator;
    }, {} as TCategories); // e.g. { 'web-development': 'Web Development', 'software-engineering': 'Software Engineering' }
  });

</script>
