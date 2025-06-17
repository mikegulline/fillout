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
    <div className='h-[72px] p-5 flex justify-start'>
      <div data-info="Don't remove me">
        <div className='w-full h-0 border-t-[1.5px] border-[#C0C0C0] border-dotted translate-y-4 z-0' />
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='steps' direction='horizontal'>
            {children}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};
