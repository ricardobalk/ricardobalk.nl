import NavLink from "@theme/components/NavLink.vue";
import DropdownTransition from "@theme/components/DropdownTransition.vue";
import last from "lodash/last";

export default {
  components: { NavLink, DropdownTransition },

  data() {
    return {
      open: false,
    };
  },

  props: {
    item: {
      required: true,
    },
  },

  computed: {
    dropdownAriaLabel() {
      return this.item.ariaLabel || this.item.text;
    },
  },

  methods: {
    toggle() {
      this.open = !this.open;
    },

    isLastItemOfArray(item, array) {
      return last(array) === item;
    },
  },

  watch: {
    $route() {
      this.open = false;
    },
  },
};
