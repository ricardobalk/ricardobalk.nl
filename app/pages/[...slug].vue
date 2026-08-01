<template>
  <NuxtLayout v-if="page" :name="layoutName">
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

  const layoutNames = ['article', 'blog', 'default', 'home', 'page'] as const;
  type LayoutName = typeof layoutNames[number];
  const layoutName: LayoutName = layoutNames.includes(page.value.layout as LayoutName)
    ? page.value.layout as LayoutName
    : 'page';
</script>
