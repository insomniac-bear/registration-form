import { FC } from 'react';
import { IRequirementsProps } from './requirements.props';
import requirementsStyle from './requirements.module.css';

const Requirements: FC<IRequirementsProps> = (): JSX.Element => {
  return (
    <div className={requirementsStyle.container}>
      <p className={requirementsStyle.text}>Для корректной работы на электронной торговой площадке B2B-Center на вашем рабочем компьютере должно быть установлено следующее программное обеспечение:</p>
      <p className={requirementsStyle.subtitle}>Операционная система:</p>
      <ul className={requirementsStyle.list}>
        <li>Microsoft Windows 7;</li>
        <li>Microsoft Windows 8 и 8.1;</li>
        <li>Microsoft Windows 10;</li>
      </ul>
      <p className={requirementsStyle.subtitle}>Браузер:</p>
      <ul className={requirementsStyle.list}>
        <li>Microsoft Inernet Explorer версии 11;</li>
        <li>Fitrfox версии 52 или выше;</li>
        <li>Opera версии 36 или выше;</li>
        <li>Google Chrome версии 49 или выше;</li>
      </ul>
      <p className={requirementsStyle.text}>Необходимо убедиться, что в браузере включена поддержка файлов Cookie, JavaScript и ActiveX, активна опция показа всплывающих окон, а также отключен режим совместимости; программное обеспечение для работы с Электронной подписью;</p>
      <ul className={requirementsStyle.list}>
        <li>Персональный электронный почтовый ящик; программа архиватор для сжатия и распаковки файлов в форматах zip, rar и 7z(например, 7-Zip);</li>
        <li>Набор программ для работы с документами и таблицами (например, Microsoft Office, OpenOffice, LibreOffice)</li>
      </ul>
    </div>
  );
}

export default Requirements;