'use client';
import Image from 'next/image';
import { useNavigation } from '@/components/step-nav/_index';
import Mockup from '../../../public/mockup.png';

export const StepScene = () => {
  const { navigation } = useNavigation();
  const active = navigation.find((button) => button.active);
  return (
    <div className='flex-grow gap-4 flex flex-col justify-center items-center w-full color text-[#677289] text-center'>
      <h1 className='text-5xl font-bold'>Current Page: {active?.name}</h1>
      <p>(Image of mockup to recreate. Final ui at the bottom of the page.)</p>
      <Image src={Mockup} alt='Mockup' width={1224} height={526} />
      <p>
        (Click to activate and show three dots.)
        <br />
        (Click or Righ click on the three dots to open settings menu.)
        <br />
        (Click drag and reorder buttons.)
        <br />
        (Hover between buttons to show add page button.)
      </p>
    </div>
  );
};
