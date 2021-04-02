import type { NavbarConfig } from '@vuepress/theme-default'

export const de: NavbarConfig = [
  {
    text: 'Home',
    link: '/de/',
  },
  {
    text: 'Weitere Links',
    children: [
      {
        text: 'Infos zu dieser Website',
        children: [
          '/changes/',
          '/privacy/',
          {
            text: 'Quellcode',
            link: 'https://github.com/ricardobalk/website',
          },
          {
            text: 'Tor-Version',
            link: 'http://3rfoq3ia75hnxgpmtwyeyvbjbhym354tcy4ox2jaqjqhtcmd4i2mt2id.onion/',
          },
        ],
      },
      {
        text: 'Englische Teile der Website',
        children: [
          {
            text: 'Blog',
            link: '/blog/',
          },
          {
            text: 'Anleitungen',
            link: '/guides/',
          },
          {
            text: 'Portfolio',
            link: '/portfolio/',
          },
        ]
      },
      {
        text: 'Ricardo auf Social Media',
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
        text: 'Werde einer meiner Sponsoren',
        children: [
          { 
            text: 'Einmaliges Sponsoring (Ko-Fi.com)',
            link: 'https://ko-fi.com/ricardobalk',
          },
          {
            text: 'Monatliches Sponsoring (GitHub Sponsors)',
            link: 'https://github.com/sponsors/ricardobalk',
          }
        ]
      },
    ],
  }
]
