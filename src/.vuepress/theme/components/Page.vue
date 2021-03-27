<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <Breadcrumbs />
      <Content />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />
  </main>
</template>

<script>
  import { defineComponent } from "vue";
  import Breadcrumbs from "./Breadcrumbs";
  import PageMeta from "./PageMeta.vue";
  import PageNav from "./PageNav.vue";

  export default defineComponent({
    name: "Page",

    components: {
      Breadcrumbs,
      PageMeta,
      PageNav,
    },
  });
</script>

<style lang="stylus" src="../styles/global/main.styl" />