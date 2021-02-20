import SidebarGroup from "@theme/components/SidebarGroup.vue";
import SidebarLink from "@theme/components/SidebarLink.vue";
import { isActive } from "../util";

export default {
  name: "SidebarLinks",

  components: { SidebarGroup, SidebarLink },

  props: [
    "items",
    "depth", // depth of current sidebar links
    "sidebarDepth", // depth of headers to be extracted
  ],

  data() {
    return {
      openGroupIndex: 0,
    };
  },

  created() {
    this.refreshIndex();
  },

  watch: {
    $route() {
      this.refreshIndex();
    },
  },

  methods: {
    refreshIndex() {
      const index = resolveOpenGroupIndex(this.$route, this.items);
      if (index > -1) {
        this.openGroupIndex = index;
      }
    },

    toggleGroup(index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index;
    },

    isActive(page) {
      return isActive(this.$route, page.regularPath);
    },
  },
};

function resolveOpenGroupIndex(route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (descendantIsActive(route, item)) {
      return i;
    }
  }
  return -1;
}

function descendantIsActive(route, item) {
  if (item.type === "group") {
    return item.children.some(child => {
      if (child.type === "group") {
        return descendantIsActive(route, child);
      } else {
        return child.type === "page" && isActive(route, child.path);
      }
    });
  }
  return false;
}