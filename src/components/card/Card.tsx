import { cx } from '@/utils/dom';
import { CardProps } from './Card.types';

export const Card = ({ className, data }: CardProps) => {
  const { title, type, by, time, kids } = data;
  return (
    <div
      className={cx(
        className,
        'w-full max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md border-gray-100 border-solid border'
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 ">{time}</span>
        <a
          href="/"
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
        >
          {type}
        </a>
      </div>
      <div className="mt-2">
        <a
          href="https://stackdiary.com/"
          className="text-2xl font-bold text-gray-700 :text-gray-600  hover:underline"
        >
          {title}
        </a>
      </div>
      <div className="flex items-center justify-between mt-2 mx-6">
        <a href="/" className="text-blue-500 text-xs -ml-3 ">
          Show More
        </a>
        <a href="/" className="flex text-gray-700">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-blue-500"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          {kids?.length ?? 0}
        </a>
      </div>
      <div className="flex items-center">
        <a href="/" className="font-bold text-gray-700 cursor-pointer ">
          {by}
        </a>
      </div>
    </div>
  );
};
