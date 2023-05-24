import { Link } from 'react-router-dom';
import { cx } from '@/utils/dom';
import { getFormattedDate } from '@/utils/dates';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import {
  BaseCardProps,
  CardFooterProps,
  CardHeaderProps,
  CardTitleProps,
} from './Card.types';

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
        <div className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 rounded cursor-none">
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
      <a
        href="/"
        className="font-semibold text-gray-400 cursor-pointer text-xs "
      >
        {author}
      </a>
      {typeof numComments === 'number' && (
        <a href="/" className=" text-gray-700 relative inline-block">
          <ChatBubbleLeftRightIcon
            className="block h-6 w-6 stroke-blue-400"
            aria-hidden="true"
          />
          <span className="absolute text-xs bottom-0 left-full">
            {numComments}
          </span>
        </a>
      )}
    </div>
  );
};
