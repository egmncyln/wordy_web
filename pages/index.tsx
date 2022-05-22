import { NextPage } from 'next';
import Button from '../components/button/Button';

import Form from '../components/form/Form';
import Input from '../components/input/Input';

const Index: NextPage = () => {
  return (
    <Form onSubmit={e => console.log(e)}>
      <Input className='mb-4' id='email' type='text' label='E-mail' placeholder='E-mail'></Input>
      <Input className='mb-4' id='name' type='text' label='Name' placeholder='Name'></Input>
      <Input
        className='mb-4'
        id='surname'
        type='text'
        label='Surname'
        placeholder='Surname'
      ></Input>
      <Input
        className='mb-4'
        id='password'
        type='password'
        label='Password'
        placeholder='•••••••••'
      ></Input>
      <Input
        className='mb-6'
        id='confirm-password'
        type='password'
        label='Confirm password'
        placeholder='•••••••••'
      ></Input>
      <Button type='submit' color='default' className='w-full'>
        Register
      </Button>
    </Form>
  );
};

export default Index;
