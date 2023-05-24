import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { StoryListType } from '@/types/api.types';

export const GET_JOB_STORIES_KEY = ['GET_JOB_STORIES'];

export const useGetJobStories = () => {
  return useQuery(GET_JOB_STORIES_KEY, async () => {
    const { data } = await axios.get<StoryListType>(
      'https://hacker-news.firebaseio.com/v0/jobstories.json'
    );

    return data ?? [];
  });
};
