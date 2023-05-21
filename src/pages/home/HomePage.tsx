import { useRouter } from '@/hooks/useRouter';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { StoryList } from '@/types/api.types';

export const HomePage = () => {
  const {
    currentPageData: { api },
  } = useRouter();
  const [stories, setStories] = useState<StoryList | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      if (!api || stories?.length) return;
      const response = await axios.get<StoryList>(api);
      setStories(response.data ?? []);
    };

    fetchStories();
  }, [api, stories?.length]);

  console.log(stories);
  return <h1>HomePage</h1>;
};
