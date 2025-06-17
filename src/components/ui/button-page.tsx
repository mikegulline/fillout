import { FC } from 'react';
import { ButtonPageWrapper, Grab } from '@/components/ui/index';
import type { ButtonProps } from '@/components/ui/types';

export const ButtonPage: FC<ButtonProps> = ({
  name,
  icon,
  active,
  isNew,
  handleClick,
  dragHandleProps,
}) => {
  return (
    <ButtonPageWrapper
      handleClick={handleClick}
      active={active}
      icon={icon}
      isNew={isNew}
    >
      <span>{name}</span>
      <Grab active={active} dragHandleProps={dragHandleProps} />
    </ButtonPageWrapper>
  );
};
