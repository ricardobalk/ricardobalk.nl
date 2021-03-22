import type { PageData } from '@vuepress/core/lib/types'
import { usePages } from '../../composables';
import { reactive } from 'vue'

/**
 * Runs an inclusive filter on an array containing objects.
 * @param target Target array to filter.
 * @param filters Filter(s) to apply.
 * @returns An array containing pages conforming to the filter value(s).
 * @example - nestedFilter([{id: 0, lang: "en-US"}, {id: 1, lang: "nl-NL"}], {lang: ["en-US"]})
 * @example - nestedFilter([{id: 0, lang: "en-US"}, {id: 1, lang: "nl-NL"}], {lang: ["en-US", "nl-NL"]})
 */
const nestedFilter = (target : Array<any>, filters: Record<string, any[]>) : Array<typeof target> => {
    const filterKeys = Object.keys(filters);
    return target.filter(function (eachObj) {
      return filterKeys.every(function (eachKey) {
        if (!filters[eachKey].length) {
          return true; 
        }
        return filters[eachKey].includes(eachObj[eachKey]);
     });
 });
};

/**
 * @returns A collection of pages filtered on the given frontmatter.
 * @requires nestedFilter()
 * @param filter Which collection to return. Defaults to `{ type: ["post"] }`.
 * @example - Get all English pages:
 *              filterPagesByFrontmatter({ lang: ["en-US"] } )
 *          - Get all blog posts:
 *              filterPagesByFrontmatter({ type: ["blog"] } )
 *          - Get all blog posts and portfolio items:
 *              filterPagesByFrontmatter({ type: ["blog", "portfolio"] } )
 *          - Get all English blog posts:
 *              filterPagesByFrontmatter({ lang: ["en-US"], type: ["blog"] } )
 */
 export async function filterPagesByFrontmatter(filter: Record<string, any>): Promise<Array<PageData>> {
    const defaultFilter : Record<string, string[]> = { type: ["post"] }
    !filter && (filter = defaultFilter)

    let filteredPages : PageData[] = reactive([])

    const pages = await usePages()    

    // TODO: Refactor this. There's probably a shorter, more concise and technically more correct way.
    pages.forEach( (page) => (nestedFilter([page.frontmatter], filter).length > 0 && filteredPages.push(page)) )

    return filteredPages
  }
  
  export default filterPagesByFrontmatter