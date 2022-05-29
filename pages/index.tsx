import { NextPage } from 'next';
import { useState } from 'react';

import Anchor from '../components/anchor/Anchor';
import Button from '../components/button/Button';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import Small from '../components/small/Small';

enum PageTypes {
  Login,
  Register,
}

const Index: NextPage = () => {
  const [pageType, setPageType] = useState(PageTypes.Login);

  const strPassword = 'Password';
  const strEmail = 'E-mail';
  const strName = 'Name';
  const strSurname = 'Surname';
  const strPasswordPlaceholder = '•••••••••';

  const isPageTypeRegister = () => pageType === PageTypes.Register;

  const clickAnchorRegisterHandler = e => {
    e.preventDefault();
    setPageType(PageTypes.Register);
  };

  const clickAnchorLoginHandler = e => {
    e.preventDefault();
    setPageType(PageTypes.Login);
  };

  return (
    <Form onSubmit={e => console.log(e)}>
      <Input
        className='mt-4'
        id={strEmail.toLowerCase()}
        type='text'
        label={strEmail}
        placeholder={strEmail}
      />
      {isPageTypeRegister() && (
        <Input
          className='mt-4'
          id={strName.toLowerCase()}
          type='text'
          label={strName}
          placeholder={strName}
        />
      )}
      {isPageTypeRegister() && (
        <Input
          className='mt-4'
          id={strSurname.toLowerCase()}
          type='text'
          label={strSurname}
          placeholder={strSurname}
        />
      )}
      <Input
        className='mt-4'
        id={strPassword.toLowerCase()}
        type='password'
        label={strPassword}
        placeholder={strPasswordPlaceholder}
      />
      {isPageTypeRegister() && (
        <Input
          className='mt-4'
          id={`confirm-${strPassword.toLowerCase()}`}
          type='password'
          label={`Confirm ${strPassword.toLowerCase()}`}
          placeholder={strPasswordPlaceholder}
        />
      )}
      <Button type='submit' color='default' className='w-full mt-6'>
        {isPageTypeRegister() ? 'Register' : 'Login'}
      </Button>
      <Small className='block text-center mt-4'>
        {isPageTypeRegister() ? `Do you already have an account? ` : `Do you have not an account? `}
        {isPageTypeRegister() ? (
          <Anchor onClick={clickAnchorLoginHandler}>Login</Anchor>
        ) : (
          <Anchor onClick={clickAnchorRegisterHandler}>Register</Anchor>
        )}
      </Small>
    </Form>
  );
};

export default Index;
