import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { HomePage } from '@/pages/home/HomePage';
import { NewsPage } from '@/pages/news/NewsPage';
import { DefaultLayout } from '@/components/layout/default-layout/DefaultLayout';

export const getAppRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
      </Route>
    )
  );
};
