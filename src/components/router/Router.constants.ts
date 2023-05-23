import { RouterType } from '@/types/router.types';

export const ROUTER_DATA: RouterType[] = [
  {
    path: '/',
    title: 'Top Stories',
    shouldDisplay: false,
  },
  {
    path: '/news',
    title: 'New Stories',
    shouldDisplay: true,
  },
];
