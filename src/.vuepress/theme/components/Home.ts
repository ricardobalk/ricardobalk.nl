import { Vue, Component } from "vue-property-decorator";
import NavLink from "@theme/components/NavLink.vue";
import HomeHero from "@theme/components/Home/Hero.vue";
import About from "@theme/components/Home/About.vue";
import Services from "@theme/components/Home/Services.vue";
import ProductAndProcess from "@theme/components/Home/ProductAndProcess.vue";
import SuccessStories from "@theme/components/Home/SuccessStories.vue";
import Conclusion from "@theme/components/Home/Conclusion.vue";

@Component({ components: { HomeHero, About, Services, ProductAndProcess, SuccessStories, Conclusion, NavLink } })
export default class Home extends Vue {
  get frontmatter() {
    return this.$frontmatter;
  }

  get services(): Record<string, any> {
    return this.frontmatter.services;
  }

  get process(): Object {
    return this.frontmatter.process;
  }

  get successStories(): Object {
    return this.frontmatter.successStories;
  }

  get nextMove(): Object {
    return this.frontmatter.nextMove;
  }
}