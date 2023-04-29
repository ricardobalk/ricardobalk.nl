<template>
  <section class="call-to-action">
      <slot />
  </section>
</template>

<style lang="postcss">
  .call-to-action {
    @apply w-full pt-12 pb-4 text-center text-white;
    background-color: #6bffdc;
    background-image: url(/winder-top-left.svg),
                      linear-gradient(to right,rgba(0,0,0,.133),rgba(0,0,0,.522));
    background-position: left top -5px,left top;
    background-size: contain,cover;
    background-repeat: no-repeat;

    a {
      @apply text-white hover:text-green-300;
    }
  }
</style>