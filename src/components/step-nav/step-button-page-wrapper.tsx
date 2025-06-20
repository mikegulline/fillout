import { icons, useState, useEffect } from '@/components/step-nav/_index';
import type {
  StepButtonPageWrapperProps,
  FC,
  MouseEvent,
} from '@/components/step-nav/_types';

export const StepButtonPageWrapper: FC<StepButtonPageWrapperProps> = (
  props
) => {
  const [animate, setAnimate] = useState(props.isNew);

  useEffect(() => {
    if (animate) setAnimate(false);
  }, [animate]);

  const animateClasses = animate
    ? 'opacity-0 scale-0 w-0'
    : 'opacity-100 scale-100 w-full';

  return (
    <div
      role='button'
      tabIndex={0}
      onClick={props.handleClick}
      {...props.dragHandleProps}
      className={`
        ${animateClasses}
        transition-all duration-200 ease-out
        group flex items-center justify-center gap-1.5 
        h-8 px-[10px] py-1 rounded-lg cursor-pointer text-center
        font-inter font-medium text-sm leading-5 tracking-[-0.015em]
        border-solid border-[0.5px] 
        focus:bg-white focus:text-[#1A1A1A] focus:border-[#2F72E2]
        focus:shadow-[0px_1px_3px_#0000000A,0px_1px_1px_#00000005,0px_0px_0px_1.5px_#2F72E240]
        ${
          props.active
            ? 'bg-white text-[#1A1A1A] border-[#E1E1E1] shadow-[0px_1px_3px_0px_#0000000A,0px_1px_1px_0px_#00000005]'
            : 'text-[#677289] bg-[#ebecf0] hover:bg-[#dadce0] border-transparent'
        }
      `}
    >
      <div
        className={`${
          props.active ? 'text-[#F59D0E]' : 'text-[#8C93A1]'
        } group-focus:text-[#F59D0E]`}
      >
        {icons[props.icon]}
      </div>
      {props.children}
    </div>
  );
};
