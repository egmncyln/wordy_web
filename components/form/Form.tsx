import React from 'react';

import styles from './Form.module.css';
import cn from 'classnames';

function Form(props) {
  const submitHandler = e => {
    e.preventDefault();
    props.onSubmit(e);
  };

  return (
    <form {...props} className={cn(styles.form, props.className)} onSubmit={submitHandler}>
      {props.children}
    </form>
  );
}

export default Form;
