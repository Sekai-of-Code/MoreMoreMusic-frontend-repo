import { Input as UIInput } from '@/components/ui/input';
import type { ChangeEvent } from 'react';

type Props = {
  id: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const Input = ({ id, type, value, onChange, placeholder }: Props) => {
  return (
    <>
      <UIInput id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} required />
    </>
  );
};

export default Input;
