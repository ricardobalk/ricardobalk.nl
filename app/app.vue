<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  const isDarkMode = useState<boolean>('isDarkMode', () => false);

  if (typeof window !== 'undefined') {
    onMounted(() => {
    watch(
      isDarkMode,
      (value) => {
        if (value === true) {
          document.documentElement.classList.add('dark');
          return;
        }

        document.documentElement.classList.remove('dark');
      },
      { immediate: true }
    )
    });
  }
</script>
