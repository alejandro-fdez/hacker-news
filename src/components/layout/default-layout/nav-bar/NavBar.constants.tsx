import { ROUTER_DATA } from '@/components/router/Router.constants';

export const NAV_BAR_ITEMS = ROUTER_DATA.filter(
  (item) => item.shouldDisplay && !!item.path
);
