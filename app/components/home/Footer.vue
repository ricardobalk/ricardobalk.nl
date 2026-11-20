<template>
  <footer class="home-footer home-container">
    <p>Built with care by Ricardo Balk.</p>
    <nav aria-label="Footer navigation">
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/privacy">Privacy</NuxtLink>
      <a href="https://github.com/ricardobalk/ricardobalk.nl">Source code</a>
    </nav>
  </footer>
</template>

<style scoped>
.home-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-block: 20px;
  border-top: 1px solid var(--home-border);
  color: var(--home-muted);
}

p {
  margin: 0;
  font-size: 13px;
}

nav {
  display: flex;
  gap: 24px;
}

a {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  color: var(--home-muted);
  font-size: 13px;
  text-decoration: none;
}

a:hover {
  color: var(--home-text);
}

@media (max-width: 600px) {
  .home-footer {
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }
}
</style>
