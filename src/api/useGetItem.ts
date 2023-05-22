import { useMemo } from 'react';
import axios from 'axios';
import { useQueries, useQuery } from '@tanstack/react-query';
import { ItemFullType, ItemIdType, StoryListType } from '@/types/api.types';

export const GET_ITEM_KEY = (itemId: ItemIdType) => ['GET_ITEM', itemId];

const fetchItem = (itemId: ItemIdType) =>
  axios.get<ItemFullType>(
    `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`
  );

export const useGetItem = (itemId: ItemIdType) => {
  return useQuery(
    GET_ITEM_KEY(itemId),
    async () => {
      const { data } = await fetchItem(itemId);

      return data ?? {};
    },
    { enabled: !!itemId }
  );
};

export const useGetItems = (itemIds: StoryListType | undefined = []) => {
  const useGetItemList = useQueries({
    queries: itemIds.map((itemId) => ({
      queryKey: GET_ITEM_KEY(itemId),
      queryFn: () => fetchItem(itemId),
    })),
  });

  return useMemo(() => {
    const isLoading = useGetItemList.some((query) => query.isLoading);
    const isFetched = !isLoading;
    const data = isFetched
      ? useGetItemList.map(({ data: dataQuery }) => dataQuery!.data)
      : [];
    return { isLoading, isFetched, data };
  }, [useGetItemList]);
};
