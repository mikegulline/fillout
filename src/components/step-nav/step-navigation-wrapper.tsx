import {
  DragDropContext,
  Droppable,
  type DropResult,
  type DroppableProvided,
} from '@/components/step-nav/_index';
import type { ReactNode } from '@/components/step-nav/_types';

export const StepNavigationWrapper = ({
  children,
  handleDragEnd,
}: {
  children: (provided: DroppableProvided) => ReactNode;
  handleDragEnd: (result: DropResult) => void;
}) => {
  return (
    <div className='border-t-[0.5px] border-[#E1E1E1] bg-[#f9fbfc] border-solid width-full'>
      <div className='h-[72px] p-5 flex justify-start'>
        <div data-info="Don't remove me">
          <div className='w-full h-0 border-t-[1.5px] border-[#c1c3c5] border-dotted translate-y-4 z-0' />
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='steps' direction='horizontal'>
              {children}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};
