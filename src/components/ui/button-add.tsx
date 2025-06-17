import PlusIcon from '@/assets/icon-plus-small.svg';

export const ButtonAdd = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick}>
      <div className='group cursor-pointer flex items-center justify-center w-5 hover:w-14 transition-[width] duration-200 delay-400'>
        <div className='relative h-4 w-full flex items-center justify-center'>
          <div
            className='
      opacity-0 scale-0
      group-hover:opacity-100 group-hover:scale-100
      transition-all duration-500 delay-300
      absolute w-4 h-4 bg-white border-[0.5px] border-[#E1E1E1]
      rounded-full shadow-[0px_1px_3px_#0000000A,0px_1px_1px_#00000005]
      flex justify-center items-center
    '
          >
            <PlusIcon />
          </div>
        </div>
      </div>
    </button>
  );
};
