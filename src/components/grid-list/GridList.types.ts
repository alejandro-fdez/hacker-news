import { WithBasicProps } from '@/types/component.types';

export type GridListProps = WithBasicProps & {
  isLoading?: boolean;
  loaderRef?: React.Ref<HTMLDivElement>;
};
