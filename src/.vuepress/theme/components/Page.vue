<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <Image
        v-if="heroImage"
        :path="heroImage.path"
        :description="heroImage.description"
        :showDescriptionAsCaption="false"
      />
      <Breadcrumbs />
      <Content />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />
  </main>
</template>

<script>
  import { defineComponent, computed } from "vue";
  import Image from "./global/Image";
  import Breadcrumbs from "./Breadcrumbs";
  import PageMeta from "./PageMeta.vue";
  import PageNav from "./PageNav.vue";
  import { usePageFrontmatter } from "@vuepress/client";

  export default defineComponent({
    name: "Page",

    components: {
      Image,
      Breadcrumbs,
      PageMeta,
      PageNav,
    },

    setup() {
      const frontmatter = usePageFrontmatter();
      const heroImage = computed(() => {
        return frontmatter.value?.images?.hero ?? null;
      });
      return { heroImage };
    },
  });
</script>
