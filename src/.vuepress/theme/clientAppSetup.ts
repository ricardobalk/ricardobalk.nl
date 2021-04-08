import { computed, provide } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'
import type { ClientAppSetup } from '@vuepress/client'
import {
  resolveSidebarItems,
  sidebarItemsSymbol,
  useThemeLocaleData,
  resolvePages,
  pagesSymbol
} from './composables'
import type { DefaultThemePageFrontmatter } from './types'

const clientAppSetup: ClientAppSetup = () => {
  // we need to access sidebar items in multiple components
  // so we make it global computed
  const themeLocale = useThemeLocaleData()
  const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
  const sidebarItems = computed(() =>
    resolveSidebarItems(frontmatter.value, themeLocale.value)
  )
  const pages = resolvePages()
  provide(sidebarItemsSymbol, sidebarItems)
  provide(pagesSymbol, pages)
}

export default clientAppSetup
