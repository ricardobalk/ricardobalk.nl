<template>
  <div class="homepage">
    <slot name="site-header" />
    <slot />
    <slot name="site-footer" />
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter/Inter-Variable.woff2") format("woff2");
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
}

@font-face {
  font-family: "Manrope";
  src: url("/fonts/Manrope/Manrope-Variable.woff2") format("woff2");
  font-style: normal;
  font-weight: 200 800;
  font-display: swap;
}

.homepage {
  --home-background: #fff;
  --home-surface: #f5f5f3;
  --home-text: #20221f;
  --home-muted: #4d4d4d;
  --home-border: #e4e6e0;
  --home-accent: var(--color-link);
  --home-button: #3f8000;
  --home-button-hover: #326600;
  --home-font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --home-font-display: "Manrope", "Inter", ui-sans-serif, system-ui, sans-serif;

  min-height: 100vh;
  background: var(--home-background);
}

.dark .homepage {
  --home-background: #080908;
  --home-surface: #191b18;
  --home-text: #f6f7f4;
  --home-muted: #b3b3b3;
  --home-border: #282c25;
}

.homepage :deep(main) {
  color: var(--home-text);
  font-family: var(--home-font-body);
  overflow-wrap: anywhere;
}

.homepage :deep(.home-container) {
  width: min(66.25rem, calc(100% - 4rem));
  margin-inline: auto;
}

.homepage :deep(.home-eyebrow) {
  margin: 0 0 1.25rem;
  color: var(--home-muted);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.6;
}

.homepage :deep(.home-heading) {
  margin: 0 0 1.5rem;
  color: var(--home-text);
  font-family: var(--home-font-display);
  font-size: clamp(1.875rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.035em;
}

.homepage :deep(.home-button) {
  display: inline-flex;
  min-height: 3.5rem;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  padding: 1rem 2rem;
  border: 0.0625rem solid #4d900e;
  border-radius: 0.3125rem;
  background: var(--home-button);
  box-shadow: 0 0.5rem 1.75rem #3f800024;
  color: var(--color-button-text);
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 150ms, box-shadow 150ms;
}

.homepage :deep(.home-button:hover) {
  background: var(--home-button-hover);
  box-shadow: 0 0.5rem 2rem #3f800038;
  color: var(--color-button-text);
}

.homepage :deep(main a:focus-visible) {
  outline: 0.125rem solid var(--home-accent);
  outline-offset: 0.375rem;
}

.homepage :deep(section[id]) {
  scroll-margin-top: 2rem;
}

@media (max-width: 37.5rem) {
  .homepage :deep(.home-container) {
    width: calc(100% - 2.5rem);
  }
}
</style>
