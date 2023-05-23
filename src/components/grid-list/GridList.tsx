import { forwardRef } from 'react';
import { WithBasicProps } from '@/types/component.types';
import { cx } from '@/utils/dom';
import { LoadingContent } from '../loading-content/LoadingContent';

export const GridList = forwardRef<HTMLDivElement, WithBasicProps>(
  ({ children, className, isLoading }, ref) => {
    return (
      <>
        <div
          className={cx(
            className,
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-6'
          )}
        >
          {children}
        </div>
        <LoadingContent ref={ref} isLoading={isLoading} />
      </>
    );
  }
);
