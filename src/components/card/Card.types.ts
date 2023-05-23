import { ItemFullType } from '@/types/api.types';
import { PropsWithClassName } from '@/types/component.types';

export type CardProps = PropsWithClassName & {
  data: ItemFullType;
};
