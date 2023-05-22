import { WithBasicProps } from '@/types/component.types';
import { cx } from '@/utils/dom';

export const GridList = ({ children, className }: WithBasicProps) => {
  return (
    <div
      className={cx(
        className,
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-6'
      )}
    >
      {children}
    </div>
  );
};
