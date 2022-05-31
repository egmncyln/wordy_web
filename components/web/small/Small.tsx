import React from 'react';

import styles from './Small.module.css';
import cn from 'classnames';

function Small(props) {
  return (
    <small {...props} className={cn(styles.small, props.className)}>
      {props.children}
    </small>
  );
}

export default Small;
