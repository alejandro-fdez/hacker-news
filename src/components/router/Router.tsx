import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { DefaultLayout } from '@/components/layout/default-layout/DefaultLayout';
import { HomePage } from '@/pages/home/HomePage';
import { NewsPage } from '@/pages/news/NewsPage';
import { JobPage } from '@/pages/job/JobPage';
import { AskPage } from '@/pages/ask/AskPage';
import { JobDetailsPage } from '@/pages/job-details/JobDeatilsPage';
import { NotFoundPage } from '@/pages/not-found/NotFoundPage';

export const getAppRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DefaultLayout />}>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="new" element={<NewsPage />} />
          <Route path="job">
            <Route index element={<JobPage />} />
            <Route path=":id" element={<JobDetailsPage />} />
          </Route>
          <Route path="ask" element={<AskPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Route>
      </Route>
    )
  );
};
