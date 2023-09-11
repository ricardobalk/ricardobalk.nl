<template>
  <section class="process">
    <div class="container">
      <AtomImage :alt="props.picture.alt" :src="props.picture.path" :caption="props.picture.caption" />
      <article class="text-container">
        <slot />
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Picture {
  alt: string,
  path: string,
  caption?: string,
}

interface Props {
  picture: Picture;
}

const props = withDefaults(defineProps<Props>(), {
  picture: {
    path: "https://placehold.it/900x500",
    alt: "Placeholder image",
  },
});
</script>

<style lang="postcss">
.process {
  @apply w-full text-white bg-no-repeat bg-[#6bffdc] bg-[contain,cover] [background-blend-mode:normal,_normal] dark:mb-12 dark:py-8 dark:bg-slate-900 dark:text-inherit dark:bg-gradient-to-b dark:from-slate-900 dark:to-black dark:bg-blend-multiply dark:bg-opacity-50 dark:border-t dark:border-slate-800 dark:border-dashed;

  background-image: url("winder-bl.svg"), linear-gradient(to right, #00000022, #00000085);
  background-position: left bottom -5px, left top;
  background-blend-mode: normal, multiply;

  .container {
    @apply flex flex-col md:flex-row gap-2;
    @apply max-w-screen-2xl mx-auto px-8 py-16;

    figure {
      @apply flex-none md:w-1/2;
      @apply mb-8 md:mt-16 md:mb-0;

      img {
        @apply w-full h-full object-contain;
      }

      figcaption {
        @apply text-center;
      }
    }

    article {
      @apply flex flex-col gap-2 sm:-mt-4 sm:-ml-8;

      h1 {
        @apply text-3xl font-bold uppercase;
      }
    }
  }
}
</style>