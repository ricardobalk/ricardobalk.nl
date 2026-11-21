# Feature flags

Define flags in `runtimeConfig.public.features` in `nuxt.config.ts`. Components read them with `isFeatureEnabled('blog')`.

## Blog visibility

The blog links are visible by default. Set `NUXT_PUBLIC_FEATURES_BLOG` to `FALSE` or `0` to hide them, or to `TRUE` or `1` to show them.

- **Docker Compose (development)** — Run `NUXT_PUBLIC_FEATURES_BLOG=0 docker compose -f docker-compose.dev.yml up -d`. Compose passes the flag to the Nuxt service. The devcontainer inherits the same setting.
- **Docker Compose (production)** — Run `NUXT_PUBLIC_FEATURES_BLOG=0 docker compose -f docker-compose.prod.yml up -d --build`. Nuxt reads the flag while generating the static pages that Caddy serves.

The flag controls the menu entry, homepage links, article listing, and the back and share controls on articles. When the flag is off, the router returns a 404 for the blog index and individual articles, including direct visits. Static builds omit those pages.
