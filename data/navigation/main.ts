import { NavigationItems } from '@/components/molecule/Navigation.vue';

const NavigationItems: NavigationItems = [
  {
    label: 'Home',
    link: {
      to: '/',
    },
  },
  {
    label: 'Blog',
    link: {
      to: '/blog',
    },
    children: [
      {
        label: 'Article one',
        link: {
          to: '/blog/article',
        },
      },
      {
        label: 'Article two',
        link: {
          to: '/blog/article-two',
        },
        children: [
          {
            label: 'Some sub article',
            link: {
              to: '/blog/article-two/sub-article',
            }
          }
        ]
      },
    ]
  },
];

export default NavigationItems;