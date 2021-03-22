import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-8de2b976",
    path: "/blog/jitsi-meet-instance",
    component: Vuepress,
    meta: { title: "Jitsi Meet" },
  },
  {
    path: "/src/blog/Jitsi-Meet.html",
    redirect: "/blog/jitsi-meet-instance",
  },
  {
    path: "/src/blog/Jitsi-Meet.md",
    redirect: "/blog/jitsi-meet-instance",
  },
]
