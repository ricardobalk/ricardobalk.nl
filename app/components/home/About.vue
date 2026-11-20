<template>
  <section id="about" class="home-about" aria-labelledby="about-title">
    <div class="home-container about-layout">
      <div>
        <p class="home-eyebrow">A little about me</p>
        <h2 id="about-title" class="home-heading">Curious by nature.<br />Developer by trade.</h2>
        <NuxtLink class="blog-link" to="/blog">
          Notes from my desk
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
  color: var(--home-accent);
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
}

.blog-link:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}

.about-copy {
  color: var(--home-muted);
}

.about-copy :deep(p) {
  margin: 0 0 20px;
  font-size: 17px;
  line-height: 1.75;
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
