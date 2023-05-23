import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { cx } from '@/utils/dom';
import { CardProps } from './Card.types';

export const Card = ({ className, data }: CardProps) => {
  const { title, type, by, time, kids } = data;
  return (
    <div
      className={cx(
        className,
        'w-full flex flex-col max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md border-gray-100 border-solid border'
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 ">{time}</span>
        <div className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 rounded cursor-none">
          {type}
        </div>
      </div>
      <div className="mt-2 mb-auto">
        <a
          href="https://stackdiary.com/"
          className="text-lg font-bold text-gray-700 :text-gray-600  hover:underline"
        >
          {title}
        </a>
      </div>
      <div className="flex items-center justify-between mt-2">
        <a
          href="/"
          className="font-semibold text-gray-400 cursor-pointer text-xs "
        >
          {by}
        </a>
        <a href="/" className=" text-gray-700 relative inline-block">
          <ChatBubbleLeftRightIcon
            className="block h-6 w-6 stroke-blue-400"
            aria-hidden="true"
          />
          <span className="absolute text-xs bottom-0 left-full">
            {kids?.length ?? 0}
          </span>
        </a>
      </div>
    </div>
  );
};
