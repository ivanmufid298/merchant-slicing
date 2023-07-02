'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './TabBarLink.module.scss';

export type TabBarLinkProps = {
  label: string;
  link: string;
  imageSrc: string;
};

export const TabBarLink: React.FC<TabBarLinkProps> = ({
  label,
  link,
  imageSrc,
}) => {
  const router = useRouter();
  const active =
    router.pathname == '/' + link ? styles.TabBarLink___active : '';
  const labelActive =
    router.pathname == '/' + link ? styles.TabBarLink___labelActive : '';

  return (
    <Link
      href={`http://localhost:3000/${link}`}
      className={`${styles.TabBarLink} ${active}`}
    >
      <Image
        alt="Icon"
        height={24}
        width={24}
        src={imageSrc}
        className={styles.TabBarLink_icon}
      />
      <span className={`${styles.TabBarLink_label} ${labelActive}`}>
        {label}
      </span>
    </Link>
  );
};

export default TabBarLink;
