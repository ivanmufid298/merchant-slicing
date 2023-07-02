'use client';

import { Button } from '@/components/atoms';
import { selectedLoginResponse } from '@/redux-toolkit/app/login/login.slice';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  const router = useRouter();
  const loginResponse = useSelector(selectedLoginResponse);
  const role = loginResponse && loginResponse.role;

  let listNavBar;
  const listNavBarSuper = [
    {
      label: 'Dashboard',
      link: 'dashboard',
    },
    {
      label: 'Products',
      link: 'products',
    },
  ];

  const listNavBarStore = [
    {
      label: 'Dashboard',
      link: 'dashboard',
    },
    {
      label: 'Orders',
      link: 'orders',
    },
    {
      label: 'Products',
      link: 'products',
    },
  ];

  if (role === 'super_store') {
    listNavBar = listNavBarSuper;
  } else if (role == 'store') {
    listNavBar = listNavBarStore;
  }

  return (
    <>
      {listNavBar?.map((data, index) => (
        <div key={index}>
          <Button
            label={data.label}
            variant="unstyled"
            className={
              router.pathname == '/' + data.link
                ? styles.NavBar___active
                : styles.NavBar
            }
            onClick={() => router.push(`${data.link}`)}
          />
        </div>
      ))}
    </>
  );
};

export default NavBar;
