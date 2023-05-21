import { RouterType } from '@/types/router.types';

export const ROUTER_DATA: RouterType[] = [
  {
    path: '/',
    title: 'Top Stories',
    api: 'https://hacker-news.firebaseio.com/v0/topstories.json',
    shouldDisplay: false,
  },
  {
    path: '/news',
    title: 'New Stories',
    api: 'https://hacker-news.firebaseio.com/v0/newstories.json',
    shouldDisplay: true,
  },
];
