import { FC } from 'react';
import { IPaginationProps } from './pagination.props';
import paginationStyles from './pagination.module.css';

const Pagination: FC<IPaginationProps> = ():JSX.Element => {

  return (
    <ul className={paginationStyles.container}>
      <li className={paginationStyles.item_type_active}></li>
      <li className={paginationStyles.item}></li>
      <li className={paginationStyles.item}></li>
    </ul>
  );
}

export default Pagination;