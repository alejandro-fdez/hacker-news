import { useGetNewStories } from '@/api/useGetNewStories';
import { useGetFullItemListInfinitePagination } from '@/api/useGetItem';
import { Card } from '@/components/card/Card';
import { GridListPaginated } from '@/components/grid-list-paginated/GridListPaginated';

export const NewsPage = () => {
  const { data: itemIds } = useGetNewStories();

  const { itemList, isLoading, ref } = useGetFullItemListInfinitePagination({
    itemIds,
    numItems: 20,
  });

  return (
    <GridListPaginated loaderRef={ref} isLoading={isLoading}>
      {itemList.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </GridListPaginated>
  );
};
