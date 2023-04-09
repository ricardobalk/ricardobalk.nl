<!-- Contains the site's footer. -->
<template>
  <footer class="site-footer">
    <p>
      This website was made with
      <span aria-label="love">love</span>,
      a lot of
      <span aria-label="coffee">coffee</span>
      and some
      <span aria-label="code">code</span>
      by <strong>Ricardo Balk</strong>.
    </p>
    
    <p>
      Source code available on
        <strong>
          <Link :to="repositoryUrl" target="_blank">GitHub</Link>
        </strong>.
    </p>
  </footer>
</template>

<script setup lang="ts">
  import Link from '@/components/atoms/Link.vue';
  const repositoryUrl = `https://github.com/ricardobalk/website`;
</script>

<style lang="postcss">
.site-footer {
  @apply flex gap-1 p-4 text-sm;
}
</style>