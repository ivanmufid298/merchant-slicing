'use client';

import { DesktopHeader, MobileHeader, RecapCard } from '@/components/organisms';
import { RoleType } from '@/types/login';
import styles from './DashboardStore.module.scss';

interface DashboardStoreProps {
  role: RoleType | null;
  isDesktop: boolean;
}

const DashboardStore: React.FC<DashboardStoreProps> = ({ isDesktop, role }) => {
  return (
    <div className={styles.DashboardStore}>
      {isDesktop ? (
        <DesktopHeader role={role} title="GD Pharmacy Mega" />
      ) : (
        <MobileHeader role={role} title="Hi, GD Pharmacy" hasNotif size={40} />
      )}
      <div>
        <RecapCard isTotalRecap isDesktop={isDesktop} role={role} />
      </div>
    </div>
  );
};

export default DashboardStore;
