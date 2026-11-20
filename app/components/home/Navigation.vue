<template>
  <header class="home-navigation">
    <a class="skip-link" href="#main-content">Skip to content</a>

    <nav aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#about">About me</a>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <a href="#contact">Get in touch</a>
    </nav>

    <div class="navigation-tools">
      <a href="https://github.com/ricardobalk" aria-label="Ricardo on GitHub">
        <UiIcon iconName="github" aria-hidden="true" />
      </a>
      <a href="https://linkedin.com/in/ricardobalk" aria-label="Ricardo on LinkedIn">
        <UiIcon iconName="linkedin" aria-hidden="true" />
      </a>
      <div class="theme-control">
        <SiteDarkmodeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped>
.home-navigation {
  position: relative;
  display: flex;
  width: min(1180px, calc(100% - 48px));
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-inline: auto;
  padding: 12px 48px;
  border-radius: 0 0 8px 8px;
  background: var(--home-surface);
}

nav,
.navigation-tools {
  display: flex;
  align-items: center;
}

nav {
  gap: clamp(24px, 4vw, 60px);
}

a {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  color: var(--home-muted);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
}

a:hover {
  color: var(--home-text);
}

.navigation-tools {
  gap: 12px;
}

.navigation-tools > a {
  justify-content: center;
  width: 36px;
  font-size: 20px;
}

.theme-control {
  margin-left: 12px;
  padding-left: 24px;
  border-left: 1px solid var(--home-border);
}

.skip-link {
  position: absolute;
  top: 8px;
  left: 16px;
  z-index: 1;
  padding: 8px 16px;
  background: var(--home-background);
  transform: translateY(-200%);
}

.skip-link:focus {
  transform: translateY(0);
}

@media (max-width: 850px) {
  .home-navigation {
    padding-inline: 24px;
  }

  nav {
    gap: 24px;
  }
}

@media (max-width: 700px) {
  .home-navigation {
    width: calc(100% - 24px);
    flex-direction: column;
    gap: 0;
    padding: 8px 16px;
  }

  nav {
    width: 100%;
    justify-content: space-between;
    gap: 12px;
  }
}
</style>
