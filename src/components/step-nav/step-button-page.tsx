import { StepButtonPageWrapper, Grab } from '@/components/step-nav/_index';
import type { StepButtonPageProps, FC } from '@/components/step-nav/_types';

export const StepButtonPage: FC<StepButtonPageProps> = (props) => {
  return (
    <StepButtonPageWrapper
      handleClick={props.handleClick}
      active={props.active}
      icon={props.icon}
      isNew={props.isNew}
    >
      <span className='whitespace-nowrap'>{props.name}</span>
      <Grab active={props.active} dragHandleProps={props.dragHandleProps} />
    </StepButtonPageWrapper>
  );
};
