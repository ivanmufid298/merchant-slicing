'use client';

import {
  DashboardFooter,
  DashboardStore,
  DesktopHeader,
  MobileHeader,
  RecapCard,
  TabBar,
} from '@/components/organisms';
import { selectedLoginResponse } from '@/redux-toolkit/app/login/login.slice';
import { login } from '@/redux-toolkit/app/login/login.thunk';
import { useAppDispatch } from '@/redux-toolkit/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styles from './styles.module.scss';
export default function Dashboard() {
  const dispatch = useAppDispatch();
  const loginResponse = useSelector(selectedLoginResponse);
  const role = loginResponse && loginResponse.role;
  const [isAskMeOpen, setIsAskMeOpen] = useState(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const askMeBtnHandler = () => {
    setIsAskMeOpen(true);
  };

  useEffect(() => {
    dispatch(
      login({
        email: 'merchant2',
        password: 'qwerty',
      })
    );
  }, [dispatch]);

  return role === 'store' ? (
    <div className={styles.Dashboard}>
      <DashboardStore isDesktop={isDesktop} role={role} />
      <DashboardFooter
        onClick={askMeBtnHandler}
        isDesktop={isDesktop}
        onClose={setIsAskMeOpen}
        isOpen={isAskMeOpen}
      />
    </div>
  ) : (
    <div className={styles.Dashboard}>
      {isDesktop ? (
        <DesktopHeader role={role} title="GD Pharmacy" />
      ) : (
        <MobileHeader role={role} title="GD Pharmacy" />
      )}
      <div className={styles.Dashboard_container}>
        <RecapCard
          title="Total Recap of GD Pharmacy"
          isTotalRecap
          isDesktop={isDesktop}
        />
        {!isDesktop && (
          <div className={styles.Dashboard_text}>
            <span className={styles.Dashboard_showing}>Showing 2 stores</span>
          </div>
        )}
      </div>

      <div className={styles.Dashboard_container}>
        <RecapCard
          title="GD Pharmacy Mega"
          text="Jl. Mega Kuningan Barat Blok E.4 No.1"
          detail="See Detail"
          isDesktop={isDesktop}
        />
      </div>
      <div className={styles.Dashboard_container}>
        <RecapCard
          title="GD Pharmacy Thamrin"
          text="Jl. Mega Kuningan Barat Blok E.4 No.1"
          detail="See Detail"
          isDesktop={isDesktop}
        />
      </div>
      <DashboardFooter
        onClick={askMeBtnHandler}
        isDesktop={isDesktop}
        onClose={setIsAskMeOpen}
        isOpen={isAskMeOpen}
      />
      {!isDesktop && <TabBar />}
      <div></div>
    </div>
  );
}
