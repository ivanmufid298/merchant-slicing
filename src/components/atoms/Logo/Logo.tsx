'use client';

import styles from './Logo.module.scss';

export interface LogoProps {
  name?: string;
}

const Logo: React.FC<LogoProps> = ({ name }) => {
  return (
    <div className={styles.Logo}>
      <span className={styles.Logo_text}>{name}</span>
    </div>
  );
};

export default Logo;
