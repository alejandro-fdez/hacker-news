import { PropsWithChildren } from 'react';
import { ArticleType, AskType, ItemFullType, JobType } from '@/types/api.types';
import { WithBasicProps } from '@/types/component.types';
import { Ignore } from '@/types/objects';

export type BaseCardProps = WithBasicProps;

export type CardHeaderProps = Ignore<
  Pick<ItemFullType, 'time' | 'type'>,
  'type'
>;

export type CardTitleProps = PropsWithChildren &
  Partial<Pick<ItemFullType, 'url'>> & {
    isInternalLink?: boolean;
  };

export type CardFooterProps = {
  author: ItemFullType['by'];
  numComments?: number;
};

export type CardArticleProps = BaseCardProps & {
  data: ArticleType;
};

export type CardJobProps = BaseCardProps & {
  data: JobType;
};

export type CardAskProps = BaseCardProps & {
  data: AskType;
};
