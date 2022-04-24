import React from 'react';
import Title from '../title/title';
import { IPluginProps } from './plugin.props';
import logoPath from '../../images/gis.png';
import pluginStyles from './plugin.module.css';

const Plugin: React.FC<IPluginProps> = (): JSX.Element => {
  return (
    <div className={pluginStyles.container}>
      <img
      className={pluginStyles.image}
        src={logoPath}
        alt='Логотип плагина ГИС'
      />
      <Title className={pluginStyles.title} tag='h2'>Плагин ГИС "Независимый регистратор" на защите интересов участников контрактной системы</Title>
      <p className={pluginStyles.description}>Плагин необходим для защиты прав и законных интересов поставщиков и заказчиков в ФАС России, в том числе при обжаловании. Позволяет записывать в режиме реального времени все действия, совершаемые на электронной площадке</p>
      <a className={pluginStyles.link} href='https://zakupki.gov.ru/epz/main/public/download/downloadDocument.html?id=33257'>Скачать плагин гис нр</a>
    </div>
  );
};

export default Plugin;