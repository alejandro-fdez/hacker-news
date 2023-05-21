import { PropsWithChildren } from 'react';

export type PropsWithClassName = {
  className?: string;
};
export type WithBasicProps = PropsWithChildren & PropsWithClassName;
