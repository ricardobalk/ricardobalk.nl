<template>
  <header class="navbar">
    <router-link :to="$localePath" class="home-link">
      <template v-if="$withBase($site.themeConfig.logo).indexOf('svg') !== -1">
        <inline-svg
          v-if="$site.themeConfig.logo"
          class="site-logo can-hide"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
          @transformSource="transformSvg()"
          fill="black"
        />
      </template>

      <template v-else>
        <img
          class="site-logo can-hide"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
      /></template>

      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

      <span ref="siteName" class="site-name" v-if="$siteTitle" :class="{ 'can-hide': $site.themeConfig.logo }">{{
        $siteTitle
      }}</span>
    </router-link>

    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px',
            }
          : {}
      "
    >
      <NavLinks class="can-hide" />
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
    </div>
  </header>
</template>

<script>
  import AlgoliaSearchBox from "@AlgoliaSearchBox";
  import SearchBox from "@SearchBox";
  import SidebarButton from "@theme/components/SidebarButton.vue";
  import NavLinks from "@theme/components/NavLinks.vue";
  import InlineSvg from "vue-inline-svg";

  export default {
    components: {
      SidebarButton,
      NavLinks,
      SearchBox,
      AlgoliaSearchBox,
      InlineSvg,
    },

    data() {
      return {
        linksWrapMaxWidth: null,
      };
    },

    mounted() {
      const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
      const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, "paddingLeft")) + parseInt(css(this.$el, "paddingRight"));
      const handleLinksWrapWidth = () => {
        if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
          this.linksWrapMaxWidth = null;
        } else {
          this.linksWrapMaxWidth =
            this.$el.offsetWidth -
            NAVBAR_VERTICAL_PADDING -
            ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
    },

    computed: {
      algolia() {
        return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {};
      },

      isAlgoliaSearch() {
        return this.algolia && this.algolia.apiKey && this.algolia.indexName;
      },
    },
  };

  function css(el, property) {
    // NOTE: Known bug, will return 'auto' if style value is 'auto'
    const win = el.ownerDocument.defaultView;
    // null means not to return pseudo styles
    return win.getComputedStyle(el, null)[property];
  }
</script>

<style lang="stylus">
  $navbar-vertical-padding = 1rem
  $navbar-horizontal-padding = 1rem

  .navbar
    padding $navbar-vertical-padding $navbar-horizontal-padding
    position fixed
    z-index 20
    top 0
    left 0
    right 0
    height $navbarHeight
    background-color #fff
    box-sizing border-box

    @media screen and (prefers-color-scheme: dark) {background-color: transparent;}

    .search-box
      display inline-block
      margin-right initial
      margin-left 2em
      position relative
      bottom 5px
     input
       left: 0
       min-width 10rem
       background transparent url(/assets/img/search.83621669.svg) 0.6rem 0.5rem no-repeat
       color #eee
       border-color: #666
       &:focus
         width 10rem
         background rgba(0, 0, 0, 0.5) url(/assets/img/search.83621669.svg) 0.6rem 0.5rem no-repeat
         border-color: #eee
     .suggestions
       top: 2.5rem;
       right: 0
       width 30rem

    a, span, img
      display inline-block
    .site-logo
      height $navbarHeight - 1.4rem
      min-width $navbarHeight - 1.4rem
      margin-right 0.8rem
      vertical-align top
      fill #1d1d1b
      position absolute  // TODO: Fix this
      top .75em // TODO: Fix this
      @media screen and (prefers-color-scheme: dark) { fill: #ccc };
    .site-name
      font-size 1.3rem
      font-weight 600
      color $textColor
      position relative
      &.can-hide
       display none

    .links
      padding-left 1.5rem
      box-sizing border-box
      white-space nowrap
      font-size 0.9rem
      position absolute
      right $navbar-horizontal-padding
      top $navbar-vertical-padding
      display flex
      color: #333;
      @media screen and (prefers-color-scheme: dark) {
       color: #eee;
      }
      .nav-links a, .nav-links .dropdown-title
        text-transform: uppercase
        font-weight 700
        font-size .9em
      .search-box
        flex: 0 0 auto
        vertical-align top

  @media (max-width: $MQMobile)
    .navbar
      .can-hide
        display none
      .links
        padding-left 1.5rem
      .site-name
        width calc(100vw - 9.4rem)
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
</style>
