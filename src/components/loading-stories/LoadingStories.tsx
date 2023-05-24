import { forwardRef } from 'react';
import { LoadingStoriesProps } from './LoadingStories.types';
import { CardSkeleton } from '../card/card-skeleton/CardSkeleton';

export const LoadingStories = forwardRef<HTMLDivElement, LoadingStoriesProps>(
  ({ isLoading }, ref) => {
    return (
      <>
        {isLoading && <CardSkeleton count={18} />}
        <div ref={ref} />
      </>
    );
  }
);
