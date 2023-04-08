<template>
  <NuxtLayout name="default">
    <template #site-header>
      <p>
        This is the site header.
      </p>
    </template>

    <template #default>
      <p>
        This is the main content.
      </p>
    </template>

    <template #site-footer>
      <p>
        This is the site footer.
      </p>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>