'use client';
import { FC, useState, MouseEvent } from 'react';
import { icons } from '@/components/ui/icons';

export type ButtonIcons = 'info' | 'page' | 'check' | 'plus';

export type ButtonState = 'default' | 'hover' | 'focused' | 'active';

export type ButtonProps = {
  name: string;
  icon: ButtonIcons;
};

export const Button: FC<ButtonProps> = ({ name, icon }) => {
  const [state, setState] = useState<ButtonState>('default');

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <button
      onClick={handleClick}
      className=' cursor-pointer h-8 gap-1.5 rounded-md px-[10px] py-1 bg-[#9DA4B226] hover:bg-[#9DA4B259] font-inter font-medium text-sm leading-5 tracking-[-0.015em] text-center flex justify-center items-center'
    >
      {icons[icon]} {name}
    </button>
  );
};
