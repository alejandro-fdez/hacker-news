import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { StoryListType } from '@/types/api.types';

export const GET_ASK_STORIES_KEY = ['GET_ASK_STORIES'];

export const useGetAskStories = () => {
  return useQuery(GET_ASK_STORIES_KEY, async () => {
    const { data } = await axios.get<StoryListType>(
      'https://hacker-news.firebaseio.com/v0/askstories.json'
    );

    return data ?? [];
  });
};
