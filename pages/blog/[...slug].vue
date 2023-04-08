<template>
  <main class="nuxt-content">
    <ContentDoc class="content" />
  </main>
</template>

<style lang="postcss">
.nuxt-content {
  @apply flex flex-col items-center px-4 py-8;
  .content {
    @apply w-full max-w-2xl;

    h1 {
      @apply text-3xl
    }

    h2 {
      @apply text-2xl
    }

    h3 {
      @apply text-xl
    }

    h1, h2, h3 {
      @apply mb-4 mt-4 first:mt-0;
    }

    p {
      @apply mb-4;
    }

    table {
      @apply w-full border-collapse;
      &, th, td {
        @apply border border-gray-300;
      }
      th, td {
        @apply p-2;
      }
    }

    pre {
      @apply bg-gray-100 p-4;
    }
  }
}
</style>