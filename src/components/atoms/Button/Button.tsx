import { Button as UIButton } from '@/components/ui/button';

type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null | undefined;
  className?: string;
  text: string;
};

const Button = ({ type, variant, className, text }: Props) => {
  return (
    <>
      <UIButton type={type} variant={variant} className={className}>
        {text}
      </UIButton>
    </>
  );
};

export default Button;
