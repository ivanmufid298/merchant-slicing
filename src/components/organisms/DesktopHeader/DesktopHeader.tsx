'use client';

import { Accordions, Logo } from '@/components/atoms';
import { NavBar } from '@/components/molecules';
import { RoleType } from '@/types/login';
import Image from 'next/image';
import mail from '../../../../public/asset/icons/mail.svg';

import styles from './DesktopHeader.module.scss';

export type DesktopHeaderProps = {
  role?: RoleType | null;
  title: string;
};

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ role, title }) => {
  return (
    <>
      <div className={styles.DesktopHeader}>
        <div className={styles.DesktopHeader_contentLeft}>
          <Logo name="Logo" />
          {role === 'super_store' ? (
            <Accordions title={title} body="GD" />
          ) : (
            <span className={styles.DesktopHeader_storeName}>{title}</span>
          )}
        </div>
        <div className={styles.DesktopHeader_contentMiddle}>
          <NavBar />
        </div>
        <div className={styles.DesktopHeader_contentRight}>
          {role == 'store' && (
            <div className={styles.DesktopHeader_mailWrapper}>
              <Image
                alt="Icon"
                height={22}
                width={26}
                src={mail.src}
                className={styles.DesktopHeader_mail}
              />
            </div>
          )}
          <Accordions body="GD" />
          <span className={styles.DesktopHeader_name}>TS</span>
        </div>
      </div>
      <div className={styles.DesktopHeader_divider} />
      <span className={styles.DesktopHeader_moment}>Today, 24 Jan 2023</span>
    </>
  );
};

export default DesktopHeader;
