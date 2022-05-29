import React from 'react';

import styles from './Anchor.module.css';
import cn from 'classnames';

function Anchor(props) {
  const clickHandler = e => {
    e.preventDefault();
    props.onClick(e);
  };

  return (
    <a
      {...props}
      href='anchor'
      className={cn(styles.anchor, props.className)}
      onClick={clickHandler}
    >
      {props.children}
    </a>
  );
}

export default Anchor;
