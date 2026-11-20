export default defineNuxtRouteMiddleware(() => {
  const { isFeatureEnabled } = useFeatureFlags();

  if (!isFeatureEnabled('blog')) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }
});
