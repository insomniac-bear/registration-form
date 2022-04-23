import { FC } from 'react';
import Pagination from '../pagination/pagination';
import { IMainProps } from './main.props';
import mainStyles from './main.module.css';
import Form from '../form/form';

const Main: FC<IMainProps> = (): JSX.Element => {
  return(
    <main className={mainStyles.main}>
      <Pagination />
      <Form />
    </main>
  );
}

export default Main;