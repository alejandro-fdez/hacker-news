import { useGetTopStories } from '@/api/useGetTopStories';
import { useGetFullItemListInfinitePagination } from '@/api/useGetItem';
import { GridListPaginated } from '@/components/grid-list-paginated/GridListPaginated';
import { CardArticle } from '@/components/card/CardArticle/CardArticle';

export const HomePage = () => {
  const { data: itemIds } = useGetTopStories();

  const { itemList, isLoading, ref } = useGetFullItemListInfinitePagination({
    itemIds,
  });

  return (
    <GridListPaginated loaderRef={ref} isLoading={isLoading}>
      {itemList.map((item) => (
        <CardArticle key={item.id} data={item} />
      ))}
    </GridListPaginated>
  );
};
