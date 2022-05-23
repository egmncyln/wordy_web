import { NextPage } from 'next';
import Button from '../components/button/Button';

import Form from '../components/form/Form';
import Input from '../components/input/Input';

const Index: NextPage = () => {
  const strPassword = 'Password';
  const strEmail = 'E-mail';
  const strName = 'Name';
  const strSurname = 'Surname';
  const strPasswordPlaceholder = '•••••••••';
  const inputMb = 4;

  return (
    <Form onSubmit={e => console.log(e)}>
      <Input
        className={`mb-${inputMb}`}
        id={strEmail.toLowerCase()}
        type='text'
        label={strEmail}
        placeholder={strEmail}
      />
      <Input
        className={`mb-${inputMb}`}
        id={strName.toLowerCase()}
        type='text'
        label={strName}
        placeholder={strName}
      />
      <Input
        className={`mb-${inputMb}`}
        id={strSurname.toLowerCase()}
        type='text'
        label={strSurname}
        placeholder={strSurname}
      />
      <Input
        className={`mb-${inputMb}`}
        id={strPassword.toLowerCase()}
        type='password'
        label={strPassword}
        placeholder={strPasswordPlaceholder}
      />
      <Input
        className={`mb-${inputMb + 2}`}
        id={`confirm-${strPassword.toLowerCase()}`}
        type='password'
        label={`Confirm ${strPassword.toLowerCase()}`}
        placeholder={strPasswordPlaceholder}
      />
      <Button type='submit' color='default' className='w-full'>
        Register
      </Button>
    </Form>
  );
};

export default Index;
