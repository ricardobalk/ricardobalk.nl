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
}

.homepage :deep(.home-container) {
  width: min(1060px, calc(100% - 64px));
  margin-inline: auto;
}

.homepage :deep(.home-eyebrow) {
  margin: 0 0 20px;
  color: var(--home-muted);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
}

.homepage :deep(.home-heading) {
  margin: 0 0 24px;
  color: var(--home-text);
  font-family: var(--home-font-display);
  font-size: clamp(30px, 4vw, 40px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.035em;
}

.homepage :deep(.home-button) {
  display: inline-flex;
  min-height: 56px;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 16px 32px;
  border: 1px solid #4d900e;
  border-radius: 5px;
  background: var(--home-button);
  box-shadow: 0 8px 28px #3f800024;
  color: var(--color-button-text);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: background 150ms, box-shadow 150ms;
}

.homepage :deep(.home-button:hover) {
  background: var(--home-button-hover);
  box-shadow: 0 8px 32px #3f800038;
  color: var(--color-button-text);
}

.homepage :deep(main a:focus-visible) {
  outline: 2px solid var(--home-accent);
  outline-offset: 6px;
}

.homepage :deep(section[id]) {
  scroll-margin-top: 32px;
}

@media (max-width: 600px) {
  .homepage :deep(.home-container) {
    width: calc(100% - 40px);
  }
}
</style>
