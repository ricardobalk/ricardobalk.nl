import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/undisclosed/Local/Git/ricardobalk/website/vuepress-next/node_modules/@vuepress/theme-default/lib/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/undisclosed/Local/Git/ricardobalk/website/vuepress-next/node_modules/@vuepress/theme-default/lib/layouts/Layout.vue")),
}
