import { useGetNewStories } from '@/api/useGetNewStories';
import { useGetFullItemListInfinitePagination } from '@/api/useGetItem';
import { GridListPaginated } from '@/components/grid-list-paginated/GridListPaginated';
import { CardArticle } from '@/components/card/CardArticle/CardArticle';

export const NewsPage = () => {
  const { data: itemIds } = useGetNewStories();

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
