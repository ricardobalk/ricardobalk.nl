import BigHero from "@theme/components/BigHero";
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import KeybaseUserCard from "../global-components/KeybaseUserCard.vue";
import Breadcrumbs from "@theme/components/Breadcrumbs.vue";

export default {
  components: { KeybaseUserCard, Breadcrumbs, BigHero, PageEdit, PageNav },
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
