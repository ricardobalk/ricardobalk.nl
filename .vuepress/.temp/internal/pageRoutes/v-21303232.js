import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-21303232",
    path: "/src/guide/theme.html",
    component: Vuepress,
    meta: { title: "Theme" },
  },
  {
    path: "/src/guide/theme.md",
    redirect: "/src/guide/theme.html",
  },
]
