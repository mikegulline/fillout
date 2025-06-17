import { StepNavigation } from '@/components/ui/step-navigation';
import type { Buttons } from '@/components/ui/types';

const navButons: Buttons = [
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
      <StepNavigation buttons={navButons} />
    </div>
  );
}
