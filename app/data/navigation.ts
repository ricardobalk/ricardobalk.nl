import type { NavigationItems as NavigationItemsType } from '@/types/navigation';

const NavigationItems: NavigationItemsType = [
  {
    label: 'Home',
    link: {
      to: '/',
    },
  },
  {
    label: 'Blog',
    feature: 'blog',
    link: {
      to: '/blog',
    },
  },
  {
    label: 'Privacy',
    link: {
      to: '/privacy',
    },
  }
];

export default NavigationItems;
