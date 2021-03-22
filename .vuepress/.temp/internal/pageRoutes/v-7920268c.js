import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-7920268c",
    path: "/blog/unsplash-photos",
    component: Vuepress,
    meta: { title: "Photography on Unsplash" },
  },
  {
    path: "/src/blog/Photos-on-Unsplash.html",
    redirect: "/blog/unsplash-photos",
  },
  {
    path: "/src/blog/Photos-on-Unsplash.md",
    redirect: "/blog/unsplash-photos",
  },
]
