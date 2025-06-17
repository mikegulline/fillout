'use client';
import { useState, useCallback } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import {
  ButtonPage,
  type Buttons,
  type ButtonProps,
} from '@/components/ui/button-page';
import { ButtonLast } from '@/components/ui/button-last';
import { ButtonAdd } from '@/components/ui/button-add';

type StepNavigationProps = {
  buttons: Buttons;
};

export const StepNavigation = ({ buttons }: StepNavigationProps) => {
  const [navigation, setNavigation] = useState(buttons);

  const handleClick = (index: number) => {
    setNavigation((prev) => {
      const newNavigation = prev.map((button, i) => {
        button.active = i === index;
        return button;
      });
      return newNavigation;
    });
  };

  const handleAddStep = (index: number) => {
    const newElement: ButtonProps = {
      name: 'New Step',
      icon: 'info',
      active: true,
    };

    setNavigation((prev) => {
      const newNavigation = prev.map((button) => {
        button.active = false;
        return button;
      });
      const before = newNavigation.slice(0, index);
      const after = newNavigation.slice(index);
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
    <div className='h-[72px] p-5 flex justify-start'>
      <div>
        <div className='w-full h-0 border-t-[1.5px] border-[#C0C0C0] border-dashed translate-y-4 z-0' />
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='steps' direction='horizontal'>
            {(provided) => (
              <ul
                className='h-8 justify-start flex relative'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {navigation.map(({ id, name, icon, active }, i) => (
                  <Draggable
                    key={name + id}
                    draggableId={name + 'grab' + id}
                    index={i}
                  >
                    {(dragProvided) => (
                      <li
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        className='flex items-center'
                      >
                        {i > 0 && (
                          <ButtonAdd onClick={() => handleAddStep(i)} />
                        )}
                        <ButtonPage
                          name={name}
                          icon={icon}
                          active={active}
                          handleClick={() => handleClick(i)}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <li className='flex items-center'>
                  {
                    <ButtonAdd
                      onClick={() => handleAddStep(navigation.length)}
                    />
                  }
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
    </div>
  );
};
