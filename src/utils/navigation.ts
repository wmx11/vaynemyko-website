import routes from './routes';

const navigation = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Resources',
    href: routes.resources,
  },
  {
    label: 'Blog',
    href: routes.blog,
  },
  {
    label: 'Newsletter',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
];

export const footerNavigation = [
  {
    section: 'Navigation',
    navigation,
  },
  {
    section: 'Legal',
    navigation: [
      {
        label: 'Privacy policy',
        href: '/privacy-policy',
      },
      {
        label: 'Terms of service',
        href: '#',
      },
      {
        label: 'Cookie policy',
        href: '#',
      },
    ],
  },
  {
    section: 'Follow me on',
    navigation: [
      {
        label: 'Twitter',
        href: 'https://twitter.com/vaynemyko',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vainius-mykolaitis-07baa412a/',
      },
      // {
      //   label: 'Instagram',
      //   href: '#',
      // },
    ],
  },
];

export default navigation;
