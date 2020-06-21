<template>
  <div class="global-layout" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

    <Navbar @toggle-sidebar="toggleSidebar" />

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <slot name="sidebar-top" #top />
      <slot name="sidebar-bottom" #bottom />
    </Sidebar>

    <component :is="layout" />

    <Footer :links="$site.themeConfig.footer.links" :class="this.$frontmatter.home ? 'home' : ''" />
  </div>
</template>

<script>
  import Navbar from "@theme/components/Navbar.vue";
  import Sidebar from "@theme/components/Sidebar.vue";
  import Footer from "@theme/components/Footer.vue";
  import { resolveSidebarItems } from "../util";

  export default {
    components: { Navbar, Sidebar, Footer },

    data() {
      return {
        isSidebarOpen: false,
      };
    },

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

      shouldShowNavbar() {
        const { themeConfig } = this.$site;
        const { frontmatter } = this.$page;
        if (frontmatter.navbar === false || themeConfig.navbar === false) {
          return false;
        }
        return this.$title || themeConfig.logo || themeConfig.repo || themeConfig.nav || this.$themeLocaleConfig.nav;
      },

      shouldShowSidebar() {
        const { frontmatter } = this.$page;
        return !frontmatter.home && frontmatter.sidebar !== false && this.sidebarItems.length;
      },

      sidebarItems() {
        return resolveSidebarItems(this.$page, this.$page.regularPath, this.$site, this.$localePath);
      },

      pageClasses() {
        const userPageClass = this.$page.frontmatter.pageClass;
        return [
          {
            "no-navbar": !this.shouldShowNavbar,
            "sidebar-open": this.isSidebarOpen,
            "no-sidebar": !this.shouldShowSidebar,
          },
          userPageClass,
        ];
      },
    },

    mounted() {
      this.$router.afterEach(() => {
        this.isSidebarOpen = false;
      });
    },

    methods: {
      toggleSidebar(to) {
        this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
        this.$emit("toggle-sidebar", this.isSidebarOpen);
      },

      // side swipe
      onTouchStart(e) {
        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY,
        };
      },

      onTouchEnd(e) {
        const dx = e.changedTouches[0].clientX - this.touchStart.x;
        const dy = e.changedTouches[0].clientY - this.touchStart.y;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
          if (dx > 0 && this.touchStart.x <= 80) {
            this.toggleSidebar(true);
          } else {
            this.toggleSidebar(false);
          }
        }
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
