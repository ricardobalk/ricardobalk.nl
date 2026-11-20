<template>
  <div class="contact-methods">
    <a href="tel:+31653773206" aria-label="Call Ricardo">
      <UiIcon iconName="phone" aria-hidden="true" />
    </a>
    <a href="https://github.com/ricardobalk" aria-label="Ricardo on GitHub">
      <UiIcon iconName="github" aria-hidden="true" />
    </a>
    <a href="https://linkedin.com/in/ricardobalk" aria-label="Ricardo on LinkedIn">
      <UiIcon iconName="linkedin" aria-hidden="true" />
    </a>
  </div>
</template>

<style scoped>
.contact-methods {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;
}

a {
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  color: var(--home-muted);
  font-size: 1.3125rem;
  text-decoration: none;
}

</style>
