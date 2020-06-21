<template>
  <div class="theme-container">
    <Home v-if="$page.frontmatter.home" />
    <Page v-else :sidebar-items="sidebarItems">
      <slot name="page-top" #top />
      <slot name="page-bottom" #bottom />
    </Page>
  </div>
</template>

<script>
  import Home from "@theme/components/Home.vue";
  import Page from "@theme/components/Page.vue";

  export default {
    components: { Home, Page },
  };
</script>
