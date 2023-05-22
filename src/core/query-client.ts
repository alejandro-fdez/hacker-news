import { QueryClient } from '@tanstack/react-query';

export const setupQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });
