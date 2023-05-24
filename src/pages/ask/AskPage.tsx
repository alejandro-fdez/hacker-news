import { useGetFullItemListInfinitePagination } from '@/api/useGetItem';
import { CardAsk } from '@/components/card/CardAsk/CardAsk';
import { GridListPaginated } from '@/components/grid-list-paginated/GridListPaginated';
import { useGetAskStories } from '@/api/useGetAskStories';

export const AskPage = () => {
  const { data: itemIds } = useGetAskStories();

  const { itemList, isLoading, ref } = useGetFullItemListInfinitePagination({
    itemIds,
  });

  return (
    <GridListPaginated loaderRef={ref} isLoading={isLoading}>
      {itemList.map((item) => (
        <CardAsk key={item.id} data={item} />
      ))}
    </GridListPaginated>
  );
};
