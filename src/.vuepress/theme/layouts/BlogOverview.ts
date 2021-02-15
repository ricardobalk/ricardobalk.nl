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