import React from 'react';
import { ITitleProps } from './title.props';
import titleStyles from './title.module.css';

const Title: React.FC<ITitleProps> = ({ className, tag, children }): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={`${titleStyles.title} ${className}`}>{children}</h1>;
    case 'h2':
      return <h2 className={`${titleStyles.title} ${className}`}>{children}</h2>;
    case 'h3':
      return <h3 className={`${titleStyles.title} ${className}`}>{children}</h3>;
    default:
      return <h4 className={`${titleStyles.title} ${className}`}>{children}</h4>
    }
}

export default Title;
