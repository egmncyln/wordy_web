import React from 'react';

import styles from './Input.module.css';

function Input(props) {
  const id: string = props.id;
  const type: string = props.type;
  const label: string = props.label;
  const placeholder: string = props.placeholder;
  const className: string = props.className;

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input id={id} type={type} className={styles.input} placeholder={placeholder} />
    </div>
  );
}

export default Input;
