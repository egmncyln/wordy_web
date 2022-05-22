import { NextPage } from 'next';

import Form from '../components/form/Form';
import Input from '../components/input/Input';

const Index: NextPage = () => {
  return (
    <Form onSubmit={e => console.log(e)}>
      <Input id='id' type='text' label='Label' placeholder='Placeholder'></Input>
      <button type='submit'>Submit</button>
    </Form>
  );
};

export default Index;
