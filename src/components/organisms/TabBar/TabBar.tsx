'use client';

import { TabBarLink } from '@/components/molecules';
import styles from './TabBar.module.scss';

const TabBar: React.FC = () => {
  const listData = [
    {
      label: 'Dashboard',
      link: 'dashboard',
      imageSrc: '/asset/icons/home.svg',
    },
    {
      label: 'Products',
      link: 'products',
      imageSrc: '/asset/icons/products.svg',
    },
    {
      label: 'Settings',
      link: 'settings',
      imageSrc: '/asset/icons/setting.svg',
    },
  ];

  return (
    <div className={styles.TabBar}>
      {listData.map((data, index) => (
        <div key={index} className={styles.TabBar_wrapper}>
          <TabBarLink
            label={data.label}
            link={data.link}
            imageSrc={data.imageSrc}
          />
        </div>
      ))}
    </div>
  );
};

export default TabBar;
