<template>
  <div class="blog-overview-container">
    <!--<header class="hero">

        </header>-->

    <BigHero
      title="Blog"
      image="/assets/img/site/typewriter.svg"
      image-dark="/assets/img/site/typewriter-dark.svg"
      class="blog-hero"
    />

    <section class="blog-overview">
      <div class="grid-x limited-width">
        <div class="small-offset-1 small-10 large-offset-2 large-8 cell">
          <!-- TODO: Add breadcrumbs -->

          <Articles :posts="pages" :assets="assets" showExcerpts="false" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BigHero from "@theme/components/BigHero";
import Articles from "@theme/components/Blog/Overview/Articles";
export default {
  name: "BlogOverview",
  components: { BigHero, Articles },
  computed: {
    pages() {
      return this.$site.pages; // TODO: Also make a posts(), which only returns posts.
    },
    assets() {
      return this.$site.themeConfig.defaultAssetPaths;
    }
  }
};
</script>

<style lang="scss">
// Standard
.blog-overview-container {
  margin-top: 3.6rem; /* TODO: Make this dynamic, using the height of the navbar. */
  margin-bottom: 5em;
}

// Dark
@media screen and (prefers-color-scheme: dark) {
  .blog-overview-container {
    margin-top: 0; /* TODO: Make this dynamic, using the height of the navbar. */
  }
}
</style>
