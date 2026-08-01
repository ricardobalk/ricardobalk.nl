import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-01',
  srcDir: 'app/',
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/fonts/Lato/lato.css' },
        { rel: 'stylesheet', href: '/fonts/Raleway/raleway.css' },
      ],
    },
  },
  modules: [ '@nuxt/content' ],
  components: {
    // Makes all components in the components directory global,
    // for MDC (::component) to work.
    global: true,
    dirs: ['~/components'],
  },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark-dimmed',
          },
        },
      },
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
})
