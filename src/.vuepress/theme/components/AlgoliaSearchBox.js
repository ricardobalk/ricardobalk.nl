export default {
  props: ["options"],

  data() {
    return {
      placeholder: undefined,
    };
  },

  mounted() {
    this.initialize(this.options, this.$lang);
    this.placeholder = this.$site.themeConfig.searchPlaceholder || "";
  },

  methods: {
    initialize(userOptions, lang) {
      Promise.all([
        import(/* webpackChunkName: "docsearch" */ "docsearch.js/dist/cdn/docsearch.min.js"),
        import(/* webpackChunkName: "docsearch" */ "docsearch.js/dist/cdn/docsearch.min.css"),
      ]).then(([docsearch]) => {
        docsearch = docsearch.default;
        const { algoliaOptions = {} } = userOptions;
        docsearch(
          Object.assign({}, userOptions, {
            inputSelector: "#algolia-search-input",
            // #697 Make docsearch work well at i18n mode.
            algoliaOptions: Object.assign(
              {
                facetFilters: [`lang:${lang}`].concat(algoliaOptions.facetFilters || []),
              },
              algoliaOptions
            ),
            handleSelected: (input, event, suggestion) => {
              const { pathname, hash } = new URL(suggestion.url);
              this.$router.push(`${pathname}${hash}`);
            },
          })
        );
      });
    },

    update(options, lang) {
      this.$el.innerHTML = '<input id="algolia-search-input" class="search-query">';
      this.initialize(options, lang);
    },
  },

  watch: {
    $lang(newValue) {
      this.update(this.options, newValue);
    },

    options(newValue) {
      this.update(newValue, this.$lang);
    },
  },
};
