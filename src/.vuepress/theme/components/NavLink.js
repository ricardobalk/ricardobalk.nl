import { isExternal, isMailto, isTel, ensureExt } from "../util";

export default {
  props: {
    item: {
      required: true,
    },
  },

  computed: {
    link() {
      return ensureExt(this.item.link);
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link);
      }
      return this.link === "/";
    },
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
    focusoutAction() {
      this.$emit("focusout");
    },
  },
};
