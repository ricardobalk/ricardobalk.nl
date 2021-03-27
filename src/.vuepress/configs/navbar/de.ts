import type { NavbarConfig } from '@vuepress/theme-default'

export const de: NavbarConfig = [
  {
    text: 'Home',
    link: '/de/',
  },
  {
    text: 'Blog (auf Englisch)',
    link: '/blog/',
  },
  {
    text: 'Anleitungen (auf Englisch)',
    link: '/guides/',
  },
  {
    text: 'Portfolio (auf Englisch)',
    link: '/portfolio/',
  },
  {
    text: 'Weitere Links',
    children: [
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
          {
            text: 'Keybase',
            link: 'https://keybase.io/ricardobalk',
          },
        ],
      },
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
    ],
  }
]
