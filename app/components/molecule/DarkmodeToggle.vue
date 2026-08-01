<template>
  <span class="darkmode-toggle">
    <span class="icon">
      <AtomIcon iconName="moon" />
    </span>

    <MoleculeSwitch v-model="switchValue" id="darkmode-switch" />

    <span class="icon">
      <AtomIcon iconName="sun" />
    </span>
  </span>
</template>

<style lang="postcss">
  .darkmode-toggle {
    @apply flex items-center gap-3;
    .icon {
      @apply text-xs dark:text-slate-500 cursor-pointer;
    }

    .switch {
      .indicator {
        @apply dark:bg-slate-700;
        &::after {
          @apply dark:bg-slate-400;
        }
      }
    }
  }
</style>

<script setup lang="ts">
  const isDarkMode = useState<boolean>('isDarkMode');

  // switchValue uses a computed property to invert the value stored in isDarkMode.
  const switchValue = computed<boolean>({
    get: () => !isDarkMode,
    set: (value) => {
      isDarkMode.value = !value;
    },
  });
</script>