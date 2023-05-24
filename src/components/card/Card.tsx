import { Link } from 'react-router-dom';
import { cx } from '@/utils/dom';
import { getFormattedDate } from '@/utils/dates';
import {
  BaseCardProps,
  CardFooterProps,
  CardHeaderProps,
  CardTitleProps,
} from './Card.types';
import { NumComments } from '../num-comments/NumComments';

import styles from './card.module.scss';

export const Card = ({ className, children }: BaseCardProps) => {
  return <div className={cx(className, styles.card)}>{children}</div>;
};

export const CardHeader = ({ time, type }: CardHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-light text-gray-600 ">
        {getFormattedDate(time)}
      </span>
      {type && (
        <div className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 rounded cursor-default">
          {type}
        </div>
      )}
    </div>
  );
};

export const CardTitle = ({
  children,
  url,
  isInternalLink,
}: CardTitleProps) => {
  const titleClassname =
    'text-lg font-bold text-gray-700 :text-gray-600  hover:underline';
  if (!url) {
    return (
      <div className="mt-2 mb-auto">
        <p className={titleClassname}>{children}</p>
      </div>
    );
  }
  return (
    <div className="mt-2 mb-auto">
      {isInternalLink ? (
        <Link to={url} className={titleClassname}>
          {children}
        </Link>
      ) : (
        <a
          target="_blank"
          href={url}
          className={titleClassname}
          rel="noreferrer"
        >
          {children}
        </a>
      )}
    </div>
  );
};

export const CardFooter = ({ author, numComments }: CardFooterProps) => {
  return (
    <div className="flex items-center justify-between mt-2">
      <div className="font-semibold text-gray-400 text-xs ">{author}</div>
      {typeof numComments === 'number' && <NumComments num={numComments} />}
    </div>
  );
};
