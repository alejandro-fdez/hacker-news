import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { setupQueryClient } from '@/core/query-client';
import { getAppRouter } from './components/router/Router';

import './styles/index.scss';

const router = getAppRouter();
const queryClient = setupQueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Helmet defaultTitle="HackerNews" titleTemplate="HackerNews | %s" />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
