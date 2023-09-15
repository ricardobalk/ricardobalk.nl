<template>
  <nav class="breadcrumbs">
    <span class="breadcrumb" v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <NuxtLink :to="breadcrumb.path">
          {{ breadcrumb.title }}
      </NuxtLink>
      <span v-if="index < breadcrumbs.length - 1">
        /
      </span>
    </span>
  </nav>
</template>

<script setup lang="ts">
  export interface IBreadcrumb {
    path:   string,
    title:  string,
  }

  export type TBreadcrumbs = IBreadcrumb[];

  const breadcrumbs = ref<TBreadcrumbs>([]);
  
  const generateCrumbs = () : TBreadcrumbs => {
    // TODO: Generate breadcrumbs from current route.

    return [
      {
        path: '/',
        title: 'Home',
      },
      {
        path: '/blog',
        title: 'Blog',
      },
      {
        path: '/blog/some-category/hello-world',
        title: 'Hello World',
      }
    ] as TBreadcrumbs;

  };

  onMounted(() => {
    breadcrumbs.value = generateCrumbs();
  });
</script>

<style lang="postcss">
  .breadcrumbs {
    @apply flex flex-wrap gap-2 text-sm;
    .breadcrumb {
      @apply flex items-center gap-2;
      .router-link-active {
        @apply text-gray-900;
      }
    }
  }
</style>