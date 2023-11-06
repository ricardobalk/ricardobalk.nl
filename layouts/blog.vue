<template>
  <div class="blog">
    <NuxtLayout name="default">
      <template #site-header>
        <OrganismSiteHeader />
      </template>

      <MoleculeBlogOverviewHeader>
        <slot />
      </MoleculeBlogOverviewHeader>

      <MoleculeWarningBanner type="info" v-if="false">
        <p>
          This blog will be transferred to a separate domain,
          so that it can be used as a standalone blog where other people
          can also write articles.
        </p>
      </MoleculeWarningBanner>

      <section class="filters">
        <div class="filter">
          <span>
            Filter by category:
          </span>

          <MoleculeMultiSelectBox
            v-model="chosenCategories"
            :options="availableCategories"
            :title="'Filter by category:'"
            type="checkbox"
          />
        </div>
      </section>

      <MoleculeBlogArticleOverview :articles="articles" />

      <template #site-footer>
        <OrganismSiteFooter />
      </template>
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
  .blog {
    @apply dark:bg-black;
    .filters {
      @apply px-8 py-4;
      .filter { @apply flex gap-4 flex-wrap; }
    }
  }
</style>

<script setup lang="ts">
  import { IArticle }                       from '@/components/molecule/Blog/ArticleOverviewItem.vue';
  import { GetCategoryBySlug, TCategories } from '@/data/articles/categories';
  import { QueryBuilderWhere }              from '@nuxt/content/dist/runtime/types';

  const articles             = ref<IArticle[]>([]);
  const availableCategories  = ref<TCategories>({});
  const chosenCategories     = ref<string[]>([]);

  const fetchArticles = async () => {
    /**
     * Fetches all articles from the Nuxt Content API, and returns them as an array of IArticle objects.
     * The articles are sorted by date, where the most recently updated article precedes the next most recently updated article,
     * followed by the most recently created article. Within each group, the featured articles precede the non-featured articles.
     */

    /**
     * The default query, which is used when no categories are chosen:
     * Fetch all items of type "article", where the date is not in the future, and the draft property is not true (i.e. the article is not a draft).
     */
    const contentQueryDefaults : QueryBuilderWhere = { type: "article", date: { $lte: new Date() }, draft: { $ne: true }, };
    
    /**
     * Makes sure that the query is either the default query, or the default query combined with a query that filters on the chosen categories.
     */
    const contentQueryWhere : QueryBuilderWhere = chosenCategories.value.length === 0
                                                  ? contentQueryDefaults
                                                  : {
                                                      ...contentQueryDefaults,
                                                      category: {
                                                        $in: chosenCategories.value
                                                      },
                                                    };

    /**
     * Fetches all articles that match the query.
     */
    const contentQueryResult =  await queryContent('/blog')
                                      .where(contentQueryWhere)
                                      .find()
                                      .catch((error: Error) => {
                                        console.error(`Error while fetching articles: ${error.message}`);
                                        return [];
                                      });

    /**
     * Sort the articles by date, where the most recently updated article precedes the next most recently updated article,
     * followed by the most recently created article. Within each group, the featured articles precede the non-featured articles.
     */
    const sortedArticles = contentQueryResult.reduce((accumulator, contentQueryResult) => {
      const article = {
        locale:      contentQueryResult.locale,
        type:        contentQueryResult.type,
        author:      contentQueryResult.author,
        category:    contentQueryResult.category,
        date:        contentQueryResult.date,
        updated:     contentQueryResult.updated,
        description: contentQueryResult.description,
        excerpt:     contentQueryResult.excerpt,
        path:        contentQueryResult._path,
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
    }, []) as IArticle[];

    return sortedArticles;
  }

  const getAvailableCategories = () : TCategories => {
    /**
     * Use a Set to build a list of unique categories, based on the articles in const `articles`.
     * Then, convert the Set to an array, and sort the array alphabetically.
     * Use an accumulator to build an object with the category slug as key, and the category name as value.
     * the name of the category gets looked up by GetCategoryBySlug, which is imported from '@/data/articles/categories'.
     */

    const categories = articles.value.reduce((accumulator, article) => {
      if (article.category === undefined) return accumulator;
        accumulator.add(article.category);
      return accumulator;
    }, new Set<string>()); // e.g. Set(2) { 'web-development', 'software-engineering' }

    return Array.from(categories).sort().reduce((accumulator, category) => {
      accumulator[category] = GetCategoryBySlug(category);
      return accumulator;
    }, {} as TCategories); // e.g. { 'web-development': 'Web Development', 'software-engineering': 'Software Engineering' }
  };

  const showAllCategories = computed(() => {
    return chosenCategories.value.length === 0 || chosenCategories.value.length === Object.keys(availableCategories.value).length;
  });

  watch(chosenCategories, async () => {
    articles.value = await fetchArticles();
  });

  onMounted(async () => {
    articles.value = await fetchArticles();
    availableCategories.value = getAvailableCategories();
  });
</script>