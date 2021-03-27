import type { NavbarConfig } from '@vuepress/theme-default'

export const nl: NavbarConfig = [
  {
    text: 'Home',
    link: '/nl/',
  },
  {
    text: 'Blog',
    link: '/nl/blog/',
  },
  {
    text: 'Handleidingen (Engels)',
    link: '/guides/',
  },
  {
    text: 'Portfolio',
    link: '/nl/portfolio/',
  },
  {
    text: 'Meer',
    children: [
      {
        text: 'Ricardo op Social Media',
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
        text: 'Over deze website',
        children: [
          '/changes/',
          '/nl/privacy/',
          {
            text: 'Broncode',
            link: 'https://github.com/ricardobalk/website',
          },
          {
            text: 'Tor-versie',
            link: 'http://3rfoq3ia75hnxgpmtwyeyvbjbhym354tcy4ox2jaqjqhtcmd4i2mt2id.onion/',
          },
        ],
      },
    ],
  }
]
