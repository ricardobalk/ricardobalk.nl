<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<style lang="postcss">
@import "/fonts/Lato/lato.css";
@import "/fonts/Raleway/raleway.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans;

    #app { @apply min-h-screen; }

    h1 { @apply text-3xl;  }
    h2 { @apply text-2xl;  }
    h3 { @apply text-xl;   }
    h4 { @apply text-lg;   }
    h5 { @apply text-base; }
    h6 { @apply text-sm;   }

    h1, h2, h3, h4, h5, h6
      { @apply font-raleway; }
    h1, h2, h3
      { @apply mb-4 mt-4 first:mt-0; }
    h4, h5, h6
      { @apply mb-2 mt-2 first:mt-0; }

    p, span, li, th, td, pre, blockquote
      { @apply text-base; }

    ul, ol
      { @apply list-disc list-inside; }

    blockquote, p, pre, span
      { @apply mb-4; }

    span
      { @apply inline-block; }

    table {
      @apply w-full border-collapse;

      &, th, td
        { @apply border border-gray-300; }
      th, td
        { @apply p-2; }
    }

    pre {
      @apply bg-gray-100 p-4;

      code
        { @apply text-sm font-bold }
    }

    a {
      @apply text-green-600 underline hover:text-green-900 transition-colors ease-in-out;

      &[href^="#"]
        { @apply text-gray-600 decoration-dotted; }
    }

    blockquote {
      @apply border-l-4 border-gray-300 italic px-4 py-2 mb-4;

      p
        { @apply mb-0 text-justify; }
    }
  }
}
</style>