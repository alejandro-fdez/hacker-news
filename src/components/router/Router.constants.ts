import { RouterType } from '@/types/router.types';

export const ROUTER_DATA: RouterType[] = [
  {
    path: '/',
    title: 'Top Stories',
    shouldDisplay: false,
  },
  {
    path: '/new',
    title: 'New Stories',
    shouldDisplay: true,
  },
  {
    path: '/job',
    title: 'Job Stories',
    shouldDisplay: true,
  },
  {
    path: '/ask',
    title: 'Ask Stories',
    shouldDisplay: true,
  },
];
