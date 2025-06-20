'use client';
import {
  StepButtonPage,
  StepButtonLast,
  StepButtonAdd,
  Draggable,
  DropResult,
  useCallback,
  useNavigation,
  StepNavigationWrapper,
} from '@/components/step-nav/_index';
import type { StepButtonPageProps } from '@/components/step-nav/_types';

export const StepNavigation = () => {
  const { navigation, setNavigation } = useNavigation();

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
    const id = Math.floor(Math.random() * 10000) + 100;
    const newElement: StepButtonPageProps = {
      name: 'New Step',
      icon: 'info',
      active: true,
      isNew: true,
      id,
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

      const reordered = Array.from(navigation).map((button) => {
        button.isNew = false;
        return button;
      });
      const [moved] = reordered.splice(source.index, 1);
      reordered.splice(destination.index, 0, moved);
      setNavigation(reordered);
    },
    [navigation, setNavigation]
  );

  return (
    <StepNavigationWrapper handleDragEnd={handleDragEnd}>
      {(provided) => (
        <ul
          className='h-8 justify-start flex relative'
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {navigation.map((button, i) => (
            <Draggable
              key={button.name + button.id}
              draggableId={button.name + button.id}
              index={i}
            >
              {(dragProvided) => (
                <li
                  ref={dragProvided.innerRef}
                  {...dragProvided.draggableProps}
                  className='flex items-center'
                >
                  {i > 0 && <StepButtonAdd onClick={() => handleAddStep(i)} />}
                  <StepButtonPage
                    name={button.name}
                    icon={button.icon}
                    active={button.active}
                    isNew={button.isNew}
                    handleClick={() => handleClick(i)}
                    dragHandleProps={dragProvided.dragHandleProps}
                  />
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
          <li className='flex items-center'>
            {<StepButtonAdd onClick={() => handleAddStep(navigation.length)} />}
            <StepButtonLast
              handleClick={() => handleAddStep(navigation.length)}
              name='Add Page'
              icon='plus'
            />
          </li>
        </ul>
      )}
    </StepNavigationWrapper>
  );
};
