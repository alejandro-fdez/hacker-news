import { cx } from '@/utils/dom';
import { GridListProps } from './GridList.types';

export const GridList = ({ children, className }: GridListProps) => {
  return (
    <div
      className={cx(
        className,
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7'
      )}
    >
      {children}
    </div>
  );
};
