<template>
  <section id="about" class="home-about" aria-labelledby="about-title">
    <div class="home-container about-layout">
      <div>
        <h2 id="about-title" class="home-heading">Full-snack Software Engineer</h2>
        <p class="about-intro">
          I build frontends, backends, and a worrying collection of empty crisp packets.
          The code gets reviewed. The snacks rarely survive long enough to open an issue.
        </p>
        <NuxtLink v-if="isFeatureEnabled('blog')" class="blog-link" to="/blog">
          Read my blog
          <UiIcon iconName="arrow-right" aria-hidden="true" />
        </NuxtLink>
      </div>
      <div class="about-copy">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const { isFeatureEnabled } = useFeatureFlags();
</script>

<style scoped>
.home-about {
  padding-block: 5rem;
  border-block: 0.0625rem solid var(--home-border);
  background: var(--home-surface);
}

#about-title {
  font-size: clamp(1.625rem, 3.2vw, 2rem);
}

.about-layout {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 5rem;
}

.blog-link {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  gap: 1rem;
  color: var(--color-link);
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
}

.about-intro,
.about-copy :deep(p) {
  color: var(--home-muted);
  font-size: 1.0625rem;
  line-height: 1.75;
}

.about-intro {
  margin: 0 0 1rem;
}

.blog-link:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
  text-underline-offset: 0.3125rem;
}

.about-copy :deep(p) {
  margin: 0 0 1.25rem;
}

.about-copy :deep(p:last-child) {
  margin-bottom: 0;
}

@media (max-width: 43.75rem) {
  .home-about {
    padding-block: 3.5rem;
  }

  .about-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
