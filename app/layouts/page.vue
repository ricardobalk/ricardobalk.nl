<template>
  <NuxtLayout name="default">
    <slot name="site-header">
      <SiteHeader />
    </slot>

      <article>
        <header class="page-header w-full max-w-2xl flex flex-col gap-4">
          <NuxtLink to="/" title="Back to blog articles" tabindex="0">
            <span class="flex gap-1 items-center text-sm mb-8">
              <UiIcon iconName="chevron-left" />
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
            <UiShareLink />
          </ClientOnly>
        </footer>
      </article>

    <slot name="site-footer">
      <SiteFooter />
    </slot>
  </NuxtLayout>
</template>

<style scoped>
@reference "~/assets/css/main.css";
article {
  @apply w-full max-w-2xl px-4 py-12 mx-auto flex flex-col gap-4;

  .article-content {
    @apply border-b border-gray-300 pb-2 wrap-anywhere;
  }
}
</style>
