'use client';

import React from 'react';
import styles from './Card.module.scss';

export interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, onClick, className }) => {
  return (
    <div className={`${styles.Card} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
