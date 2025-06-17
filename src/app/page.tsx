'use client';
import { useState } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';

const navButons: ButtonProps[] = [
  {
    name: 'Info',
    icon: 'info',
  },
  {
    name: 'Details',
    icon: 'page',
  },
  {
    name: 'Other',
    icon: 'page',
  },
  {
    name: 'Ending',
    icon: 'check',
  },
  {
    name: 'Add Page',
    icon: 'plus',
  },
];

export default function Home() {
  const [navigation, setNavigation] = useState(navButons);
  return (
    <div className='w-[1140px] h-[72px] p-5'>
      <ul className='w-[1100px] h-8 justify-start gap-3 rounded-[12px] flex'>
        {navigation?.map(({ name, icon }: ButtonProps) => (
          <li key={name}>
            <Button name={name} icon={icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}
