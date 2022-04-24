import { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IFormProps } from './form.props';
import formStyles from './form.module.css';
import Title from '../title/title';

const Form: FC<IFormProps> = ():JSX.Element => {
  return(
    <form className={formStyles.form} name='registration' noValidate>
      <Title tag='h2'>Шаг 1: Заполните личные данные</Title>
      <Routes>
        <Route path='/' />
        <Route path='/step-2' />
        <Route path='/step-3' />
      </Routes>
      <Link to={`/step-2`}>Сохранить и продолжить</Link>
    </form>
  );
}

export default Form;