import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Button from '../../atoms/Button/Button';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import Input from '@/components/atoms/Input/Input';

export type Account = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [account, setAccount] = useState<Account>({ email: '', password: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setAccount(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = account;
    const result = { email: email, password: password };
  };

  return (
    <>
      <Card className='w-full max-w-sm '>
        <CardHeader className='text-center'>
          <CardTitle>Welcome to MORE MORE MUSIC!</CardTitle>
        </CardHeader>
        <div className='w-7/10 m-auto flex justify-between items-center'>
          <CardDescription>Dont`t have an account yet?</CardDescription>
          <CardAction>
            <Button variant={'link'} text={'Sign Up'} />
          </CardAction>
        </div>
        <CardContent>
          <form>
            <div className='flex flex-col gap-2'>
              <div className='grid gap-2'>
                <Input id={'email'} type={'text'} value={account.email} onChange={onChange} placeholder={'email'} />
              </div>
              <div className='grid gap-2'>
                <Input
                  id={'password'}
                  type={'text'}
                  value={account.password}
                  onChange={onChange}
                  placeholder={'password'}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex-col gap-2'>
          <a href='/' className='w-full'>
            <Button type={'submit'} text={'Login'} className={'w-full bg-[#88DD44] font-bold hover:bg-[#6fda18]'} />
          </a>
          <Button variant={'outline'} text={'Login with Google'} className={'w-full'} />
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginForm;
