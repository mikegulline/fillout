import { FC, MouseEvent } from 'react';
import { icons, type ButtonIcons } from '@/components/ui/icons';

export type ButtonState = 'default' | 'hover' | 'focused' | 'active';

export type ButtonProps = {
  name: string;
  icon: ButtonIcons;
  active?: boolean;
};

export type Buttons = ButtonProps[];

export const Button: FC<ButtonProps> = ({ name, icon }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <button
      onClick={handleClick}
      className='
        group flex items-center justify-center gap-1.5 
        h-8 px-[10px] py-1 rounded-md cursor-pointer text-center
        font-inter font-medium text-sm leading-5 tracking-[-0.015em]

        text-[#677289] bg-[#9DA4B226] border-solid border-[0.5px] border-transparent
        hover:bg-[#9DA4B259]
        focus:bg-white focus:text-[#1A1A1A] focus:border-[#2F72E2]
        active:bg-white active:text-[#1A1A1A] active:border-[#E1E1E1]

        focus:shadow-[0px_1px_3px_#0000000A,0px_1px_1px_#00000005,0px_0px_0px_1.5px_#2F72E240]
        transition-colors
  '
    >
      <div className='text-[#8C93A1] group-active:text-[#F59D0E] group-focus:text-[#F59D0E]'>
        {icons[icon]}
      </div>{' '}
      {name}
    </button>
  );
};
