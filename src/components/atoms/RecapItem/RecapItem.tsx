'use client';

import Image from 'next/image';
import styles from './RecapItem.module.scss';

interface RecapItemProps {
  title: string | any;
  value: string;
  background: string;
  icon: string | any;
}

const RecapItem: React.FC<RecapItemProps> = ({
  title,
  value,
  background,
  icon,
}) => {
  return (
    <div className={styles.RecapItem}>
      <div className={styles.RecapItem_wrapperItem}>
        <div
          className={styles.RecapItem_wrapperIcon}
          style={{ background: background }}
        >
          <Image
            alt="Icon"
            height={20}
            width={20}
            src={icon}
            className={styles.RecapItem_icon}
          />
        </div>
        <span className={styles.RecapItem_title}>{title}</span>
      </div>
      <div className={styles.RecapItem_wrapperValue}>
        <span className={styles.RecapItem_value}>{value}</span>
      </div>
    </div>
  );
};

export default RecapItem;
