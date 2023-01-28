import * as chokidar from "chokidar";
import type { UserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { chalk, logger } from "@vuepress/utils";
import { navbar, sidebar } from "./configs";
import path from "path";

const config: UserConfig<DefaultThemeOptions> = {
  base: "/",
  dest: "dist",

  theme: path.resolve(__dirname, "theme"),

  alias: {
    "@/theme": path.resolve(__dirname, "theme"),
    "@/components": path.resolve(__dirname, "theme", "components"),
    "@/styles": path.resolve(__dirname, "theme", "styles"),
    "@/public": path.resolve(__dirname, "public"),
    "@/types": path.resolve(__dirname, "types"),
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "VuePress" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "VuePress" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],

  // site-level locales config
  locales: {
    "/": {
      lang: "en-GB",
      title: "Ricardo Balk",
      description: "Personal website with blog.",
    },
    "/nl/": {
      lang: "nl-NL",
      title: "Ricardo Balk",
      description: "Persoonlijke website met blog.",
    },
  },

  themeConfig: {
    logo: "/assets/img/site/global/logo.svg",

    // repo: 'ricardobalk/website',

    docsDir: "src",

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: false,

        // page meta
        editLinkText: "Edit this page on GitHub",
      },

      /**
       * Dutch locale config
       */
      "/nl/": {
        // navbar
        navbar: navbar.nl,
        selectLanguageName: "Nederlands",
        selectLanguageText: "Talen",
        selectLanguageAriaLabel: "Taalkeuze",

        // sidebar
        sidebar: false,

        // page meta
        editLinkText: "Pagina bewerken op GitHub",
        lastUpdatedText: "Laatste update",
        contributorsText: "Bijdragers",

        // custom containers
        tip: "Tip",
        warning: "Let op",
        danger: "Gevaar",

        // 404 page
        notFound: [
          "Oepsiefloepsie, het internet liet u in de steek!",
          "Pagina niet gevonden. Wat stom!",
          "Het lijkt erop dat deze pagina niet bestaat. Ga anders lekker een potje tafelvoetbal doen!",
          "Spreek ik Chinees? 看起来我们进入了错误的链接. Nu wel.",
        ],
        backToHome: "Terug naar home",

        // other
        openInNewWindow: "In apart venster openen",
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: process.env.NODE_ENV === "production",
    },
  },

  plugins: [["@vuepress/plugin-pwa"], ["@vuepress/plugin-prismjs", { preloadLanguages: ["vue", "ts", "js", "json"] }]],

  evergreen: process.env.NODE_ENV !== "production",

  onWatched: (_, watchers, restart) => {
    const watcher = chokidar.watch("configs/**/*.ts", {
      cwd: __dirname,
      ignoreInitial: true,
    });
    watcher.on("change", async (file) => {
      logger.info(`file ${chalk.magenta(file)} is modified`);
      await restart();
    });
    watchers.push(watcher);
  },
};

export = config;
