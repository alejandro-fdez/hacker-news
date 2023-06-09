import { useGetJobStories } from '@/api/useGetJobStories';
import { useGetFullItemListInfinitePagination } from '@/api/useGetItem';
import { CardJob } from '@/components/card/card-job/CardJob';
import { GridListPaginated } from '@/components/grid-list-paginated/GridListPaginated';

export const JobPage = () => {
  const { data: itemIds, isLoading: isLoadingStories } = useGetJobStories();

  const { itemList, isLoading, ref } = useGetFullItemListInfinitePagination({
    itemIds,
  });

  return (
    <GridListPaginated
      loaderRef={ref}
      isLoading={isLoadingStories || isLoading}
    >
      {itemList.map((item) => (
        <CardJob key={item.id} data={item} />
      ))}
    </GridListPaginated>
  );
};
