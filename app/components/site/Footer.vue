<!-- Contains the site's footer. -->
<template>
  <footer class="site-footer">
    <p>
      This website was made with
      <span title="love" aria-label="love">
        <UiIcon iconName="heart" />
      </span>,
      a lot of
      <span title="coffee" aria-label="coffee">
        <UiIcon iconName="coffee" />
      </span>
      and some
      <span title="code" aria-label="code">
        <UiIcon iconName="code" />
      </span>
      by <strong>Ricardo Balk</strong>.
    </p>
    
    <p>
      Source code available on
        <strong>
          <UiLink :to="repositoryUrl" target="_blank">GitHub</UiLink>
        </strong>.
    </p>
  </footer>
</template>

<script setup lang="ts">
  const repositoryUrl = `https://github.com/ricardobalk/website`;
</script>

<style>
@reference "~/assets/css/main.css";
.site-footer {
  @apply w-full p-4 text-sm justify-start items-center;
  @apply border-t border-t-gray-200;

  @apply sm:sticky sm:bottom-0 sm:bg-white/70 sm:z-20;
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
