import { useInView } from 'react-intersection-observer';
import { useGetTopStories } from '@/api/useGetTopStories';
import { useGetFullItemListInfinitePagination } from '@/api/useGetItem';
import { GridList } from '@/components/grid-list/GridList';
import { Card } from '@/components/card/Card';

export const HomePage = () => {
  const { data: itemIds } = useGetTopStories();
  const { itemList, handleOnNextPage, isLoading, isCompleted } =
    useGetFullItemListInfinitePagination({
      itemIds,
      numItems: 20,
    });
  const { ref } = useInView({
    threshold: 1,
    skip: isCompleted,
    onChange: (inView) => {
      if (inView) {
        handleOnNextPage();
      }
    },
  });

  return (
    <GridList ref={ref} isLoading={isLoading}>
      {itemList.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </GridList>
  );
};
