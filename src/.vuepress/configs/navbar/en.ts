import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Blog",
    link: "/blog/",
  },
  {
    text: "Guides",
    link: "/guides/",
  },
  {
    text: "More",
    children: [
      {
        text: "This website",
        children: [
          "/changes/",
          "/privacy/",
          {
            text: "Source code",
            link: "https://github.com/ricardobalk/website",
          },
          {
            text: "Tor version",
            link: "http://nciwf3vh63efdjqymcpq2uey2ahufyskyzeon4zomd6vg4lpdg5vfiyd.onion/",
          },
        ],
      },
    ],
  },
];
