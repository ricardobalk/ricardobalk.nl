<template>
  <main class="page">
    <slot name="top" />

    <BigHero v-if="this.$page.frontmatter.images && this.$page.frontmatter.images.hero" :image="`${heroImage}`" />

    <div class="content-area">
      <div v-if="pageContributors" class="aside left">
        <div class="keybaseUserCards">
          <KeybaseUserCard v-for="(contributor, id) in pageContributors" :username="contributor" :key="id" />
        </div>
      </div>

      <div class="article">
        <Content class="theme-default-content custom" />
      </div>
    </div>

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <Disqus />

    <slot name="bottom" />
  </main>
</template>

<script>
  import BigHero from "@theme/components/BigHero";
  import PageEdit from "@theme/components/PageEdit.vue";
  import PageNav from "@theme/components/PageNav.vue";
  import KeybaseUserCard from "../global-components/KeybaseUserCard";

  export default {
    components: { KeybaseUserCard, BigHero, PageEdit, PageNav },
    props: ["sidebarItems"],
    computed: {
      assets() {
        return this.$site.themeConfig.defaultAssetPaths;
      },
      pageContributors() {
        return this.$page.frontmatter.contributors || this.$site.themeConfig.defaultContributors || null;
      },
      heroImage() {
        if (this.$page.frontmatter.portfolio) {
          return `${this.assets.images}/content/portfolio/${this.$page.frontmatter.images.hero.filename}`;
        } else {
          return `${this.assets.images}/content/blog/${this.$page.frontmatter.images.hero.filename}`;
        }
      },
    },
  };
</script>

<style lang="scss">
  @import "@theme/styles/global/foundation.scss";
</style>

<style lang="stylus">
  @require '../styles/wrapper.styl'
  @import "~@theme/styles/global/main";
  @import "~@theme/styles/global/main.dark";

  body
    min-height 100vh

  .page
    padding-bottom 2rem
    display block

    .content-area
      display flex
      flex-direction row
      flex-wrap wrap-reverse
      margin 0 auto

      .aside
        &.left
          margin 0 auto

          .keybaseUserCards
            display flex
            flex-direction column
            position sticky
            top 5rem
            margin 0 1rem

            .keybaseUserCard
              margin 0 auto

              &:not(:last-of-type)
                margin-bottom 1rem

      .article
        width 66%
        flex-grow 1

        .page-title
          max-width: 740px
          margin: 0 auto
          padding: 0 2.5rem

          &:first-child
            margin-top 5.5rem

        .theme-default-content
          margin 0 2rem 0 1rem

          > h1:first-of-type
            margin-top 0

          > p:first-of-type
            margin-top: 1.5rem

  #disqus_thread
    margin-top 2rem
    padding 0 2rem

  code
    border 1px solid #333;

  .custom-block
    &.danger p
      color: #555
</style>
