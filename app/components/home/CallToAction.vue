<template>
  <section id="contact" class="home-contact" aria-labelledby="contact-title">
    <div class="home-container">
      <h2 id="contact-title" class="home-heading">Have something in mind?</h2>
      <div class="contact-content">
        <slot />
      </div>
      <HomeContactMethods />
    </div>
  </section>
</template>

<style scoped>
.home-contact {
  padding-block: 5rem 4rem;
  text-align: center;
}

.home-contact .home-heading {
  margin-bottom: 1rem;
}

.contact-content {
  max-width: 28.75rem;
  margin: 0 auto 2rem;
  color: var(--home-muted);
}

.contact-content :deep(p) {
  margin: 0;
  font-size: 1rem;
  line-height: 1.75;
}

@media (max-width: 37.5rem) {
  .home-contact {
    padding-block: 3.5rem 2.5rem;
  }
}
</style>
