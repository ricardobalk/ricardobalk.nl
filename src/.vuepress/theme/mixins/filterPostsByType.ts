import type { PageData } from '@vuepress/core/lib/types'
import { usePages } from '../composables';

/**
 * @returns A collection of posts filtered on the given type.
 * @param type Type of posts to return. Defaults to 'blogposts' when the type is an empty string, null or undefined
 * @example filterPostsByType('blogpost') - Returns all blog entries.
 * @example filterPostsByType('porfolio') - Returns all portfolio items.
 */
 export async function filterPostsByType(type: string): Promise<Array<PageData>> {
  // If postType is null, undefined or an empty string,
  // use the default value of "blogpost".
  !type && (type = "blogpost");

  const pages = await usePages()
  return pages.filter(page => page.frontmatter.type === type)
}

export default filterPostsByType