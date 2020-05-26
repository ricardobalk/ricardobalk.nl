<template>
  <div class="blog-overview-container">
    <BigHero
      title="Blog"
      image="/assets/img/site/blog/typewriter.svg"
      image-dark="/assets/img/site/blog/typewriter-dark.svg"
      class="blog-hero"
    />

    <section class="blog-overview">
      <div class="grid-x limited-width">
        <div class="small-offset-1 small-10 large-offset-2 large-8 cell">
          <Articles :posts="posts" :assets="assets" showExcerpts="false" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import BigHero from "@theme/components/BigHero";
  import Articles from "@theme/components/Blog/Overview/Articles";
  import retrievePosts from "@theme/mixins/retrievePosts";

  export default {
    name: "BlogOverview",
    components: { BigHero, Articles },
    mixins: [retrievePosts],
    computed: {
      assets() {
        return this.$site.themeConfig.defaultAssetPaths;
      },
      posts() {
        return this.retrievePosts("blogpost");
      },
    },
  };
</script>

<style lang="stylus">
  .blog-overview-container
    margin-top 3.6rem /* TODO: Make this dynamic, using the height of the navbar. */
    margin-bottom 5em

  @media screen and (prefers-color-scheme dark)
    .blog-overview-container
      margin-top 0 /* TODO: Make this dynamic, using the height of the navbar. */
</style>
