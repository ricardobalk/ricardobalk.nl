module.exports = {
  title: "Ricardo Balk",
  description: "Personal Website",
  dest: "dist",
  locales: {
    "/": {
      selectText: "Languages",
      lang: "en-GB",
      label: "English",
      title: "Ricardo Balk",
      description: "Personal Website",
    },
    "/nl/": {
      selectText: "Taalkeuze",
      lang: "nl-NL",
      label: "Nederlands",
      title: "Ricardo Balk",
      description: "Persoonlijke Website",
    },
    "/de/": {
      selectText: "Sprache wählen",
      lang: "de-DE",
      label: "Deutsch",
      title: "Ricardo Balk",
      description: "Meiner persönlichen Webseite",
    },
  },
  themeConfig: {
    locales: {
      "/": {
        selectText: "Languages",
        lang: "en-GB",
        label: "English",
      },
      "/nl/": {
        selectText: "Taalkeuze",
        lang: "nl-NL",
        label: "Nederlands",
        nav: [
          { text: "Home", link: "/nl/" },
          { text: "Blog", link: "/nl/blog/" },
          { text: "Portfolio", link: "/nl/portfolio/" },
        ],
      },
      "/de/": {
        selectText: "Sprache wählen",
        lang: "de-DE",
        label: "Deutsch",
        nav: [
          { text: "Startseite", link: "/de/" },
          { text: "Blog", link: "/de/blog/" },
          { text: "Portfolio", link: "/de/portfolio/" },
        ],
      },
    },
    logo: "/assets/img/site/global/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
      { text: "Portfolio", link: "/portfolio/" },
    ],
    // sidebar: 'auto',
    sidebarDepth: 3,
    defaultAssetPaths: {
      images: "/assets/img",
    },
    footer: {
      links: {
        navigation: [
          { text: "Privacy", location: "/privacy" },
          { text: "About", location: "/about" },
          {
            text: "Tor",
            location: "http://3rfoq3ia75hnxgpmtwyeyvbjbhym354tcy4ox2jaqjqhtcmd4i2mt2id.onion/",
          },
        ],
        social: {
          behance: "https://behance.net/ricardobalk",
          github: "https://github.com/ricardobalk/www",
        },
      },
    },
  },
};
