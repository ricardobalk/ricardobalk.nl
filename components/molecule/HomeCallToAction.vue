<template>
  <section class="call-to-action">
      <slot />
  </section>
</template>

<style lang="postcss">
  .call-to-action {
    @apply w-full pt-12 pb-4 text-center text-white bg-[#6bffdc] bg-no-repeat bg-[contain,_cover] [background-blend-mode:normal,_normal]
          dark:bg-slate-900  dark:text-inherit dark:bg-gradient-to-b dark:from-slate-900 dark:to-black dark:bg-blend-multiply dark:bg-opacity-50
          dark:border-t dark:border-slate-800 dark:border-dashed;
    background-image: url(/winder-top-left.svg),
                      linear-gradient(to right,rgba(0,0,0,.133),rgba(0,0,0,.522));
    background-position: left top -5px,left top;

    a {
      @apply text-white hover:text-green-300;
    }
  }
</style>