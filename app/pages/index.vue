<template>
  <NuxtLayout name="home">
    <template #site-header>
      <HomeNavigation />
    </template>

    <template #default>
      <ContentRenderer v-if="page" id="main-content" :value="page" tag="main" tabindex="-1" />
    </template>

    <template #site-footer>
      <HomeFooter />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { data: page } = await useAsyncData('home', () => {
    return queryCollection('content').path('/').first();
  });

  useSeoMeta({
    title: 'Ricardo Balk — Software Engineer',
    description: page.value?.description,
  });

  useHead({
    link: [
      { rel: 'preload', href: '/fonts/Inter/Inter-Variable.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/Manrope/Manrope-Variable.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    ],
  });
</script>
