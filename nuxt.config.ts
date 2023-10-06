import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [ '@nuxt/content', ['@nuxtjs/i18n', { i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  } }] ],
  components: {
    // Makes all components in the components directory global,
    // for MDC (::component) to work.
    global: true,
    dirs: ['~/components'],
  },
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
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
})