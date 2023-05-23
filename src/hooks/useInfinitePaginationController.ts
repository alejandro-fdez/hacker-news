import { useInView } from 'react-intersection-observer';

export const useInfinitePaginationController = ({
  isCompleted,
  onLoadMore,
}: {
  isCompleted: boolean;
  onLoadMore: () => void;
}) => {
  return useInView({
    threshold: 1,
    skip: isCompleted,
    onChange: (inView) => {
      if (inView) {
        onLoadMore();
      }
    },
  });
};
