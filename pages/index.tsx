import { NextPage } from 'next';
import React from 'react';
import Form from '../components/form/Form';
import Input from '../components/input/Input';

const Index: NextPage = () => {
  return (
    <Form onSubmit={e => console.log(e)}>
      <Input></Input>
      <button type='submit'>Submit</button>
    </Form>
  );
};

export default Index;
