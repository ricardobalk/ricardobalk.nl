import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [ '@nuxt/content' ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})