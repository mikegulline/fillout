import Image from 'next/image';
import IconCheck from '@/assets/icon-check.svg';
import IconInfo from '@/assets/icon-info.svg';
import IconPage from '@/assets/icon-page.svg';
import IconPlus from '@/assets/icon-plus.svg';

export const icons = {
  check: <Image src={IconCheck} width={20} height={20} alt='Check Icon' />,
  info: <Image src={IconInfo} width={20} height={20} alt='Info Icon' />,
  page: <Image src={IconPage} width={20} height={20} alt='Page Icon' />,
  plus: <Image src={IconPlus} width={20} height={20} alt='Plus Icon' />,
};
