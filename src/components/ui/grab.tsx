import { useState } from 'react';
import { icons } from '@/components/ui/index';
import type { GrabProps } from '@/components/ui/types';

export const Grab = ({ active, dragHandleProps }: GrabProps) => {
  const [grabing, setGrabbing] = useState(false);
  return (
    <div
      onMouseDown={() => setGrabbing(true)}
      onMouseUp={() => setGrabbing(false)}
      {...dragHandleProps}
      className={`${
        active ? 'opacity-100 scale-100 w-4' : 'opacity-0 scale-0 w-0'
      } ${
        grabing ? 'cursor-grabbing' : 'cursor-grab'
      } transition-all duration-200 ease-out`}
    >
      {icons['grab']}
    </div>
  );
};
