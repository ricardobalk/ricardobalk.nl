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
  padding-block: 80px 64px;
  text-align: center;
}

.home-contact .home-heading {
  margin-bottom: 16px;
}

.contact-content {
  max-width: 460px;
  margin: 0 auto 32px;
  color: var(--home-muted);
}

.contact-content :deep(p) {
  margin: 0;
  font-size: 1rem;
  line-height: 1.75;
}

@media (max-width: 600px) {
  .home-contact {
    padding-block: 56px 40px;
  }
}
</style>
