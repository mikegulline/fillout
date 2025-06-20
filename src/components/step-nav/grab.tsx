import { icons } from '@/components/step-nav/_index';
import type { GrabProps, FC } from '@/components/step-nav/_types';

export const Grab: FC<GrabProps> = (props) => {
  return (
    <div
      className={`${
        props.active ? 'opacity-100 scale-100 w-4' : 'opacity-0 scale-0 w-0'
      } transition-all duration-200 ease-out`}
    >
      {icons['grab']}
    </div>
  );
};
