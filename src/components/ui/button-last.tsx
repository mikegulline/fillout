import { FC } from 'react';
import { icons } from '@/components/ui/index';
import type { ButtonLastProps } from '@/components/ui/types';

export const ButtonLast: FC<ButtonLastProps> = ({
  name,
  icon,
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className='
        group flex items-center justify-center gap-1.5 
        h-8 px-[10px] py-1 rounded-md cursor-pointer text-center
        font-inter font-medium text-sm leading-5 tracking-[-0.015em]
        bg-white text-[#1A1A1A] border-[#E1E1E1] border-solid border-[0.5px]
  '
    >
      <div className='text-[#1A1A1A]'>{icons[icon]}</div> {name}
    </button>
  );
};
