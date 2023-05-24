import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { HomePage } from '@/pages/home/HomePage';
import { NewsPage } from '@/pages/news/NewsPage';
import { JobPage } from '@/pages/job/JobPage';
import { AskPage } from '@/pages/ask/AskPage';
import { DefaultLayout } from '@/components/layout/default-layout/DefaultLayout';

export const getAppRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="new" element={<NewsPage />} />
        <Route path="job" element={<JobPage />} />
        <Route path="ask" element={<AskPage />} />
      </Route>
    )
  );
};
