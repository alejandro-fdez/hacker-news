import { LoadingContent } from '../loading-content/LoadingContent';
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
      <LoadingContent ref={loaderRef} isLoading={isLoading} />
    </>
  );
};
