'use client';

import { FormattedMessage } from 'react-intl';
import { TextProps } from '../Text';
import styles from '../Text.module.scss';

const TextLabel: React.FC<TextProps> = ({
  label,
  children,
  variant,
  className,
  formatted,
}) => {
  return (
    <label
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
    </label>
  );
};

export default TextLabel;
