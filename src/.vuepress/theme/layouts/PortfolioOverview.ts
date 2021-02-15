  import retrievePosts from "../mixins/retrievePosts";
  import languageSelection from "../mixins/languageSelection";
  import Component from "vue-class-component";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import BigHero from "@theme/components/BigHero.vue";
  import HumanReadableDate from "@theme/global-components/HumanReadableDate.vue";

  @Component({
    name: "PortfolioOverview",
    components: { FontAwesomeIcon, BigHero, HumanReadableDate },
    mixins: [languageSelection],
  })
  export default class PortfolioOverview extends retrievePosts {
    created() {
      library.add(faChevronRight);
    }

    get portfolioItems() {
      return this.retrievePosts("portfolio");
    }

    get assets() {
      return this.$site.themeConfig.defaultAssetPaths;
    }

    get imagePath() {
      return `${this.assets.images}/content/portfolio`;
    }
  }