import { LoadingStories } from '../loading-stories/LoadingStories';
import { GridListPaginatedProps } from './GridListPaginated.types';
import { GridList } from '../grid-list/GridList';

export const GridListPaginated = ({
  isLoading,
  loaderRef,
  children,
  ...restProps
}: GridListPaginatedProps) => {
  return (
    <>
      <GridList {...restProps}>{children}</GridList>
      <LoadingStories ref={loaderRef} isLoading={isLoading} />
    </>
  );
};
