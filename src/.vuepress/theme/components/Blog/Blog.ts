import filterPagesByFrontmatter from "../../mixins/filterPagesByFrontmatter"
import Hero from "../Hero";
import Articles from "./Articles";
import CategoryFilter from "../CategoryFilter";
import Breadcrumbs from "../Breadcrumbs"
import { defineComponent, computed, reactive } from "vue";
import { usePageData, usePageFrontmatter, resolvePageLang } from "@vuepress/client"
import type { PageData } from '@vuepress/core/lib/types'

export const Blog = defineComponent({
  name: "Blog",
  components: { Hero, Breadcrumbs, CategoryFilter, Articles, usePageData },
  
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
      return posts
    }
    
    const typeOfPosts = computed(() => frontmatter.value.type || "post")

    const posts = computed(() => fetchPosts({lang: [resolvePageLang(pageData.value)], type: [typeOfPosts.value]}))

    const availableCategories = computed(() => { 
      // A set is basically a special form of Array that automatically removes duplicates.
      let categories : Set<string> = new Set();

      // We look for the category of each post and add it to the Set.
      posts.value.forEach((post) => { typeof(post.frontmatter.category) === "string" && categories.add(post.frontmatter.category) })

      // And return the result. Keep in mind that the returned type is still a Set, not an Array. If you wish to convert the Set into an Array, use `return Array.from(categories)` ;-)
      return categories
    })

    return { heroImages, pageTitle, posts, availableCategories }
  },
  
});

export default Blog