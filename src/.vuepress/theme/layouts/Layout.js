import Home from "@theme/components/Home.vue";
import Page from "@theme/components/Page.vue";
import { resolveSidebarItems } from "../util";

export default {
  components: { Home, Page },
  computed: {
    sidebarItems() {
      return resolveSidebarItems(this.$page, this.$page.regularPath, this.$site, this.$localePath);
    },
  },
};
