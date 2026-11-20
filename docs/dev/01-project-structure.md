# Project structure

The app follows Nuxt's route and layout conventions. Components are grouped by the pages they serve, with shared site and UI components alongside them:

```text
app/
  pages/              Routes for home, blog, and content pages
  layouts/            Page layouts
  components/
    home/             Home sections, including About and contact details
    blog/             Article cards, overview, and author details
    site/             Header, footer, navigation, and theme toggle
    ui/               Shared links, icons, and form controls
  data/               Author, category, and navigation data
  utils/              Author and category lookup helpers
  types/              Shared article, link, and navigation types
content/              Markdown pages and blog articles
```

Nuxt adds the directory name to component names: `home/Hero.vue` becomes `HomeHero`, and `ui/WarningBanner.vue` becomes `UiWarningBanner`. These names also work in Markdown components, such as `:HomeHero` and `::UiWarningBanner`. Keep shared TypeScript types in `app/types` rather than importing Vue components for their types.
