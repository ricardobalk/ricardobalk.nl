import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-da78510c",
    path: "/blog/new-website",
    component: Vuepress,
    meta: { title: "New Website" },
  },
  {
    path: "/src/blog/New Website.html",
    redirect: "/blog/new-website",
  },
  {
    path: "/src/blog/New%20Website.html",
    redirect: "/blog/new-website",
  },
  {
    path: "/src/blog/New Website.md",
    redirect: "/blog/new-website",
  },
  {
    path: "/src/blog/New%20Website.md",
    redirect: "/blog/new-website",
  },
]
