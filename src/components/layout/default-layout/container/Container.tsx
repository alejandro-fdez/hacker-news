import { cx } from '@/utils/dom';
import { WithBasicProps } from '@/types/component.types';

export const Container = ({ children, className }: WithBasicProps) => {
  return (
    <div className={cx(className, 'mx-auto max-w-7xl px-2 sm:px-6 lg:px-8')}>
      {children}
    </div>
  );
};
