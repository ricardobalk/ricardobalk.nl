<template>
  <NuxtLayout name="home">
    <template #site-header>
      <SiteHeader />
    </template>

    <template #default>
      <ContentRenderer v-if="page" :value="page" tag="main" />
    </template>

    <template #site-footer>
      <SiteFooter />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { data: page } = await useAsyncData('home', () => {
    return queryCollection('content').path('/').first();
  });
</script>
