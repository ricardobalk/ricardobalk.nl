import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Blog',
    link: '/blog/',
  },
  {
    text: 'Guides',
    link: '/guides/',
  },
  {
    text: 'Portfolio',
    link: '/portfolio/',
  },
  {
    text: 'More',
    children: [
      {
        text: 'Connect with me',
        children: [
          {
            text: 'GitHub',
            link: 'https://github.com/ricardobalk',
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/ricardobalk',
          },
          {
            text: 'Keybase',
            link: 'https://keybase.io/ricardobalk',
          },
        ],
      },
      {
        text: 'This website',
        children: [
          '/changes/',
          '/privacy/',
          {
            text: 'Source code',
            link: 'https://github.com/ricardobalk/website',
          },
          {
            text: 'Tor version',
            link: 'http://3rfoq3ia75hnxgpmtwyeyvbjbhym354tcy4ox2jaqjqhtcmd4i2mt2id.onion/',
          },
        ],
      },
    ],
  }
]
