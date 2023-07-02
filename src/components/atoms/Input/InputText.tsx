'use client';

import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';
import styles from './InputText.module.scss';

export interface InputTextProps {
  id: string;
  name: string;
  type: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  classStyle?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  defaultValue?: string;
}

const InputText: React.FC<InputTextProps> = ({
  id,
  name,
  label,
  placeholder,
  type = 'text',
  disabled,
  required,
  classStyle,
  onChange,
  defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue || '');
  const customPadding = label ? `pt-6 px-4 pb-2` : `px-4 py-2`;

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    setValue(e.target.value);
  };

  return (
    <div className={styles.InputText}>
      <input
        type={type}
        id={id}
        name={name}
        disabled={disabled}
        required={required}
        onChange={handlerChange}
        placeholder={label ? '' : placeholder}
        value={value}
        className={`${styles.InputText_input} ${classStyle} ${customPadding}`}
      />
      {label && (
        <label
          className={`${styles.InputText_label} ${
            value && styles.InputText_label___filled
          }`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default InputText;
