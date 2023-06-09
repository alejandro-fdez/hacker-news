import { cx } from '@/utils/dom';
import { Spinner } from '../spinner/Spinner';
import { LoadingContentProps } from './LoadingContent.types';

export const LoadingContent = ({
  className,
  children,
  isLoading,
}: LoadingContentProps) => {
  if (!isLoading) return <>{children}</>;
  return (
    <div
      className={cx(className, 'flex justify-center mt-40')}
      aria-label="Loading content"
      aria-busy="true"
      aria-live="assertive"
    >
      <Spinner className="w-20 h-20" />
    </div>
  );
};
