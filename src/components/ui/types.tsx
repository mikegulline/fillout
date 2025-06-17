export type ButtonIcons = 'info' | 'page' | 'check' | 'plus';

export type ButtonLastProps = {
  name: string;
  icon: ButtonIcons;
  handleClick: () => void;
};

export type ButtonPageWrapperProps = {
  children: React.ReactNode;
  active?: boolean;
  isNew?: boolean;
  icon: ButtonIcons;
  handleClick?: () => void;
};

export type ButtonProps = {
  name: string;
  icon: ButtonIcons;
  id?: number | string;
  active?: boolean;
  isNew?: boolean;
  dragHandleProps?: React.HTMLAttributes<HTMLElement> | null;
  handleClick?: () => void;
};

export type Buttons = ButtonProps[];

export type StepNavigationProps = {
  buttons: Buttons;
};

export type GrabProps = {
  active?: boolean;
  dragHandleProps?: React.HTMLAttributes<HTMLElement> | null;
};
