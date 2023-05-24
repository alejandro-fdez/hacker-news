import { useGetFullItemListInfinitePagination } from '@/api/useGetItem';
import { Card } from '@/components/card/Card';
import { GridListPaginated } from '@/components/grid-list-paginated/GridListPaginated';
import { useGetAskStories } from '@/api/useGetAskStories';

export const AskPage = () => {
  const { data: itemIds } = useGetAskStories();

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
