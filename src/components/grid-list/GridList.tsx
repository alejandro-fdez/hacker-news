import { cx } from '@/utils/dom';
import { LoadingContent } from '../loading-content/LoadingContent';
import { GridListProps } from './GridList.types';

export const GridList = ({
  children,
  className,
  isLoading,
  loaderRef,
}: GridListProps) => {
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
      <LoadingContent ref={loaderRef} isLoading={isLoading} />
    </>
  );
};
