<template>
  <NuxtLayout name="default">
    <slot name="site-header">
      <OrganismSiteHeader />
    </slot>

      <article>
        <header class="page-header w-full max-w-2xl flex flex-col gap-4">
          <MoleculeAuthor :name="author.name"
                          :occupation="author.occupation"
                          :picture="author.picture" />

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
  interface IAuthor {
    name:       string,
    occupation: string,
    picture:    string,
  }

  const author = computed(() => {
    const { page } = useContent();

    if (page.value.author) {
      return <IAuthor>page.value.author;
    }

    return <IAuthor>{
      name: 'Ricardo Balk',
      occupation: 'Full Stack Developer (Laravel / Vue)',
      picture: '/images/avatar-ricardo-balk.webp',
    };
  });

</script>

<style lang="postcss">
article {
  @apply w-full max-w-2xl px-4 mx-auto flex flex-col gap-4;

  .article-content {
    @apply border-b border-gray-300 pb-2;
  }
}
</style>