<template>
  <NuxtLayout v-if="page" name="article" :author="page.author">
    <ContentRenderer :value="page" />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const route = useRoute();
  const { data: page } = await useAsyncData(`content:${route.path}`, () => {
    return queryCollection('content').path(route.path).first();
  });

  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' });
  }
</script>
