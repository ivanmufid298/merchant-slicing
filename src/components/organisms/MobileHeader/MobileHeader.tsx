'use client';

import { Accordions } from '@/components/atoms';
import { RoleType } from '@/types/login';
import { FiFilter, FiSearch } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import styles from './MobileHeader.module.scss';

interface MobileHeaderProps {
  hasNotif?: boolean;
  role?: RoleType | null;
  title: string;
  size?: number;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  title,
  role,
  hasNotif,
  size,
}) => {
  size = size ? size : 30;
  return (
    <>
      <div className={styles.MobileHeader}>
        {role === 'store' ? (
          <span className={styles.MobileHeader_store}>{title}</span>
        ) : (
          <div className={styles.MobileHeader_content}>
            <Accordions title={title} body="GD" />
            <span className={styles.MobileHeader_super}>Super Store Admin</span>
          </div>
        )}
        <div className={styles.MobileHeader_iconWrapper}>
          {role == 'store' ? (
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            >
              <HiOutlineMail className={styles.MobileHeader_mail} />
              {hasNotif ? (
                <div
                  style={{ right: `${size - 18}px` }}
                  className="absolute w-2 h-2 top-6 rounded-full bg-dark-coral"
                />
              ) : (
                ''
              )}
            </div>
          ) : (
            <>
              <FiSearch className={styles.MobileHeader_icon} />
              <FiFilter className={styles.MobileHeader_icon} />
            </>
          )}
        </div>
      </div>
      {role === 'super_store' && (
        <div className={styles.MobileHeader_divider} />
      )}
    </>
  );
};

export default MobileHeader;
