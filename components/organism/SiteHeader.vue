<!-- Contains the site's header. -->
<template>
  <header :class="computedClassnames" class="site-header">
    <AtomLink to="/" title="Go back home" tabindex="0">
      <SiteLogo width="32" height="32" alt="Site Logo" class="logo" />
    </AtomLink>

    <span class="flex gap-6">
      <MoleculeNavigationBar :items="NavigationItems" class="navbar" />
      <MoleculeDarkmodeToggle />
    </span>
  </header>
</template>

<style lang="postcss">
.site-header {
  @apply sticky top-0 z-10;
  @apply flex w-full justify-between px-2 py-1 items-center;
  @apply bg-white transition-colors duration-300 ease-in-out;
  @apply border-b border-gray-200;
  @apply dark:bg-slate-900 dark:text-white dark:border-gray-800;

  &.scrolled-down {
    @apply bg-white backdrop-filter backdrop-blur-sm bg-opacity-60;
    @apply dark:bg-black dark:bg-opacity-30;
  }

  .logo {
    @apply text-black dark:text-gray-100;
  }

  .navbar {
    @apply hidden sm:block; /* Hide the navigation bar on small screens. To be replaced with a hamburger menu. */
  }
}
</style>

<script setup lang="ts">
import SiteLogo from '@/assets/svg/site-logo.svg?component';
import NavigationItems from '@/data/navigation/main';

const scrolledDown = ref(false);
const ticking = ref(false); // Used to throttle the scroll event.

onMounted(() => {
  addScrollListener({
    triggerOffset: 64,
    scrolledDownRef: scrolledDown,
    tickingRef: ticking,
  });
});

const addScrollListener = ({
  triggerOffset = 50, // The offset in pixels to trigger the scroll event.
  scrolledDownRef = scrolledDown, // The ref to update when the scroll event is triggered.
  tickingRef = ticking, // The ref to update to throttle the scroll event using requestAnimationFrame.
}): void => {
  if (typeof window === 'undefined') {
    // console.log('No window object found.');
    return;
  }

  window.addEventListener('scroll', () => {
    if (!ticking.value) {
      window.requestAnimationFrame(() => {
        scrolledDownRef.value = window.scrollY > triggerOffset;
        tickingRef.value = false;
      });

      tickingRef.value = true;
    }
  });
};

const computedClassnames = computed(() => {
  return {
    'scrolled-down': scrolledDown.value === true,
  };
});
</script>