'use client';
import { useState } from 'react';
import { Button, Buttons, ButtonIcons } from '@/components/ui/button';
import { ButtonAdd } from './button-add';

type StepNavigationProps = {
  buttons: Buttons;
};

export const StepNavigation = ({ buttons }: StepNavigationProps) => {
  const [navigation, setNavigation] = useState(buttons);

  const handleAddStep = (index: number) => {
    setNavigation((prev) => {
      const newElement = {
        name: 'New Step',
        icon: 'info' as ButtonIcons,
      };

      const before = prev.slice(0, index);
      const after = prev.slice(index);

      return [...before, newElement, ...after];
    });
  };

  return (
    <div className='w-[1140px] h-[72px] p-5'>
      <ul className='w-[1100px] h-8 justify-start rounded-[12px] flex'>
        {navigation?.map(({ name, icon }, i) => (
          <li key={name + i} className='flex'>
            {i > 0 && (
              <ButtonAdd
                onClick={() => {
                  handleAddStep(i);
                }}
              />
            )}
            <Button name={name} icon={icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};
