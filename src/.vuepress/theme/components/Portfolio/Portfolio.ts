  import { defineComponent, computed, reactive } from 'vue';
  import { usePageData, usePageFrontmatter } from "@vuepress/client"
  import filterPagesByFrontmatter from "../../mixins/filterPagesByFrontmatter";
  import languageSelection from "../../mixins/languageSelection";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import type { PageData } from '@vuepress/core/lib/types'
  import Hero from "../Hero";
  import { resolvePageLang } from '@vuepress/client'
  import { DateTime } from 'luxon';
  // import HumanReadableDate from "../components/global/HumanReadableDate.vue";

 export const Portfolio = defineComponent({
    name: "Portfolio",
    components: { FontAwesomeIcon, Hero, languageSelection, DateTime },
    setup () {
    const frontmatter = usePageFrontmatter<any>() // TODO: Add strict types
    const pageData = usePageData()
    const heroImages = computed(() => {
        return frontmatter.value.heroImages
          ? frontmatter.value.heroImages
          : {
              regular: "/assets/img/site/blog/typewriter.svg",
              dark: "/assets/img/site/blog/typewriter-dark.svg",
            };
    })

    const pageTitle = computed(() => {
      return pageData.value.title || "Portfolio";
    })

    const fetchPosts = (params : Record<string, any>) => {
      const posts : PageData[] = reactive([])
      filterPagesByFrontmatter(params)
        .then((pages) => pages.filter(page => posts.push(page)))
      return posts
    }

    const portfolioItems = computed(() => fetchPosts({lang: [resolvePageLang(pageData.value)], type: ["portfolio"]}))

    return { heroImages, pageTitle, portfolioItems, DateTime }
    },
    created() {
      library.add(faChevronRight);
    }
  })

  export default Portfolio