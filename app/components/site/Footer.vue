<!-- Contains the site's footer. -->
<template>
  <footer class="site-footer">
    <p>
      This website was made with
      <span role="img" title="love" aria-label="love">
        <UiIcon iconName="heart" aria-hidden="true" />
      </span>,
      a lot of
      <span role="img" title="coffee" aria-label="coffee">
        <UiIcon iconName="coffee" aria-hidden="true" />
      </span>
      and some
      <span role="img" title="code" aria-label="code">
        <UiIcon iconName="code" aria-hidden="true" />
      </span>
      by <strong>Ricardo Balk</strong>.
    </p>
    
    <p>
      Don't forget to
      <strong><UiLink to="https://github.com/ricardobalk?tab=repositories" target="_blank">check out my projects on GitHub</UiLink></strong>.
    </p>
  </footer>
</template>

<style>
@reference "~/assets/css/main.css";
.site-footer {
  @apply w-full p-4 text-sm justify-start items-center;
  @apply border-t border-t-gray-200;

  @apply sm:bg-white/70;
  @apply dark:bg-black/80 dark:border-gray-800;

  p {
    @apply inline;
  }

  p, span {
    @apply mb-0 text-sm;
  }

  .icon {
    @apply text-xs;
  }

  
}
</style>
