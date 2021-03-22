import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-b366bbee",
    path: "/src/blog/",
    component: Vuepress,
    meta: { title: "Blog" },
  },
  {
    path: "/src/blog/index.html",
    redirect: "/src/blog/",
  },
  {
    path: "/src/blog/index.md",
    redirect: "/src/blog/",
  },
]
