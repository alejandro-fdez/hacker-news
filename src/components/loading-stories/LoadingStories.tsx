import { forwardRef } from 'react';
import { Spinner } from '../spinner/Spinner';
import { LoadingStoriesProps } from './LoadingStories.types';

export const LoadingStories = forwardRef<HTMLDivElement, LoadingStoriesProps>(
  (
    { isLoading, iconClassName, message = 'Loading more news for you' },
    ref
  ) => {
    return (
      <div ref={ref}>
        {isLoading && (
          <div className="flex gap-3 items-center justify-center my-14">
            <Spinner className={iconClassName} />
            {message && <span>{message}</span>}
          </div>
        )}
      </div>
    );
  }
);
