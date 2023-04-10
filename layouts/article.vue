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
  
  h1 {
    @apply text-3xl
  }
  h2 {
    @apply text-2xl
  }
  h3 {
    @apply text-xl
  }
  h1, h2, h3 {
    @apply mb-4 mt-4 first:mt-0;
  }
  p {
    @apply mb-4;
  }
  table {
    @apply w-full border-collapse;
    &, th, td {
      @apply border border-gray-300;
    }
    th, td {
      @apply p-2;
    }
  }
  pre {
    @apply bg-gray-100 p-4;
    code {
      @apply text-sm font-bold;
    }
  }
  a {
    @apply text-green-500 underline;
    &[href^="#"] {
      @apply text-gray-600 decoration-dotted;
    }
  }
  blockquote {
    @apply border-l-4 border-gray-300 italic px-4 py-2 mb-4;
    p {
      @apply mb-0 text-justify;
    }
  }
}
</style>