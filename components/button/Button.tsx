import React from 'react';

import styles from './Button.module.css';
import cn from 'classnames';

function Button(props) {
  const type: 'button' | 'submit' | 'reset' = props.type;
  const color: string = props.color;
  const className: string = props.className;

  return (
    <button type={type} className={cn(styles[color], className)}>
      {props.children}
    </button>
  );
}

export default Button;
