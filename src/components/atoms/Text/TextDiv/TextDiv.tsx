'use client';

import { FormattedMessage } from 'react-intl';
import { TextProps } from '../Text';
import styles from '../Text.module.scss';

const TextDiv: React.FC<TextProps> = ({
  label,
  children,
  variant,
  className,
  formatted,
}) => {
  return (
    <div
      className={`${
        variant ? styles[`Text___${variant!}`] : 'Text___regular12'
      }${className ? ` ${className}` : ''}`}
    >
      {children ? (
        children
      ) : formatted ? (
        <FormattedMessage id={label} />
      ) : (
        label
      )}
    </div>
  );
};

export default TextDiv;
