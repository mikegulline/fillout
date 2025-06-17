'use client';
import { useState } from 'react';
import { Button, Buttons } from '@/components/ui/button';

type StepNavigationProps = {
  buttons: Buttons;
};

export const StepNavigation = ({ buttons }: StepNavigationProps) => {
  const [navigation, setNavigation] = useState(buttons);
  return (
    <div className='w-[1140px] h-[72px] p-5'>
      <ul className='w-[1100px] h-8 justify-start gap-3 rounded-[12px] flex'>
        {navigation?.map(({ name, icon }) => (
          <li key={name}>
            <Button name={name} icon={icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};
