import React from 'react';
import cn from 'clsx';
import styles from './OperationDetail.module.css';
import Button from '../../../../shared/ui/Button/Button';

// type OperationDetailProps = Pick<Operation & AddPropertyPrefix<Category, 'category'>, 'amount' | 'categoryName' | 'createdAt' | 'desc' | 'name'>
type OperationDetailProps = Pick<Operation, 'amount' | 'createdAt' | 'desc' | 'name'> & {
  categoryName: Category['name'],
}

const OperationDetail: React.FC<OperationDetailProps> = ({ name, categoryName, createdAt, desc, amount }) => {
  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.mainWrapper)} >
        <div className={cn(styles.createAt)} >{createdAt}</div>
        <div className={cn(styles.total)} style={{ color: amount >= 0 ? 'green' : 'red' }} >
          {amount.toFixed(2)}&nbsp;руб.
        </div>
      </div>
      <span className={cn(styles.name)}>{name}</span>
      <span className={cn(styles.category)}>{categoryName}</span>
      <div className={cn(styles.description)}>{desc || 'undescrible'}</div>
      <div className={cn(styles.editWrapper)} >
        <div className={cn(styles.edit)} >
          <Button className={cn(styles.editButton)} lable='Редактировать' />
        </div>
      </div>
    </div>
  );
};

export default OperationDetail;