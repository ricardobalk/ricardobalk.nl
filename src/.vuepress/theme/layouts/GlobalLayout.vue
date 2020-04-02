<template>
  <div id="global-layout">
    <Navbar />
    <component :is="layout" />
    <Footer :links="$site.themeConfig.footer.links" :class="this.$frontmatter.home ? 'home' : ''" />
  </div>
</template>

<script>
  import Navbar from "@theme/components/Navbar";
  import Footer from "@theme/components/Footer.vue";
  export default {
    components: { Navbar, Footer },
    computed: {
      layout() {
        if (this.$page.path) {
          if (this.$frontmatter.layout) {
            // You can also check whether layout exists first as the default global layout does.
            return this.$frontmatter.layout;
          }
          return "Layout";
        }
        return "NotFound";
      },
    },
  };
</script>

<style lang="scss">
  @import "~@theme/styles/global/foundation.scss";
</style>

<style lang="stylus">
  @import "~@theme/styles/global/main"
  @import "~@theme/styles/global/main.dark"
</style>
