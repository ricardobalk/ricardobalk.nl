<template>
  <div class="blog-overview-container">
    <BigHero :title="pageTitle" :image="heroImages.regular" :image-dark="heroImages.dark" class="blog-hero" />
    <section class="blog-overview">
      <div class="grid-x limited-width">
        <div class="small-offset-1 small-10 large-offset-2 large-8 cell">
          <Articles :posts="posts" :assets="assets" showExcerpts="false" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import retrievePosts from "../mixins/retrievePosts"; // Note: This file contains necessary module imports
  import Component from "vue-class-component";
  import BigHero from "@theme/components/BigHero.vue";
  import Articles from "@theme/components/Blog/Overview/Articles.vue";

  @Component({ name: "BlogOverview", components: { BigHero, Articles } })
  export default class BlogOverview extends retrievePosts {
    get heroImages() {
      return this.$page.frontmatter.heroImages
        ? this.$page.frontmatter.heroImages
        : {
            regular: "/assets/img/site/blog/typewriter.svg",
            dark: "/assets/img/site/blog/typewriter-dark.svg",
          };
    }
    get pageTitle() {
      return this.$page.title ? this.$page.title : "Blog";
    }
    get whatToShow() {
      if (this.$page.frontmatter.type) {
        return this.$page.frontmatter.type;
      } else {
        return "blogpost";
      }
    }
    get assets() {
      return this.$site.themeConfig.defaultAssetPaths;
    }
    get posts() {
      return this.retrievePosts(this.whatToShow);
    }
  }
</script>

<style lang="stylus">
  @require '~@theme/styles/global/variables';

  .blog-overview-container
    margin-top $navigation-bar-height /* TODO: Make this dynamic, using the height of the navbar. */
    margin-bottom 5em

  @media screen and (prefers-color-scheme dark)
    .blog-overview-container
      margin-top 0 /* TODO: Make this dynamic, using the height of the navbar. */
</style>
