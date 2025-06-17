'use client';
import { icons, useState } from '@/components/step-nav/_index';
import type { GrabProps, FC } from '@/components/step-nav/_types';

export const Grab: FC<GrabProps> = (props) => {
  const [grabing, setGrabbing] = useState(false);
  return (
    <div
      {...props.dragHandleProps}
      onMouseDown={() => setGrabbing(true)}
      onMouseUp={() => setGrabbing(false)}
      className={`${
        props.active ? 'opacity-100 scale-100 w-4' : 'opacity-0 scale-0 w-0'
      } ${
        grabing ? 'cursor-grabbing' : 'cursor-grab'
      } transition-all duration-200 ease-out`}
    >
      {icons['grab']}
    </div>
  );
};
