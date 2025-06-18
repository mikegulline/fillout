'use client';
import {
  StepButtonPageWrapper,
  Grab,
  useState,
  ContextMenu,
} from '@/components/step-nav/_index';
import type { StepButtonPageProps, FC } from '@/components/step-nav/_types';

export const StepButtonPage: FC<StepButtonPageProps> = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenMenu(true);
  };

  return (
    <div className='relative'>
      <StepButtonPageWrapper
        handleClick={props.handleClick}
        active={props.active}
        icon={props.icon}
        isNew={props.isNew}
      >
        <span className='whitespace-nowrap'>{props.name}</span>
        <div onContextMenu={handleContextMenu}>
          <Grab active={props.active} dragHandleProps={props.dragHandleProps} />
        </div>
      </StepButtonPageWrapper>
      {openMenu && (
        <div
          onMouseLeave={() => setOpenMenu(false)}
          onClick={() => setOpenMenu(false)}
          className='absolute bottom-0 left-0'
        >
          <ContextMenu />
        </div>
      )}
    </div>
  );
};
