import { useGetTopStories } from '@/api/useGetTopStories';
import { useGetFullItemListInfinitePagination } from '@/api/useGetItem';
import { Card } from '@/components/card/Card';
import { useRouter } from '@/hooks/useRouter';
import { GridListPaginated } from '@/components/grid-list-paginated/GridListPaginated';

export const HomePage = () => {
  const {
    currentPageData: { title },
  } = useRouter();

  const { data: itemIds } = useGetTopStories();

  const { itemList, isLoading, ref } = useGetFullItemListInfinitePagination({
    itemIds,
    numItems: 20,
  });

  return (
    <>
      <h1>{title}</h1>
      <GridListPaginated loaderRef={ref} isLoading={isLoading}>
        {itemList.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </GridListPaginated>
    </>
  );
};
