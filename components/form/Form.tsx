import React from 'react';

function Form(props) {
  function submitHandler(e) {
    e.preventDefault();
    props.onSubmit(e);
  }

  return <form onSubmit={submitHandler}>{props.children}</form>;
}

export default Form;
