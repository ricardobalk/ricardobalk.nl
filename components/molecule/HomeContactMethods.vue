<template>
  <div class="contact-methods">
    <slot />
  </div>
</template>

<style lang="postcss">
.contact-methods {
  @apply max-w-xs mx-auto;
  @apply flex justify-center gap-12;
  @apply text-4xl my-8;
}
</style>