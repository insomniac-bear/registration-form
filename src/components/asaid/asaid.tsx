import { FC } from 'react';
import Reference from '../../reference/reference';
import { IAsaidProps } from './asaid.props';
import asaidStyles from './asaid.module.css';

const Asaid: FC<IAsaidProps> = (): JSX.Element => {
  return (
    <div className={asaidStyles.container}>
      <Reference />
    </div>
  );
};

export default Asaid;
