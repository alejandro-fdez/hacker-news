import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { StoryListType } from '@/types/api.types';

export const GET_NEW_STORIES_KEY = ['GET_NEW_STORIES'];

export const useGetNewStories = () => {
  return useQuery(GET_NEW_STORIES_KEY, async () => {
    const { data } = await axios.get<StoryListType>(
      'https://hacker-news.firebaseio.com/v0/newstories.json'
    );

    return data ?? [];
  });
};
