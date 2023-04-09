<!-- Contains the site's header. -->
<template>
  <header :class="computedClassnames" class="site-header">
    <Link to="/" title="Go back home" tabindex="0">
      <SiteLogo width="32" height="32" alt="Site Logo" />
    </Link>

    <NavigationBar :items="NavigationItems" class="navbar" />
  </header>
</template>

<style lang="postcss">
.site-header {
  @apply sticky top-0 z-10;
  @apply flex w-full justify-between px-2 py-0.5 items-center;
  @apply border-b border-gray-200 bg-gray-100 transition-colors duration-300 ease-in-out;

  &.scrolled-down {
    @apply bg-black backdrop-filter backdrop-blur-sm bg-opacity-30;
  }

  .navbar {
    @apply hidden sm:block; /* Hide the navigation bar on small screens. To be replaced with a hamburger menu. */
  }
}
</style>

<script setup lang="ts">
import Link from '@/components/atoms/Link.vue';
import SiteLogo from '@/assets/svg/site-logo.svg?component';
import NavigationBar from '@/components/molecules/NavigationBar.vue';
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
    console.log('No window object found.');
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