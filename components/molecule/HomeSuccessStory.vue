<template>
  <article class="success-story">
    <img  :src="picture"
          :alt="`Profile picture of ${props.name}`"
          class="success-story__picture" />

    <h2 class="success-story__name">
      {{ props.name }}
    </h2>

    <span class="success-story__occupation">
      {{ props.occupation }}
    </span>

    <span class="success-story__content">
      <slot />
    </span>
  </article>
</template>

<style lang="postcss">
.success-story {
  @apply flex flex-col gap-3 items-center;

  &__picture {
    @apply w-32 h-32 object-cover rounded-full border border-gray-200;
  }

  &__name {
    @apply font-raleway text-xl font-bold my-0;
  }

  &__occupation {
    @apply font-raleway text-gray-500 mb-0;
  }

  &__content {
    @apply text-justify max-w-md mb-0;
  }

}
</style>

<script setup lang="ts">
  interface Props {
    picture?: string,
    name: string,
    occupation: string,
  }

  const props = withDefaults(defineProps<Props>(), {
    name: 'John Doe',
    picture: "https://placehold.it/900x500",
    occupation: 'Chef Placeholder',
  });
</script>