export default {
  computed: {
    breadcrumbs() {
      const parts = this.$page.path.split("/");
      if (!parts[parts.length - 1].length) {
        parts.pop();
      }
      let link = "";
      const crumbs = [];
      for (let i = 0; i < parts.length; i++) {
        link += parts[i];
        const page = this.$site.pages.find(el => el.path === link || el.path === link + "/");
        link += "/";
        if (page != null) {
          crumbs.push({ path: page.path, title: page.frontmatter.breadcrumb || page.title });
        }
      }

      if (crumbs[0].path.indexOf(this.$localeConfig.path) === -1) {
        crumbs.splice(0, 1);
      }
      return crumbs;
    },
  },
};
