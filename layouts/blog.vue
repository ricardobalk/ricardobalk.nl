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
  /* @ts-ignore, because the type definition for `queryContent` is not correct, and date throws an error, see  */
    const contentQueryDefaults : QueryBuilderWhere = { type: "article", date: { $lte: new Date() }, draft: { $ne: true }, };
    
    const contentQueryWhere : QueryBuilderWhere = chosenCategories.value.length === 0
                                                  ? contentQueryDefaults
                                                  : { ...contentQueryDefaults, category: { $in: chosenCategories.value } };

    const contentQueryResult =  await queryContent('/blog')
                                      .where(contentQueryWhere)
                                      .find();

    return contentQueryResult.map((_) => ({
      locale:      _.locale,
      type:        _.type,
      author:      _.author,
      category:    _.category,
      date:        _.date,
      updated:     _.updated,
      description: _.description,
      excerpt:     _.excerpt,
      path:        _._path,
      title:       _.title,
    })) as IArticle[];
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