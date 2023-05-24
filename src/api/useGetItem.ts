import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import { useQueries, useQuery } from '@tanstack/react-query';
import { ItemFullType, ItemIdType, StoryListType } from '@/types/api.types';
import { useInfinitePaginationController } from '@/hooks/useInfinitePaginationController';

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
    const isFetched = useGetItemList.length
      ? useGetItemList.every((query) => query.isFetched)
      : false;
    const data = isFetched
      ? useGetItemList.map(({ data: dataQuery }) => dataQuery!.data)
      : [];
    return { isLoading, isFetched, data };
  }, [useGetItemList]);
};

export const useGetFullItemListInfinitePagination = ({
  itemIds = [],
  numItems = 21,
}: {
  itemIds: StoryListType | undefined;
  numItems?: number;
}) => {
  const lastIndex = useRef(-1);
  const [index, setIndex] = useState(0);
  const [itemList, setItemList] = useState<ItemFullType[]>([]);

  const partialItemIds = itemIds.slice(index, index + numItems);

  const { isFetched, isLoading, data } = useGetItems(partialItemIds);

  const isCompleted = index >= itemIds.length;

  useEffect(() => {
    if (!data.length || !isFetched || lastIndex.current >= index) return;

    setItemList((prev) => prev.concat(data));
    lastIndex.current = index;
  }, [data, index, isFetched]);

  const handleOnNextPage = useCallback(() => {
    if (isLoading || !isFetched || isCompleted) return;
    setIndex((prev) => prev + numItems);
  }, [isCompleted, isFetched, isLoading, numItems]);

  const inView = useInfinitePaginationController({
    isCompleted,
    onLoadMore: handleOnNextPage,
  });

  return {
    itemList,
    isLoading,
    isFetched,
    isCompleted,
    handleOnNextPage,
    ...inView,
  };
};
