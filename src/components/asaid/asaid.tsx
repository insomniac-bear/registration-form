import React from 'react';
import Reference from '../reference/reference';
import Plugin from '../plugin/plugin';
import { IAsaidProps } from './asaid.props';
import asaidStyles from './asaid.module.css';

const Asaid: React.FC<IAsaidProps> = (): JSX.Element => {
  return (
    <div className={asaidStyles.container}>
      <Reference />
      <Plugin />
    </div>
  );
};

export default Asaid;
