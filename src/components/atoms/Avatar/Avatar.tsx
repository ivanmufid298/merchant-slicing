'use client';

import Image from 'next/image';
import styles from './Avatar.module.scss';

export interface AvatarProps {
  image: string;
  alt: string;
  size?: number;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ image, alt, size, className }) => {
  size = size ? size : 40;

  return (
    <Image
      className={`${styles.Avatar} ${className}`}
      src={image}
      width={size}
      height={size}
      alt={alt}
    />
  );
};

export default Avatar;
