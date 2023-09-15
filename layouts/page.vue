<template>
  <NuxtLayout name="default">
    <slot name="site-header">
      <OrganismSiteHeader />
    </slot>

      <article>
        <header class="page-header w-full max-w-2xl flex flex-col gap-4">
          <NuxtLink to="/" title="Back to blog articles" tabindex="0">
            <span class="flex gap-1 items-center text-sm mb-8">
              <AtomIcon iconName="chevron-left" />
              Back home
            </span>
            <hr />
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

<style lang="postcss" scoped>
article {
  @apply w-full max-w-2xl px-4 py-12 mx-auto flex flex-col gap-4;

  .article-content {
    @apply border-b border-gray-300 pb-2;
  }
}
</style>