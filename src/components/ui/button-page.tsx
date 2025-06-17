'use client';
import { FC, MouseEvent, useState } from 'react';
import { icons, type ButtonIcons } from '@/components/ui/icons';

export type ButtonState = 'default' | 'hover' | 'focused' | 'active';

export type ButtonProps = {
  id?: number | string;
  name: string;
  icon: ButtonIcons;
  active?: boolean;
  handleClick?: () => void;
};

export type Buttons = ButtonProps[];

export const ButtonPage: FC<ButtonProps> = ({
  name,
  icon,
  active,
  handleClick,
}) => {
  const [grabing, setGrabbing] = useState(false);
  return (
    <button
      onClick={handleClick}
      className={`
        group flex items-center justify-center gap-1.5 
        h-8 px-[10px] py-1 rounded-md cursor-pointer text-center
        font-inter font-medium text-sm leading-5 tracking-[-0.015em]

        border-solid border-[0.5px] 
        
        focus:bg-white focus:text-[#1A1A1A] focus:border-[#2F72E2]
        
        focus:shadow-[0px_1px_3px_#0000000A,0px_1px_1px_#00000005,0px_0px_0px_1.5px_#2F72E240]
        transition-colors
        ${
          active
            ? 'bg-white text-[#1A1A1A] border-[#E1E1E1]'
            : 'text-[#677289] bg-[#f0f1f4] hover:bg-[#dadce0] border-transparent'
        }
      `}
    >
      <div
        className={`${
          active ? 'text-[#F59D0E]' : 'text-[#8C93A1]'
        } group-focus:text-[#F59D0E]`}
      >
        {icons[icon]}
      </div>{' '}
      {name}
      <div
        onMouseDown={() => setGrabbing(true)}
        onMouseUp={() => setGrabbing(false)}
        className={`${
          active ? 'opacity-100 scale-100 w-4' : 'opacity-0 scale-0 w-0'
        } ${
          grabing ? 'cursor-grabbing' : 'cursor-grab'
        } transition-all duration-200 ease-out`}
      >
        {icons['grab']}
      </div>
    </button>
  );
};
