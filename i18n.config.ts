export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    nl: {
      welcome: 'Welkom'
    }
  },
  customRoutes: 'config',
  pages: {
    'blog/[slug]': {
      nl: '/blog/[slug]'
    },
  }
}))