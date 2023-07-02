'use client';

import { IconType } from 'react-icons';
import styles from './Button.module.scss';

export interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?:
    | 'solid'
    | 'light'
    | 'outline'
    | 'error'
    | 'disabled'
    | 'unstyled'
    | 'small';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  variant = 'solid',
  onClick,
  disabled,
  className = '',
  fullWidth,
  icon: Icon,
}) => {
  className = fullWidth ? `w-full ${className}` : className;

  const buttonVariant = disabled
    ? styles[`Button___disabled`]
    : styles[`Button___${variant}`];
  const iconSize = variant == 'small' ? 18 : 16;

  return (
    <button
      className={`${className} ${styles.Button} ${buttonVariant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={iconSize} className="mr-2" />}
      {children ? children : label}
    </button>
  );
};

export default Button;
