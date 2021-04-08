import { usePageData, resolvePageLang } from '@vuepress/client'

export const getPageLanguage = () => {
    const pageData = usePageData()
    return resolvePageLang(pageData.value);
}

export default getPageLanguage