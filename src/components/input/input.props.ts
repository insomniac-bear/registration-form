import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: 'text' | 'email' | 'password'| 'url';
  name: string;
  placeholder?: string;
  required?: boolean;
  message?: string;
  minlength?: number;
  maxlength?: number;
}
