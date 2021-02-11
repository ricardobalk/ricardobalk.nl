module.exports = {
  title: "Ricardo Balk",
  description: "Personal Website",
  dest: "dist",
  locales: {
    "/": {
      lang: "en",
      label: "English",
      title: "Ricardo Balk",
      description: "Personal Website",
    },
    "/nl/": {
      lang: "nl",
      label: "Nederlands",
      title: "Ricardo Balk",
      description: "Persoonlijke Website",
    },
    "/de/": {
      lang: "de",
      label: "Deutsch",
      title: "Ricardo Balk",
      description: "Meiner persönlichen Webseite",
    },
  },
  plugins: {
    disqus: {
      shortname: "ricardobalk",
    },
    container: {
      type: "spoiler",
      before: info => "<details><summary>" + info + "</summary>\n",
      after: "</details>\n",
    },
    "vuepress-plugin-typescript": {
      tsLoaderOptions: {
        transpileOnly: true,
        compilerOptions: {
          // Vuepress needs an older target (as opposed to esnext) to correctly transpile optional chaining and nullish coalescing
          target: "ES2019",
        },
      },
    },
  },
  themeConfig: {
    locales: {
      "/": {
        selectText: "Languages",
        lang: "en",
        label: "English",
      },
      "/nl/": {
        selectText: "Taalkeuze",
        lang: "nl",
        label: "Nederlands",
        nav: [
          { text: "Home", link: "/nl/" },
          { text: "Blog", link: "/nl/blog/" },
          { text: "Handleidingen", link: "/nl/guides/" },
          { text: "Portfolio", link: "/nl/portfolio/" },
        ],
      },
      "/de/": {
        selectText: "Sprache wählen",
        lang: "de",
        label: "Deutsch",
        nav: [
          { text: "Startseite", link: "/de/" },
          { text: "Blog", link: "/de/blog/" },
          { text: "Guides", link: "/de/guides/" },
          { text: "Portfolio", link: "/de/portfolio/" },
        ],
      },
    },
    logo: "/assets/img/site/global/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
      { text: "Guides", link: "/guides/" },
      { text: "Portfolio", link: "/portfolio/" },
    ],
    // sidebar: 'auto',
    sidebarDepth: 3,
    defaultAssetPaths: {
      images: "/assets/img",
    },
    defaultContributors: [
      // Default contributors that are shown besides blog posts. Uses Keybase usernames.
      "ricardobalk",
    ],
    footer: {
      links: {
        navigation: [
          { text: "Privacy", location: "/privacy" },
          { text: "About", location: "/about" },
          { text: "Changes", location: "/changes" },
          {
            text: "Tor",
            location: "http://3rfoq3ia75hnxgpmtwyeyvbjbhym354tcy4ox2jaqjqhtcmd4i2mt2id.onion/",
          },
        ],
        social: {
          github: "https://github.com/ricardobalk/www",
        },
      },
    },
  },
};
