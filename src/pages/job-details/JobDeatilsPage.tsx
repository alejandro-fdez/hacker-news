import { useParams } from 'react-router-dom';
import { useGetItem } from '@/api/useGetItem';

export const JobDetailsPage = () => {
  const { id } = useParams();

  const itemId = +id!;
  const { data } = useGetItem(itemId);

  return (
    <div>
      {itemId}
      :: {data?.id}
    </div>
  );
};
