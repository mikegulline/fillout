'use client';
import { createContext, useContext, useState } from 'react';
import type {
  StepButtons,
  StepNavigationContextType,
  StepNavigationProps,
} from '@/components/step-nav/_types';

const StepNavigationContext = createContext<
  StepNavigationContextType | undefined
>(undefined);

export const useNavigation = () => {
  const ctx = useContext(StepNavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within StepNavigation');
  return ctx;
};

export const StepNavigationProvider = ({
  buttons,
  children,
}: StepNavigationProps) => {
  const [navigation, setNavigation] = useState<StepButtons>(buttons);

  return (
    <StepNavigationContext.Provider value={{ navigation, setNavigation }}>
      {children}
    </StepNavigationContext.Provider>
  );
};
