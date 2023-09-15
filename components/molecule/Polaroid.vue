<template>
  <figure class="polaroid-container">
    <div class="photo-container">
      <div class="inner">
        <div class="shadow" v-if="props.shadow" aria-hidden="true" />
        <img :src="props.picture" :alt="props.alt">
      </div>
    </div>

    <figcaption>
      <slot />
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
  interface Props {
    picture: string;
    alt: string;
    shadow?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    picture: "https://placehold.it/500x500",
    alt: "Placeholder image",
    shadow: true,
  });
</script>

<style lang="postcss">
  .polaroid-container {
    @apply flex flex-col items-center my-2 border border-gray-200 bg-white shadow-xl;
    @apply dark:bg-slate-900 dark:bg-opacity-50 dark:border-slate-800;

    .photo-container {
      @apply relative p-[8%];

      .inner {
        @apply overflow-hidden relative;

        .shadow {
            /* Photo shadow and gradient. */
            @apply hidden md:block; /* Hide on mobile, for performance. */
            @apply content-[""] absolute w-full h-full top-0 left-0 z-10;
            box-shadow: inset 2px 2px 8px rgba(0,0,0,.4);
          }

          img {
            @apply w-full h-full object-cover;
            @apply dark:filter dark:brightness-75 dark:contrast-125;
          }
      }
    }

    figcaption {
      @apply mb-6 px-[8%] text-center uppercase font-bold text-base text-gray-600 dark:text-gray-400;
    }

  }
</style>
