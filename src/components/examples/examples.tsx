import { FC } from 'react';
import { IExamplesProps } from './examples.props';
import examplesStyles from './examples.module.css';

const examplesData= [
  {
    name: 'Анкета компании',
    link: '/#',
    size: '32КБ',
  },
  {
    name: 'Уставной документ',
    link: '/#',
    size: '45КБ',
  },
  {
    name: 'Свидетельство о госрегистрации',
    link: '/#',
    size: '47КБ',
  },
  {
    name: 'Свидетельство о госрегистрации',
    link: '/#',
    size: '47КБ',
  },
  {
    name: 'Уведомление о постановке на учет АО Центр развития Экономики',
    link: '/#',
    size: '67КБ',
  },
  {
    name: 'Уведомление о постановке на учет АО Центр развития Экономики',
    link: '/#',
    size: '47КБ',
  },
  {
    name: 'Свидетельство о госрегистрации',
    link: '/#',
    size: '67КБ',
  },
  {
    name: 'Уведомление о постановке на учет АО Центр развития Экономики',
    link: '/#',
    size: '67КБ',
  },
  {
    name: 'Лицензии и разрешительная документация',
    link: '/#',
    size: '47КБ',
  }
];

const Examples: FC<IExamplesProps> = (): JSX.Element => {
  return (
    <ul className={examplesStyles.container}>
      {
        examplesData.map((example, index) => 
          <li key={index} className={examplesStyles.item}>
            <a
              href={example.link}
              className={examplesStyles.link}
            >{example.name} </a>
            <span>({example.size})</span>
          </li>
        )
      }
    </ul>
  );
};

export default Examples;