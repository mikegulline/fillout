import { StepNavigation } from '@/components/step-nav/step-navigation';
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
    <div className='w-screen h-screen flex justify-start items-end'>
      <div></div>
      <StepNavigation buttons={navButons} />
    </div>
  );
}
