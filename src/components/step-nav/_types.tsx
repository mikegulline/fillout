export type { FC, ReactNode } from 'react';
export type StepButtonIcons = 'info' | 'page' | 'check' | 'plus';

export type StepButtonLastProps = {
  name: string;
  icon: StepButtonIcons;
  handleClick: () => void;
};

export type StepButtonPageWrapperProps = {
  children: React.ReactNode;
  active?: boolean;
  isNew?: boolean;
  icon: StepButtonIcons;
  handleClick?: () => void;
};

export type StepButtonPageProps = {
  name: string;
  icon: StepButtonIcons;
  id?: number | string;
  active?: boolean;
  isNew?: boolean;
  dragHandleProps?: React.HTMLAttributes<HTMLElement> | null;
  handleClick?: () => void;
};

export type StepButtons = StepButtonPageProps[];

export type GrabProps = {
  active?: boolean;
  dragHandleProps?: React.HTMLAttributes<HTMLElement> | null;
};

export type StepNavigationContextType = {
  navigation: StepButtons;
  setNavigation: React.Dispatch<React.SetStateAction<StepButtons>>;
};

export type StepNavigationProps = {
  buttons: StepButtons;
  children: React.ReactNode;
};
