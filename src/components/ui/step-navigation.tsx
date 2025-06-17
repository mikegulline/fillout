'use client';

import { useState, useCallback } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import { Button, type Buttons, type ButtonProps } from '@/components/ui/button';
import { ButtonLast } from '@/components/ui/button-last';
import { ButtonAdd } from '@/components/ui/button-add';

type StepNavigationProps = {
  buttons: Buttons;
};

export const StepNavigation = ({ buttons }: StepNavigationProps) => {
  const [navigation, setNavigation] = useState(buttons);

  const handleAddStep = (index: number) => {
    const newElement: ButtonProps = {
      name: 'New Step',
      icon: 'info',
    };

    setNavigation((prev) => {
      const before = prev.slice(0, index);
      const after = prev.slice(index);
      return [...before, newElement, ...after];
    });
  };

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;

      if (!destination || source.index === destination.index) return;

      const reordered = Array.from(navigation);
      const [moved] = reordered.splice(source.index, 1);
      reordered.splice(destination.index, 0, moved);
      setNavigation(reordered);
    },
    [navigation]
  );

  return (
    <div className='w-[1140px] h-[72px] p-5'>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='steps' direction='horizontal'>
          {(provided) => (
            <ul
              className='w-[1100px] h-8 justify-start rounded-[12px] flex'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {navigation.map(({ name, icon }, i) => (
                <Draggable
                  key={name + i}
                  draggableId={name + icon + i}
                  index={i}
                >
                  {(dragProvided) => (
                    <li
                      ref={dragProvided.innerRef}
                      {...dragProvided.draggableProps}
                      {...dragProvided.dragHandleProps}
                      className='flex items-center'
                    >
                      {i > 0 && <ButtonAdd onClick={() => handleAddStep(i)} />}
                      <Button name={name} icon={icon} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <li className='flex items-center'>
                {<ButtonAdd onClick={() => handleAddStep(navigation.length)} />}
                <ButtonLast
                  handleClick={() => handleAddStep(navigation.length)}
                  name='Add Page'
                  icon='plus'
                />
              </li>
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
