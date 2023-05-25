import {
  Navigate,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { DefaultLayout } from '@/components/layout/default-layout/DefaultLayout';
import { HomePage } from '@/pages/home/HomePage';
import { NewsPage } from '@/pages/news/NewsPage';
import { JobPage } from '@/pages/job/JobPage';
import { JobDetailsPage } from '@/pages/job-details/JobDeatilsPage';
import { NotFoundPage } from '@/pages/not-found/NotFoundPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="new" element={<NewsPage />} />
          <Route path="job">
            <Route index element={<JobPage />} />
            <Route path=":id" element={<JobDetailsPage />} />
          </Route>
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Route>
      </Route>
    </Routes>
  );
};
