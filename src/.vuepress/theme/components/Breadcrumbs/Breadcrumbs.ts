import { defineComponent, computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useRouter } from "vue-router"
import { usePagesData } from "vuepress"
import type { Breadcrumb } from './types'

// TODO: Refactor this code - it is not functional
export const Breadcrumbs = defineComponent({
   setup(){
        /**
         * Gets the path of the current page being viewed.
         * @returns a string with the current path, relative to the domain name, without trailing slash.
        */
        const currentPath = computed(() => {
            const path : string = useRouter().currentRoute.value.path; // Closure to make code below more readable ;-)
            console.log(`Current path: ${path}`);
            return (path.endsWith('/')) ? path.slice(0, -1) : path;
        })

       /** 
         * Gets the breadcrumbs to this page.
         * @returns an Array<Breadcrumb> with the breadcrumbs collection.
        */
       const breadcrumbs : ComputedRef<Breadcrumb[]> = computed(() => {
            /** @var currentPathArray: Current path put into an array (e.g. "/blog/article" is ['blog', 'article']) */
            const currentPathArray : Array<string> = currentPath.value.split("/");
                
            /** @var breadcrumbs: Breadcrumbs to be returned */
            const breadcrumbs : Array<Breadcrumb> = [];

            /** @var link: Variable that helps the forEach loop with building up the link to the breadcrumb again */
            let link : string = "";

            currentPathArray.forEach(item => {
                // Build up link from previous iteration and current iteration
                link += item;

                /** @var page: Linked page (and info) that has been found by VuePress from the given link */
                // const page = this.$site.pages.find(el => el.path === link || el.path === link + "/");
                
                // Adds trailing slash, needed for next iteration
                link += "/";

                // If page exists, add it to the breadcrumbs collection
                // page != null && breadcrumbs.push({ title: page.title, link: page.path });
            });

            // Remove the first breadcrumb if we're on a localised page.
            // breadcrumbs[0].link.indexOf(this.$localeConfig.path || "" ) === -1 && breadcrumbs.splice(0, 1);

            return breadcrumbs;
       })

       return { currentPath, breadcrumbs }
   }
})

export default Breadcrumbs