import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
  children: ReactNode;
}