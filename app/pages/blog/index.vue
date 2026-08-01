<template>
  <NuxtLayout name="blog">
    <template #site-header>
      <OrganismSiteHeader />
    </template>

    <template #default>
      <ContentRenderer v-if="page" :value="page">
        <template #empty>
          <h1>
            Ricardo's Blog
          </h1>

          <p>
            A collection of articles about web development, software engineering, and other
            things I find interesting.
          </p>
        </template>
      </ContentRenderer>
    </template>

    <template #site-footer>
      <OrganismSiteFooter />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { data: page } = await useAsyncData('blog-index', () => {
    return queryCollection('content').path('/blog').first();
  });
</script>
