'use client';
import { icons, useState, useEffect } from '@/components/step-nav/_index';

export const ContextMenu = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!animate) setAnimate(true);
  }, [animate]);

  return (
    <div
      className={`${
        animate ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-y-10'
      }  transition-all duration-200 ease-ou`}
    >
      <div className='w-64 mb-10 border-[0.5px] border-[#E1E1E1] rounded-[12px] shadow-[0px_1px_3px_0px_#0000000A,0px_1px_1px_0px_#00000005] overflow-hidden bg-white'>
        <header className='h-10 px-3 bg-[#FAFBFC] border-b-[0.5px] border-b-[#E1E1E1] flex items-center text-base font-medium'>
          Settings
        </header>
        <ul className='flex flex-col gap-3.5 p-3 pb-3.5'>
          <li className='text-sm text-[#1A1A1A] cursor-pointer gap-1.5 flex justify-start items-center'>
            {icons['flag']}Set as first page
          </li>
          <li className='text-sm text-[#1A1A1A] cursor-pointer gap-1.5 flex justify-start items-center'>
            {icons['rename']}Rename
          </li>
          <li className='text-sm text-[#1A1A1A] cursor-pointer gap-1.5 flex justify-start items-center'>
            {icons['copy']}Copy
          </li>
          <li className='text-sm text-[#1A1A1A] cursor-pointer gap-1.5 flex justify-start items-center'>
            {icons['duplicate']}Duplicate
          </li>
          <li className='h-0 border-t-[0.5px] border-t-[#E1E1E1]'></li>
          <li className='text-sm text-[#EF494F] cursor-pointer gap-1.5 flex justify-start items-center'>
            {icons['delete']}Delete
          </li>
        </ul>
      </div>
    </div>
  );
};
