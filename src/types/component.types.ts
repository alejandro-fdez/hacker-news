import { PropsWithChildren } from 'react';

export type PropsWithClassName = {
  className?: string;
  isLoading?: boolean;
};
export type WithBasicProps = PropsWithChildren & PropsWithClassName;
