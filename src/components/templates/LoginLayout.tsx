import { useState } from 'react';
import LoginForm from '../organisms/Login/LoginForm';

const LoginLayout = () => {
  const [login, setLogin] = useState<boolean>(false);

  return (
    <div className='flex h-screen'>
      <img src='../../../public/more2.png' className='h-screen object-cover shrink-0' alt='' />
      <div className='w-full flex justify-center items-center'>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginLayout;
