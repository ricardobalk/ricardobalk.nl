<template>
  <section id="home" class="home-hero" aria-labelledby="intro-title">
    <div class="home-container">
      <div class="hero-intro">
        <div class="hero-copy">
          <p class="home-eyebrow hero-details">
            <span class="hero-detail">
              <UiIcon iconName="suitcase" aria-hidden="true" />
              {{ props.occupation }}
            </span>
            <span v-if="props.location" class="hero-detail">
              <UiIcon iconName="globe" aria-hidden="true" />
              {{ props.location }}
            </span>
          </p>
          <h1 id="intro-title">{{ props.name }}</h1>
          <div class="hero-description">
            <slot />
          </div>
          <NuxtLink class="home-button" to="/blog">
            Read my blog
            <UiIcon iconName="arrow-right" aria-hidden="true" />
          </NuxtLink>
        </div>

        <img
          class="hero-portrait"
          :src="props.picture"
          :alt="'Portrait of ' + props.name"
          width="720"
          height="936"
          fetchpriority="high"
        />
      </div>

      <div class="technologies">
        <p class="home-eyebrow">Some of the tools I work with</p>
        <ul aria-label="Technologies">
          <li>
            <UiIcon iconName="python" aria-hidden="true" />
            <span>Python</span>
          </li>
          <li>
            <UiIcon iconName="kubernetes" aria-hidden="true" />
            <span>Kubernetes</span>
          </li>
          <li>
            <svg width="32" height="24" viewBox="0 0 40 28" fill="none" aria-hidden="true">
              <path d="M3 25 16 3l13 22H3Z M21 25l8-14 8 14H21Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
            </svg>
            <span>Nuxt</span>
          </li>
          <li>
            <UiIcon iconName="golang" class="go-mark" aria-hidden="true" />
            <span class="sr-only">Go</span>
          </li>
          <li>
            <UiIcon iconName="rust" aria-hidden="true" />
            <span>Rust</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps<{
    name: string;
    occupation: string;
    location?: string;
    picture: string;
  }>();
</script>

<style scoped>
.home-hero {
  padding-block: 5.5rem 4rem;
}

.hero-intro {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  align-items: center;
  gap: 5rem;
  min-height: 23.75rem;
}

.hero-copy .home-eyebrow {
  margin-bottom: 1rem;
  color: var(--home-accent);
}

.hero-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
}

.hero-detail {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--home-text);
  font-size: inherit;
}

.hero-detail .icon {
  color: var(--home-accent);
}

h1 {
  margin: 0 0 1.5rem;
  font-family: var(--home-font-display);
  font-size: clamp(2.75rem, 5vw, 3.875rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.hero-description {
  max-width: 30.625rem;
  margin-bottom: 2rem;
  color: var(--home-muted);
}

.hero-description :deep(p) {
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.75;
}

.hero-copy .home-button {
  min-width: 16.25rem;
}

.hero-portrait {
  justify-self: end;
  width: min(100%, 22.5rem);
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 28%;
}

.technologies {
  margin-top: 4.5rem;
}

.technologies .home-eyebrow {
  margin-bottom: 1.25rem;
}

.technologies ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 8rem), 1fr));
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.technologies li {
  display: flex;
  min-height: 4.25rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0.0625rem solid var(--home-border);
  border-radius: 0.3125rem;
  color: var(--home-muted);
}

.technologies li > span {
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.technologies .icon {
  font-size: 1.6875rem;
}

.technologies .go-mark {
  font-size: 3rem;
}

@media (max-width: 53.125rem) {
  .hero-intro {
    gap: 2.5rem;
    min-height: 18.75rem;
  }

  .technologies ul {
    gap: 0.75rem;
  }

  .technologies li > span {
    font-size: 0.9375rem;
  }
}

@media (max-width: 37.5rem) {
  .home-hero {
    padding-block: 3rem;
  }

  .hero-intro {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .hero-portrait {
    grid-row: 1;
    justify-self: center;
    width: 13.75rem;
  }

  .hero-copy {
    text-align: center;
  }

  .hero-details {
    justify-content: center;
  }

  .hero-copy .home-button {
    width: 100%;
    min-width: 0;
  }

  .technologies {
    margin-top: 3.5rem;
  }

  .technologies ul {
    display: flex;
    flex-wrap: wrap;
  }

  .technologies li {
    flex: 1 0 calc((100% - 1.5rem) / 3);
    min-height: 3.875rem;
    padding: 0.5rem;
  }
}
</style>
