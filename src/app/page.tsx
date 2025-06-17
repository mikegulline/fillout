import { StepNavigation } from '@/components/ui/step-navigation';
import { Buttons } from '@/components/ui/button';

const navButons: Buttons = [
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
  return <StepNavigation buttons={navButons} />;
}
