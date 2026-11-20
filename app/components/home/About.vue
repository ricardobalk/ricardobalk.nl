<template>
  <section id="about" class="home-about" aria-labelledby="about-title">
    <div class="home-container about-layout">
      <div>
        <h2 id="about-title" class="home-heading">Full-snack Software Engineer</h2>
        <p class="about-intro">
          I build frontends, backends, and a worrying collection of empty crisp packets.
          The code gets reviewed. The snacks rarely survive long enough to open an issue.
        </p>
        <NuxtLink class="blog-link" to="/blog">
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

<style scoped>
.home-about {
  padding-block: 80px;
  border-block: 1px solid var(--home-border);
  background: var(--home-surface);
}

#about-title {
  font-size: clamp(1.625rem, 3.2vw, 2rem);
}

.about-layout {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 80px;
}

.blog-link {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 16px;
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
  margin: 0 0 16px;
}

.blog-link:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
  text-underline-offset: 5px;
}

.about-copy :deep(p) {
  margin: 0 0 20px;
}

.about-copy :deep(p:last-child) {
  margin-bottom: 0;
}

@media (max-width: 700px) {
  .home-about {
    padding-block: 56px;
  }

  .about-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
