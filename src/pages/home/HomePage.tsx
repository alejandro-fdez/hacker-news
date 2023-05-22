import { useGetTopStories } from '@/api/useGetTopStories';
import { useGetItems } from '@/api/useGetItem';
import { GridList } from '@/components/grid-list/GridList';
import { Card } from '@/components/card/Card';

export const HomePage = () => {
  const { data: stories } = useGetTopStories();
  const { data: itemList } = useGetItems(stories?.slice(0, 20));

  return (
    <GridList>
      {itemList.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </GridList>
  );
};
