<template>
  <section class="about" tabindex="0">
    <div class="picture">
      <MoleculePolaroid :picture="props.picture.path" :alt="props.picture.alt">
        {{ props.picture.caption }}
      </MoleculePolaroid>
    </div>

    <div class="text-container">
      <slot>
        <h1>Uh oh!</h1>
        <p>You didn't fill in this slot, so I'm showing some example paragraphs instead.</p>
        <p>
          Sed nibh libero, scelerisque quis viverra in, egestas id magna. Etiam vel dolor vel mauris fringilla
          molestie sodales vitae metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia Curae; Mauris et efficitur elit.
        </p>
        <p>
          Phasellus malesuada metus porttitor rutrum convallis. Donec convallis tellus felis, nec commodo erat
          lacinia vitae.
        </p>
      </slot>
    </div>
  </section>
</template>

<script lang="ts" setup>
  interface Picture {
    path:    string,
    caption: string,
    alt:     string,
  }

  interface Props {
    picture: Picture
  }

  const props = withDefaults(defineProps<Props>(), {
      picture: {
        path:       "https://placehold.it/500x500",
        caption:    "Placeholder image",
        alt:        "Placeholder",
      }
  });
</script>

<style lang="postcss">
  .about {
    @apply flex relative max-w-5xl mx-auto -mt-32 mb-24 outline-none gap-2;
    @apply flex-wrap md:flex-nowrap justify-center md:justify-start;
    @apply px-4;

    .picture {
      @apply flex-none w-full px-8;
      @apply md:w-1/3 md:px-0;
    }

    .text-container {
      @apply flex-auto flex flex-col gap-3;
      @apply pt-8 px-8;

      @media screen and (min-width: 640px) {
        margin-top: 6em;
      }

      h1 {
        @apply text-3xl font-bold uppercase m-0;
      }
    }
  }
</style>
