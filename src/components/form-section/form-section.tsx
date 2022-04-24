import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FirstForm from '../form/first-form';
import Title from '../title/title';
import { IFormSectionProps } from './form-section.props';
import formSectionStyles from './form-section.module.css';

const FormSection: React.FC<IFormSectionProps> = () => {
  return (
    <section className={formSectionStyles.container}>
      <Title tag='h2'>Шаг 1: Заполните личные данные</Title>
      <Routes>
        <Route path='/' element={<FirstForm />} />
        <Route path='/step-2' />
        <Route path='/step-3' />
      </Routes>
    </section>
  )
}

export default FormSection;