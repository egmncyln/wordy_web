import React from 'react';

import styles from './Form.module.css';
import cn from 'classnames';

function Form(props) {
  const className: string = props.className;

  const submitHandler = e => {
    e.preventDefault();
    props.onSubmit(e);
  };

  return (
    <form className={cn(styles.form, className)} onSubmit={submitHandler}>
      {props.children}
    </form>
  );
}

export default Form;
