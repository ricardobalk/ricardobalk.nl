import type { NavbarConfig } from '@vuepress/theme-default'

export const nl: NavbarConfig = [
  {
    text: 'Home',
    link: '/nl/',
  },
  {
    text: 'Portfolio',
    link: '/nl/portfolio/',
  },
  {
    text: 'Meer',
    children: [
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
      { 
        text: 'Engelstalige pagina\'s',
        children: [
          {
            text: 'Blog',
            link: '/blog/',
          },
          {
            text: 'Handleidingen',
            link: '/guides/',
          },
        ]
      },
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
        ],
      },
      {
        text: 'Sponsor mijn werk',
        children: [
          {
            text: 'Eenmalig sponsoren (Ko-Fi.com)',
            link: 'https://ko-fi.com/ricardobalk',
          },
          {
            text: 'Maandelijks sponsoren (GitHub Sponsors)',
            link: 'https://github.com/ricardobalk',
          },
        ]
      },
    ],
  }
]
