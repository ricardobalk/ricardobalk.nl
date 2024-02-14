import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

import { globSync } from "glob" // using glob here but any package you are comfortable with works
const routes = globSync('./content/**/*.md')
                .map(path => path.slice(7, -3))

export default defineNuxtConfig({
  modules: [ '@nuxt/content' ],
  components: {
    // Makes all components in the components directory global,
    // for MDC (::component) to work.
    global: true,
    dirs: ['~/components'],
  },
  ssr: true,
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark-dimmed',
      }
    },
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          // https://github.com/jpkleemans/vite-svg-loader
        }
      }),
    ],
  },
  nitro: {
    prerender: {
        routes: ['/sitemap.xml', '/rss.xml', ...routes]
    }
  }
})