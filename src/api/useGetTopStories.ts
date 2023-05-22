import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { StoryListType } from '@/types/api.types';

export const GET_TOP_STORIES_KEY = ['GET_TOP_STORIES'];

export const useGetTopStories = () => {
  return useQuery(GET_TOP_STORIES_KEY, async () => {
    const { data } = await axios.get<StoryListType>(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );

    return data ?? [];
  });
};
