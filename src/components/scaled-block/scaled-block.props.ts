import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IScaledBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  isOpen: boolean;
  children: ReactNode;
  toggleState: () => void;
}