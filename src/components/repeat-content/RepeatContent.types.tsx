import { PropsWithChildren } from 'react';

export type CountProp = { count?: number };

export type RepeatContentProps = PropsWithChildren<Required<CountProp>>;
