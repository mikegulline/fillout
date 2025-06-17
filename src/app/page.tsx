import { StepNavigation } from '@/components/ui/step-navigation';
import { Buttons } from '@/components/ui/button';

const navButons: Buttons = [
  {
    name: 'Info',
    icon: 'info',
    active: true,
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
];

export default function Home() {
  return <StepNavigation buttons={navButons} />;
}
