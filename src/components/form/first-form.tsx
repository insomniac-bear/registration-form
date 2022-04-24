import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { IFormProps } from './first-form.props';
import formStyles from './first-form.module.css';
import { getPersonalData, personalDataAdded } from '../../services/slices/personal-data-slice';

interface IFormValues {
  surname?: string;
  name?: string;
  email?: string;
  position?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  avatar?: string | undefined;
};

const validate = (values: IFormValues) => {
  const errors: IFormValues = {};
  if (!values.surname) {
    errors.surname = 'Поле является обязательным';
  }

  if (!values.name) {
    errors.name = 'Поле является обязательным';
  }

  if (!values.email) {
    errors.email = 'Поле является обязательным';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Некорректный адрес E-mail';
  }

  if (!values.position) {
    errors.position = 'Поле является обязательным';
  }

  if (!values.phone) {
    errors.phone = 'Поле является обязательным';
  } else if (!/[0-9]/i.test(values.phone)) {
    errors.phone = 'Некорректный номер телефона';
  }

  if (!values.password) {
    errors.password = 'Поле является обязательным';
  } else if (values.password.length < 7) {
    errors.password = 'Минимальная длинна пароля 7 символов';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Поле является обязательным';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Пароли не совпадают';
  }

  return errors;
}

const FirstForm: React.FC<IFormProps> = ():JSX.Element => {
  const userData = useSelector(getPersonalData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      ...userData
    },
    validate,
    onSubmit: values => {
      dispatch(personalDataAdded({
        surname: values.surname,
        name: values.name,
        email: values.email,
        position: values.position,
        phone: values.phone,
        password: values.password,
        avatar: values.avatar,
      }));
      navigate('/step-2');
    }
  });

  return(
    <form
      className={formStyles.form}
      name='registration'
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <label htmlFor='surname' className={formStyles.label}>
        Фамилия
      </label>
      <input
        id='surname'
        className={formik.touched.surname && formik.errors.surname ? formStyles.input_error : formStyles.input}
        type="text"
        value={formik.values.surname}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      { formik.touched.surname && formik.errors.surname ? <div className={formStyles.error_message}>{formik.errors.surname}</div> : null }

      <label htmlFor='name' className={formStyles.label}>
        Имя
      </label>
      <input
        id='name'
        className={formik.touched.name && formik.errors.name ? formStyles.input_error : formStyles.input}
        type="text"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      { formik.touched.name && formik.errors.name ? <div className={formStyles.error_message}>{formik.errors.name}</div> : null }

      <label htmlFor='email' className={formStyles.label}>
        E-mail
      </label>
      <input
        id='email'
        className={formik.touched.email && formik.errors.email ? formStyles.input_error : formStyles.input}
        type="email"
        value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      { formik.touched.email && formik.errors.email ? <div className={formStyles.error_message}>{formik.errors.email}</div> : null }

      <label htmlFor='position' className={formStyles.label}>
        Должность
      </label>
      <input
        id='position'
        className={formik.touched.position && formik.errors.position ? formStyles.input_error : formStyles.input}
        type="text"
        value={formik.values.position}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      { formik.touched.position && formik.errors.position ? <div className={formStyles.error_message}>{formik.errors.position}</div> : null }

      <label htmlFor='phone' className={formStyles.label}>
        Телефон
      </label>
      <input
        id='phone'
        className={formik.touched.phone && formik.errors.phone ? formStyles.input_error : formStyles.input}
        type="text"
        value={formik.values.phone}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      { formik.touched.phone && formik.errors.phone ? <div className={formStyles.error_message}>{formik.errors.phone}</div> : null }

      <label htmlFor='avatar' className={formStyles.label_file}>
        Загрузить аватар
      </label>
      <input
        id='avatar'
        className={formStyles.input_file}
        type="file"
        name='avatar'
        value={formik.values.avatar}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />

      <label htmlFor='password' className={formStyles.label}>
        Пароль
      </label>
      <input
        id='password'
        className={formik.touched.password && formik.errors.password ? formStyles.input_error : formStyles.input}
        type="password"
        value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      { formik.touched.password && formik.errors.password ? <div className={formStyles.error_message}>{formik.errors.password}</div> : null }

      <label htmlFor='confirmPassword' className={formStyles.label}>
        Повторите пароль
      </label>
      <input
        id='confirmPassword'
        className={formik.touched.confirmPassword && formik.errors.confirmPassword ? formStyles.input_error : formStyles.input}
        type="password"
        value={formik.values.confirmPassword}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      { formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className={formStyles.error_message}>{formik.errors.confirmPassword}</div> : null }

      <button
        className={formStyles.submit}
        type='submit'
      >
        Сохранить и продолжить
      </button>
    </form>
  );
}

export default FirstForm;