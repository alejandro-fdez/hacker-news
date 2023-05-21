import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTER_DATA } from '@/components/router/Router.constants';

export const useRouter = () => {
  const { pathname } = useLocation();

  const getIsCurrentPage = (page: string) => page === pathname;

  const currentPageData = useMemo(
    () => ROUTER_DATA.find((pageData) => pageData.path === pathname)!,
    [pathname]
  );

  return { getIsCurrentPage, currentPageData };
};
