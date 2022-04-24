import React from 'react';
import Pagination from '../pagination/pagination';
import Asaid from '../asaid/asaid';
import { IMainProps } from './main.props';
import mainStyles from './main.module.css';
import FormSection from '../form-section/form-section';

const Main: React.FC<IMainProps> = (): JSX.Element => {
  return(
    <main className={mainStyles.main}>
      <Pagination />
      <FormSection />
      <Asaid />
    </main>
  );
}

export default Main;