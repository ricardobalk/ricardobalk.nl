import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  telemetry: false,
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
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/main.css',
  ],
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
  vite: {
    optimizeDeps: {
      include: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
      ],
    },
    plugins: [
      tailwindcss(),
      svgLoader({
        svgoConfig: {
          // https://github.com/jpkleemans/vite-svg-loader
        }
      }),
    ],
  },
})
