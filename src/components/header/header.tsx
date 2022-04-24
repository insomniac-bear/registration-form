import React from 'react';
import { IHeaderProps } from './header.props'
import headerStyles from './header.module.css';

const Header: React.FC<IHeaderProps> = ({ children }):JSX.Element => {
  return (
    <header className={headerStyles.header}>
      { children }
    </header>
  );
}

export default Header;