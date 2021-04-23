<template>
  <header ref="navbar" class="navbar" :class="{ opaque: navBarOpacity }">
    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />

    <span ref="siteBrand">
      <RouterLink :to="siteBrandLink">
        <img v-if="siteBrandLogo" class="logo" :src="$withBase(siteBrandLogo)" :alt="siteBrandTitle" />

        <span v-if="siteBrandTitle" class="site-name" :class="{ 'can-hide': siteBrandLogo }">
          {{ siteBrandTitle }}
        </span>
      </RouterLink>
    </span>

    <div class="navbar-links-wrapper" :style="linksWrapperStyle">
      <slot name="before" />
      <NavbarLinks class="can-hide" />
      <slot name="after" />
      <Docsearch />
    </div>
  </header>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from "vue";
  import { useRouteLocale, useSiteLocaleData } from "@vuepress/client";
  import { useThemeLocaleData } from "../composables";
  import NavbarLinks from "./NavbarLinks.vue";
  import ToggleSidebarButton from "./ToggleSidebarButton.vue";

  export default defineComponent({
    name: "Navbar",

    components: {
      NavbarLinks,
      ToggleSidebarButton,
    },

    emits: ["toggle-sidebar"],

    setup() {
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();

      const navbar = ref<HTMLElement | null>(null);
      const siteBrand = ref<HTMLElement | null>(null);
      const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
      const siteBrandLogo = computed(() => themeLocale.value.logo);
      const siteBrandTitle = computed(() => siteLocale.value.title);
      const linksWrapperMaxWidth = ref(0);
      const linksWrapperStyle = computed(() => {
        if (!linksWrapperMaxWidth.value) {
          return {};
        }
        return {
          "max-width": linksWrapperMaxWidth.value + "px",
        };
      });

      const navBarOpacity = ref(false);
      let navbarDebounceTimer!: number;

      // avoid overlapping of long title and long navbar links
      onMounted(() => {
        // TODO: migrate to css var
        // refer to _variables.scss
        const MOBILE_DESKTOP_BREAKPOINT = 719;
        const navbarHorizontalPadding =
          getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
        const handleLinksWrapWidth = (): void => {
          if (window.innerWidth < MOBILE_DESKTOP_BREAKPOINT) {
            linksWrapperMaxWidth.value = 0;
          } else {
            linksWrapperMaxWidth.value =
              navbar.value!.offsetWidth - navbarHorizontalPadding - (siteBrand.value?.offsetWidth || 0);
          }
        };

        /**
         * @function handleNavbarOpacity() changes the value of `navBarOpacity` to `true` when the user scrolls down.
         * The value of `navBarOpacity` can be used to add and remove CSS classes throughout the Vue component, in this case for changing the appearance of the NavBar.
         *
         * It comes with a debouncing mechanism to prevent changing the value too many times, as JavaScript could trigger events an excessive amount of times,
         * especially when using it with a scroll listener.
         */
        const handleNavbarOpacity = (): void => {
          navbarDebounceTimer && window.cancelAnimationFrame(navbarDebounceTimer);
          navbarDebounceTimer = window.requestAnimationFrame(function () {
            (window.scrollY > 50 && (navBarOpacity.value = true)) || (navBarOpacity.value = false);
          });
        };

        handleNavbarOpacity();
        handleLinksWrapWidth();
        window.addEventListener("resize", handleLinksWrapWidth, false);
        window.addEventListener("scroll", handleNavbarOpacity, false);
      });

      return {
        navbar,
        siteBrand,
        siteBrandLink,
        siteBrandLogo,
        siteBrandTitle,
        linksWrapperStyle,
        navBarOpacity,
      };
    },
  });

  function getCssValue(el: HTMLElement | null, property: string): number {
    // NOTE: Known bug, will return 'auto' if style value is 'auto'
    const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[property];
    const num = Number.parseInt(val, 10);
    return Number.isNaN(num) ? 0 : num;
  }
</script>
