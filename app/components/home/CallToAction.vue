<template>
  <section class="call-to-action">
      <slot />
  </section>
</template>

<style>
@reference "~/assets/css/main.css";
  .call-to-action {
    @apply w-full pt-12 pb-4 text-center text-white bg-[#6bffdc] bg-no-repeat bg-[contain,_cover] [background-blend-mode:normal,_normal];
    background-image: url(/winder-top-left.svg),
                      linear-gradient(to right,rgba(0,0,0,.133),rgba(0,0,0,.522));
    background-position: left top -5px,left top;

    @apply dark:bg-slate-900/50 dark:text-inherit dark:bg-linear-to-b dark:from-slate-900 dark:to-black dark:bg-blend-multiply
           dark:border-t dark:border-slate-800 dark:border-dashed;

    a {
      @apply text-white hover:text-green-300;
    }
  }
</style>
