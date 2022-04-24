import React from 'react';
import { IInputProps } from './input.props';
import styles from './Input.module.css';

export const Input: React.FC<IInputProps> = ({
  className = '',
  type = 'text',
  name,
  placeholder,
  required = false,
  message,
  minlength,
  maxlength,
  pattern,
  onChange,
  value,
}): JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isInputValid, setInputValid] = React.useState<boolean>(true);

  // const changeInputValueHandler = () => {
  //   const inputValidity = inputRef.current ? inputRef.current?.validity.valid : false;
  //   setInputValid(inputValidity);
  // };

  return (
    <label htmlFor={name} className={styles.input__wrapper}>
      <input
        pattern={pattern}
        id={name}
        // onChange={onChange || changeInputValueHandler}
        ref={inputRef}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        minLength={minlength}
        maxLength={maxlength}
        value={value}
        className={`
          ${styles.input}
          ${!isInputValid ? styles.input_type_invalid : ''}
          ${className}
        `}
      />
      {isInputValid ? (
        <p className={`${styles.input__message} ${styles.input__message_type_error}`}>
          {message}
        </p>
      )
        : (
          <p className={`${styles.input__message} ${styles.input__message_type_error}`}>
            {inputRef.current?.validationMessage}
          </p>
        )}
    </label>
  );
};
