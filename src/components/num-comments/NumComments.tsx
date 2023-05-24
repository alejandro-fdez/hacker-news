import { cx } from '@/utils/dom';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { NumCommentsProps } from './NumComments.types';

export const NumComments = ({ className, num }: NumCommentsProps) => {
  return (
    <div className={cx(className, 'text-gray-700 relative inline-block')}>
      <ChatBubbleLeftRightIcon
        className="block h-6 w-6 stroke-blue-400"
        aria-hidden="true"
      />
      <span className="absolute text-xs bottom-0 left-full">{num}</span>
    </div>
  );
};
