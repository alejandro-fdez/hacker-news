/* eslint-disable react/no-array-index-key */
import { Fragment } from 'react';
import { RepeatContentProps } from './RepeatContent.types';

export const RepeatContent = ({ children, count }: RepeatContentProps) => {
  if (count <= 1) return <>{children}</>;
  return (
    <>
      {Array(count)
        .fill('')
        .map((_, i) => (
          <Fragment key={i}>{children}</Fragment>
        ))}
    </>
  );
};
