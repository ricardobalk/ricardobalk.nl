import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-2c4beef7",
    path: "/src/guide/",
    component: Vuepress,
    meta: { title: "Introduction" },
  },
  {
    path: "/src/guide/index.html",
    redirect: "/src/guide/",
  },
  {
    path: "/src/guide/README.md",
    redirect: "/src/guide/",
  },
]
