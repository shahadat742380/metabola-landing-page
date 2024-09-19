// import core package
import React, { ButtonHTMLAttributes, FC } from 'react';

// import cn
import { cn } from '@/lib/utils';

// Define custom props separately
interface CustomButtonProps {
  content: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

// combining custom props with the standard button attributes
type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const BtnSecondary: FC<ButtonProps> = ({
  content,
  className,
  ...rest // Capture the rest of the button native props
}) => {
  return (
    <button
      {...rest} // Spread the rest of the native button props here
      className={cn(
        'py-[7px] px-[31px] md:py-[8px] md:px-[39px] lg:px-[47px] border border-primary rounded-full text-base md:text-lg lg:text-xl duration-500 hover:bg-primary/20 bg-transparent text-primary font-semibold',
        className,
      )}
    >
      {content}
    </button>
  );
};

export default BtnSecondary;
