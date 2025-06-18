import PlusIcon from '@/assets/icon-plus-small.svg';
import { useState, useEffect } from '@/components/step-nav/_index';

export const StepButtonAdd = ({ onClick }: { onClick: () => void }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) setClicked(false);
  }, [clicked]);

  const handleClick = () => {
    setClicked(true);
    onClick();
  };
  return (
    <div
      className={`${
        clicked ? '' : ' hover:w-14 transition-[width] duration-200 delay-400'
      } group flex items-center justify-center h-full w-5`}
    >
      <button
        onClick={handleClick}
        className='relative h-4 w-full flex items-center justify-center cursor-pointer'
      >
        <div
          className={`
            ${
              clicked
                ? ''
                : ' group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-300'
            }
            opacity-0 scale-0
            absolute w-4 h-4 bg-white border-[0.5px] border-[#E1E1E1]
            rounded-full shadow-[0px_1px_3px_#0000000A,0px_1px_1px_#00000005]
            flex justify-center items-center
          `}
        >
          <PlusIcon />
        </div>
      </button>
    </div>
  );
};
