import { NextPage } from 'next';
import { useState } from 'react';

import Anchor from '../components/anchor/Anchor';
import Button from '../components/button/Button';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import Small from '../components/small/Small';

enum PageTypes {
  Login,
  Signup,
}

const Index: NextPage = () => {
  const [pageType, setPageType] = useState(PageTypes.Login);

  const strPassword = 'Password';
  const strEmail = 'E-mail';
  const strName = 'Name';
  const strSurname = 'Surname';
  const strPasswordPlaceholder = '•••••••••';

  const strLogin = 'Login';
  const strSignup = 'Signup';

  const isPageTypeSignup = () => pageType === PageTypes.Signup;

  const formSubmitHandler = e => console.log(e);

  const anchorClickHandler = () =>
    isPageTypeSignup() ? setPageType(PageTypes.Login) : setPageType(PageTypes.Signup);

  return (
    <Form onSubmit={formSubmitHandler}>
      <Input id={strEmail.toLowerCase()} type='text' label={strEmail} placeholder={strEmail} />
      {isPageTypeSignup() && (
        <Input
          className='mt-4'
          id={strName.toLowerCase()}
          type='text'
          label={strName}
          placeholder={strName}
        />
      )}
      {isPageTypeSignup() && (
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
      {isPageTypeSignup() && (
        <Input
          className='mt-4'
          id={`confirm-${strPassword.toLowerCase()}`}
          type='password'
          label={`Confirm ${strPassword.toLowerCase()}`}
          placeholder={strPasswordPlaceholder}
        />
      )}
      <Button type='submit' color='default' className='w-full mt-6'>
        {isPageTypeSignup() ? strSignup : strLogin}
      </Button>
      <Small className='block text-center mt-4'>
        {isPageTypeSignup() ? `Do you already have an account? ` : `Do you have not an account? `}
        <Anchor onClick={anchorClickHandler}>{isPageTypeSignup() ? strLogin : strSignup}</Anchor>
      </Small>
    </Form>
  );
};

export default Index;
