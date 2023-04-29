<template>
  <NuxtLayout name="default">
    <slot name="site-header">
      <OrganismSiteHeader />
    </slot>

      <slot name="page-header">
        <header class="page-header">
          <div class="back">
            <NuxtLink to="/" title="Go back home" tabindex="0">
              <SiteLogo width="32" height="32" alt="Site Logo" />
            </NuxtLink>
          </div>
        </header>
      </slot>

      <article>
        <slot />
      </article>
    <slot name="site-footer">
      <OrganismSiteFooter />
    </slot>
  </NuxtLayout>
</template>

<style lang="postcss">
article {
  @apply px-4 py-8 w-full max-w-2xl;
}
</style>