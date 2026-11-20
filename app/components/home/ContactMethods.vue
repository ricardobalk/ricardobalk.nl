<template>
  <div class="contact-methods">
    <div
      v-for="method in methods"
      :key="method.icon"
      :style="{ '--contact-anchor': '--contact-' + method.icon }"
      @pointerenter="updateHint"
      @pointerleave="updateHint"
      @focusin="updateHint"
      @focusout="updateHint"
    >
      <NuxtLink :to="method.to" :interestfor="method.id" :aria-labelledby="method.id">
        <UiIcon :iconName="method.icon" aria-hidden="true" />
      </NuxtLink>
      <div :id="method.id" popover="hint">{{ method.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const methods = [
  { icon: 'github', id: 'github-hint', label: 'Ricardo on GitHub', to: 'https://github.com/ricardobalk' },
  { icon: 'envelope', id: 'contact-hint', label: 'Contact Ricardo', to: '/contact' },
];

function updateHint(event: Event) {
  if ('interestForElement' in HTMLAnchorElement.prototype) return;
  if (event instanceof PointerEvent && event.pointerType === 'touch') return;

  const item = event.currentTarget as HTMLElement;
  const hint = item.querySelector<HTMLElement>('[popover]');
  const open = event.type === 'focusin' || event.type === 'pointerenter'
    || (event.type === 'focusout' && item.matches(':hover'))
    || (event.type === 'pointerleave' && !!item.querySelector(':focus-visible'));

  hint?.togglePopover?.(open);
}
</script>

<style scoped>
.contact-methods {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
}

a {
  anchor-name: var(--contact-anchor);
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  color: var(--home-muted);
  font-size: 2rem;
  text-decoration: none;
}

[popover] {
  position-anchor: var(--contact-anchor);
  position-area: top;
  position-try-fallbacks: flip-block;
  inset: auto;
  margin: 6px 0;
  justify-self: anchor-center;
  padding: 4px 10px;
  border: 1px solid var(--home-border);
  border-radius: 5px;
  background: var(--home-text);
  color: var(--home-background);
  font-size: 0.875rem;
}
</style>
