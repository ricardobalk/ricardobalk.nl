import { defineComponent, computed, reactive } from "vue";
import type { ComputedRef } from "vue";
import { useRouter } from "vue-router";
import { resolvePageData } from "@vuepress/client";
import { useRouteLocale } from "@vuepress/client";
import { useThemeLocaleData } from "../../composables";

import type { Breadcrumb } from "./types";

export const Breadcrumbs = defineComponent({
  setup() {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const localePath = themeLocale.value.home ?? routeLocale.value;

    /**
     * Gets the path of the current page being viewed.
     * @returns a string with the current path, relative to the domain name, without trailing slash.
     */
    const currentPath = computed(() => {
      const path: string = useRouter().currentRoute.value.path;
      return path.endsWith("/") ? path.slice(0, -1) : path;
    });

    /**
     * Gets the breadcrumbs to this page.
     * @returns an Array<Breadcrumb> with the breadcrumbs collection.
     */
    const breadcrumbs: ComputedRef<Breadcrumb[]> = computed(() => {
      /** @var currentPathArray: Current path put into an array (e.g. "/blog/article" is ['blog', 'article']) */
      const currentPathArray: Array<string> = currentPath.value.split("/");

      // TODO: Remove the first breadcrumb if we're on a localised page

      /** @var breadcrumbs: Breadcrumbs to be returned */
      const breadcrumbs: Array<Breadcrumb> = reactive([]);

      /** @var link: Variable that helps the forEach loop with building up the link to the breadcrumb again */
      let link: string = "";

      currentPathArray.forEach((item) => {
        // Build up link from previous iteration and current iteration
        link += `${item}/`;

        // If page exists (can be resolved), add it to the breadcrumbs collection
        resolvePageData(link).then((page) => page != null && breadcrumbs.push({ title: page.title, link: page.path }));
      });

      return breadcrumbs;
    });

    return { currentPath, breadcrumbs };
  },
});

export default Breadcrumbs;
