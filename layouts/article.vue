<template>
  <NuxtLayout name="default">
    <slot name="site-header">
      <OrganismSiteHeader />
    </slot>

      <article>
        <header class="page-header w-full max-w-2xl flex flex-col gap-4">
          <MoleculeAuthor :author="author" />

          <NuxtLink to="/blog" title="Back to blog articles" tabindex="0">
            <span class="flex gap-1 items-center text-sm">
              <AtomIcon iconName="chevron-left" />
              Back to blog articles
            </span>
          </NuxtLink>
        </header>

        <div class="article-content" role="main">
          <slot />
        </div>

        <footer class="article-footer">
          <ClientOnly>
            <MoleculeShareArticle />
          </ClientOnly>
        </footer>
      </article>

    <slot name="site-footer">
      <OrganismSiteFooter />
    </slot>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { TAuthorID } from '@/data/articles/authors';

  const author = computed(() => {
    const { page } = useContent();

    if (page.value.author) {
      return <TAuthorID>page.value.author;
    }

    return 1;
  });

</script>

<style lang="postcss" scoped>
article {
  @apply w-full max-w-2xl px-4 py-12 mx-auto flex flex-col gap-4;

  .article-content {
    @apply border-b border-gray-300 pb-2;
  }
}
</style>