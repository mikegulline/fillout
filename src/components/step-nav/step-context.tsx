'use client';
import { createContext, useContext, useState } from 'react';
import type { StepButtons } from '@/components/step-nav/_types';

export type NavigationContextType = {
  navigation: StepButtons;
  setNavigation: React.Dispatch<React.SetStateAction<StepButtons>>;
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const useNavigation = () => {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within StepNavigation');
  return ctx;
};

type StepNavigationProps = {
  buttons: StepButtons;
  children: React.ReactNode;
};

export const StepProvider = ({ buttons, children }: StepNavigationProps) => {
  const [navigation, setNavigation] = useState<StepButtons>(buttons);

  return (
    <NavigationContext.Provider value={{ navigation, setNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};
