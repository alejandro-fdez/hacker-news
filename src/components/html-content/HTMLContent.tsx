import { cx } from '@/utils/dom';
import { HTMLContentProps } from './HTMLContent.types';

import styles from './html-content.module.css';

export const HTMLContent = ({ className, children }: HTMLContentProps) => {
  return (
    <div
      className={cx(className, styles.content)}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
