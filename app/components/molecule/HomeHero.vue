<template>
  <header class="home-hero" tabindex="0">
      <div class="text-container">
        <h1 class="name">
          {{ props.name }}
        </h1>

        <span v-if="props.occupation" class="occupation">
          {{ props.occupation }}
        </span>

        <span v-if="props.tagline" class="tagline">
          {{ props.tagline }}
        </span>
      </div>
  </header>
</template>

<script lang="ts" setup>
  interface Props {
    name: string;
    occupation?: string;
    tagline?: string;
  }

  const props = defineProps<Props>();
</script>

<style scoped>
@reference "~/assets/css/main.css";
  .home-hero {
    @apply w-full h-[40vh] md:h-[60vh] md:min-h-[420px] outline-hidden text-white mb-12 bg-[#6bffdc] bg-[contain,cover] [background-blend-mode:normal,_normal];
    text-shadow: 1px 1px 5px rgba(26, 26, 26, 0.33);
    background-image: url("/winder.svg"), linear-gradient(to right, #00000022, #00000085);
    background-position: right bottom -5px, left top;
    background-repeat: no-repeat;

    @apply dark:bg-linear-to-b dark:from-slate-900 dark:to-black dark:bg-blend-multiply dark:bg-slate-900/50 dark:text-inherit;

    .text-container {
      @apply flex flex-col gap-4 px-4 py-8 text-center h-full justify-center;

      .name, .occupation, .tagline {
        @apply m-0 text-inherit uppercase font-bold;
      }

     .name {
        @apply text-4xl md:text-6xl;
      }

      .occupation {
        @apply font-raleway text-2xl md:text-4xl;
      }

      .tagline {
        @apply text-xs md:text-sm;
      }
    }
  }
</style>
