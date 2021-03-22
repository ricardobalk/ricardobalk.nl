import { defineComponent } from 'vue'
import { useSiteData } from '@vuepress/client'

export const languageSelection = defineComponent({
  setup(){
    const siteData = useSiteData()
    const language : string = siteData.value.lang === "de" ? "en" : siteData.value.lang;
    return { language }
  }
})

export default languageSelection