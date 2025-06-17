'use client';
import {
  StepNavigation,
  StepNavigationProvider,
  StepScene,
} from '@/components/step-nav/_index';
import type { StepButtons } from '@/components/step-nav/_types';

const navButons: StepButtons = [
  {
    id: 1,
    name: 'Info',
    icon: 'info',
    active: true,
  },
  {
    id: 2,
    name: 'Details',
    icon: 'page',
  },
  {
    id: 3,
    name: 'Other',
    icon: 'page',
  },
  {
    id: 4,
    name: 'Ending',
    icon: 'check',
  },
];

export default function Home() {
  return (
    <StepNavigationProvider buttons={navButons}>
      <div className='w-screen h-screen flex flex-col justify-end items-start'>
        <StepScene />
        <StepNavigation />
      </div>
    </StepNavigationProvider>
  );
}
