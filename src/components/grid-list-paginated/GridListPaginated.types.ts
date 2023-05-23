import { GridListProps } from '../grid-list/GridList.types';

export type GridListPaginatedProps = GridListProps & {
  isLoading: boolean;
  loaderRef: React.Ref<HTMLDivElement>;
};
