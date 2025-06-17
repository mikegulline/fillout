'use client';
import { useNavigation } from '@/components/step-nav/_index';

export const StepScene = () => {
  const { navigation } = useNavigation();
  const active = navigation.find((button) => button.active);
  return (
    <div className='flex-grow flex justify-center items-center w-full text-5xl font-bold color text-[#677289]'>
      {active?.name}
    </div>
  );
};
