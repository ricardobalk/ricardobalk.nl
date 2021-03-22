import filterPagesByFrontmatter from "../../mixins/filterPagesByFrontmatter"
import Hero from "../Hero";
import Articles from "./Articles";
// import Filter from "./Filter";
import { defineComponent, computed, reactive } from "vue";
import { usePageData, usePagesData, usePageFrontmatter, resolvePageLang } from "@vuepress/client"
import type { PageData } from '@vuepress/core/lib/types'

export const Blog = defineComponent({
  name: "Blog",
  components: { Hero, Articles, usePagesData, usePageData },
  
  setup() {
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
      return pageData.value.title || "Blog";
    })

    const fetchPosts = (params : Record<string, any>) => {
      const posts : PageData[] = reactive([])
      filterPagesByFrontmatter(params)
        .then((pages) => pages.filter(page => posts.push(page)))
      console.log(posts)
      return posts
    }
    
    const typeOfPosts = computed(() => frontmatter.value.type || "post")
    const posts = computed(() => fetchPosts({lang: [resolvePageLang(pageData.value)], type: [typeOfPosts.value]}))
    
    return { heroImages, pageTitle, posts }
  },
  
});

export default Blog