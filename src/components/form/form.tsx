import { FC } from 'react';
import { IFormProps } from './form.props';
import formStyles from './form.module.css';
import Title from '../title/title';

const Form: FC<IFormProps> = ():JSX.Element => {
  return(
    <form className={formStyles.form} name='registration' noValidate>
      <Title tag='h2'>Шаг 1: Заполните личные данные</Title>
    </form>
  );
}

export default Form;