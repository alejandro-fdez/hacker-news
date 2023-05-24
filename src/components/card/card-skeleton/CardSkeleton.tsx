import Skeleton from 'react-loading-skeleton';
import { RepeatContent } from '@/components/repeat-content/RepeatContent';
import { Card } from '../Card';
import { CardSkeletonProps } from './CardSkeleton.types';

export const CardSkeleton = ({ count }: CardSkeletonProps) => {
  return (
    <RepeatContent count={count ?? 1}>
      <Card className="min-h-[150px]">
        <Skeleton className="w-[90px]" />
        <Skeleton className="mt-2 text-base" />
      </Card>
    </RepeatContent>
  );
};
