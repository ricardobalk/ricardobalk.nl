<template>
  <div class="author">
    <img :src="props.picture"
         :alt="`Profile picture of ${props.name}.`"
         class="author-avatar">

    <div class="author-info">
      <span class="author-name">
       {{ props.name }}
      </span>
      <span class="author-occupation">
        {{ props.occupation }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    picture:    string,
    name:       string,
    occupation: string,
  }

  const props = withDefaults(defineProps<Props>(), {
    name: 'John Doe',
    picture: "https://placehold.it/500x500",
    occupation: 'Chef Placeholder',
  });
</script>

<style lang="postcss">
  .author {
    @apply flex gap-4 border-b border-b-gray-200 pb-4;

    &-avatar {
      @apply w-24 h-24 rounded-full border;
    }

    &-info {
      @apply flex flex-col justify-center;
    }

    &-name {
      @apply text-lg font-bold mb-0;
    }

    &-occupation {
      @apply text-base mb-0;
    }
  }
</style>