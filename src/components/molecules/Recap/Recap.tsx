'use client';

import { RecapItem } from '@/components/atoms';
import Image from 'next/image';
import styles from './Recap.module.scss';

interface DataListProps {
  icon: string | any;
  title: string | any;
  value: string;
  background: string;
  isDecrease?: boolean;
}

interface BalanceProps {
  icon: string | any;
  title: string | any;
  value: string;
  background: string;
  isTotalRecap?: boolean;
  isDecrease?: boolean;
}

interface RecapProps {
  listData: DataListProps[];
  isTotalRecap?: boolean;
  percentage?: string;
  days?: string;
  isDesktop: boolean;
  dataBalance: BalanceProps;
}

const Recap: React.FC<RecapProps> = ({
  listData,
  dataBalance,
  isTotalRecap,
  percentage,
  days,
  isDesktop,
}) => {
  const detailPercentage = (data: any) => {
    return (
      <div className={styles.Recap_contentRight}>
        <div className={styles.Recap_topWrapper}>
          <Image
            alt="Icon"
            height={22}
            width={22}
            src={
              isDesktop && data
                ? '/asset/icons/arrow-red.svg'
                : '/asset/icons/arrow.svg'
            }
          />
          <span
            className={`${styles.Recap_percentage} ${
              isDesktop && data
                ? styles.Recap___colorDecrease
                : styles.Recap___colorIncrease
            }`}
          >
            {percentage}
          </span>
        </div>
        <span className={styles.Recap_days}>{days}</span>
      </div>
    );
  };

  const recapBackground = isTotalRecap
    ? styles[`Recap___content`]
    : styles[`Recap___store`];

  return (
    <div className={styles.Recap}>
      <div className={styles.Recap_container}>
        {listData.map((data, index) => {
          return (
            <div
              key={index}
              className={`${styles.Recap_wrapper} ${recapBackground}`}
            >
              <RecapItem
                icon={data.icon}
                title={data.title}
                value={data.value}
                background={data.background}
              />

              {isDesktop && detailPercentage(data && data.isDecrease)}
            </div>
          );
        })}
      </div>
      {dataBalance && (
        <div className={`${styles.Recap_balance} ${recapBackground}`}>
          <RecapItem
            icon={dataBalance.icon}
            title={dataBalance.title}
            value={dataBalance.value}
            background={dataBalance.background}
          />
          {detailPercentage(dataBalance.isDecrease)}
        </div>
      )}
    </div>
  );
};

export default Recap;
