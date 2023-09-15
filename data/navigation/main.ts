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
  },
  {
    label: 'Privacy',
    link: {
      to: '/privacy',
    },
  }
];

export default NavigationItems;