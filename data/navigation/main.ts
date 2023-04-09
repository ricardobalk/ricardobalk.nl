import { NavigationItems } from '@/components/molecules/Navigation.vue';

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
        label: 'Subject one',
        link: {
          to: '/blog/subject-one',
        },
      },
      {
        label: 'Second Post',
        link: {
          to: '/blog/subject-two',
        },
        children: [
          {
            label: 'Some article',
            link: {
              to: '/blog/subject-two/sub-post',
            }
          }
        ]
      },
    ]
  },
];

export default NavigationItems;