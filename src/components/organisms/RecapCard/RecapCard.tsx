'use client';

import { Recap } from '@/components/molecules';
import { RoleType } from '@/types/login';
import styles from './RecapCard.module.scss';

interface RecapCardProps {
  role?: RoleType | null;
  detail?: string;
  title?: string | React.ReactNode;
  text?: string;
  isTotalRecap?: boolean;
  isDesktop: boolean;
}
const RecapCard: React.FC<RecapCardProps> = ({
  title,
  text,
  detail,
  isTotalRecap,
  isDesktop,
  role,
}) => {
  const listData = [
    {
      icon: '/asset/icons/basket.svg',
      title: 'Received',
      value: '90',
      background: '#F7F7FB',
    },
    {
      icon: '/asset/icons/package-green.svg',
      title: 'Delivered',
      value: '90',
      background: '#E6FFEB',
    },
    {
      icon: '/asset/icons/package-red.svg',
      title: 'Canceled',
      value: '90',
      background: '#FFE8E6',
      isDecrease: true,
    },
  ];

  const balance = {
    icon: '/asset/icons/coins.svg',
    title: 'Total Sales',
    value: 'IDR 8.700.000.000.000',
    background: '#FFE8E6',
    isDecrease: false,
    isTotalRecap: isTotalRecap,
  };

  const wrapper = role !== 'store' ? styles[`RecapCard___wrapperStore`] : '';

  return (
    <div className={styles.RecapCard}>
      <div className={`${styles.RecapCard_wrapper} ${wrapper}`}>
        {title && (
          <div className={styles.RecapCard_headerWrapper}>
            <span className={styles.RecapCard_title}>{title}</span>
            <span className={styles.RecapCard_detail}>{detail}</span>
          </div>
        )}
        {!isDesktop && <span className={styles.RecapCard_address}>{text}</span>}
        <div className={styles.RecapCard_content}>
          <Recap
            listData={listData}
            isTotalRecap={isTotalRecap}
            isDesktop={isDesktop}
            percentage="16 %"
            days="Last 7 days"
            dataBalance={balance}
          />
        </div>
      </div>
      <div className={styles.RecapCard_divider} />
    </div>
  );
};

export default RecapCard;
