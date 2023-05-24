import { useParams } from 'react-router-dom';
import { useGetItem } from '@/api/useGetItem';
import { JobType } from '@/types/api.types';
import { Card, CardHeader } from '@/components/card/Card';
import { HTMLContent } from '@/components/html-content/HTMLContent';
import { Helmet } from 'react-helmet-async';
import { NavigateToNotFoundPage } from '@/components/navigate-to-not-found-page/NavigateToNotFoundPage';
import { LoadingContent } from '@/components/loading-content/LoadingContent';

export const JobDetailsPage = () => {
  const { id } = useParams();

  const itemId = +id!;
  const { data, isFetched, isLoading } = useGetItem(itemId);

  const { by, title, time, text } = (data as JobType) ?? {};

  return (
    <LoadingContent isLoading={isLoading}>
      <NavigateToNotFoundPage enabled={isFetched && !data} />
      <Helmet>
        <title>Job - {title || ''}</title>
      </Helmet>
      <Card className="space-y-4">
        <CardHeader time={time} />
        <div className="my-2">
          <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>

          <div className="font-semibold text-gray-400 cursor-pointer text-xs ">
            {by}
          </div>
          {text && <HTMLContent>{text}</HTMLContent>}
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center" />
      </Card>
    </LoadingContent>
  );
};
