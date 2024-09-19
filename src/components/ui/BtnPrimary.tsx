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

const BtnPrimary: FC<ButtonProps> = ({
  content,
  className,
  ...rest // Capture the rest of the button native props
}) => {
  return (
    <button
      {...rest} // Spread the rest of the native button props here
      className={cn(
        'py-2 px-8 md:py-[9px] md:px-10 lg:px-12 rounded-full text-base md:text-lg lg:text-xl duration-500 hover:bg-primary/80 bg-primary text-white font-semibold',
        className,
      )}
    >
      {content}
    </button>
  );
};

export default BtnPrimary;
