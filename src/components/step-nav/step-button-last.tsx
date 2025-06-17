import { icons } from '@/components/step-nav/_index';
import type { StepButtonLastProps, FC } from '@/components/step-nav/_types';

export const StepButtonLast: FC<StepButtonLastProps> = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className='
        group flex items-center justify-center gap-1.5 
        h-8 px-[10px] py-1 rounded-md cursor-pointer text-center
        font-inter font-medium text-sm leading-5 tracking-[-0.015em]
        bg-white text-[#1A1A1A] border-[#E1E1E1] border-solid border-[0.5px]
      '
    >
      <div className='text-[#1A1A1A]'>{icons[props.icon]}</div>
      <span className='whitespace-nowrap'>{props.name}</span>
    </button>
  );
};
