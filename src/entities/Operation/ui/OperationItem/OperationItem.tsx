import React from 'react';
import cn from 'clsx';
import styles from './OperationItem.module.css';
import cutStringHelper from '../../../../shared/lib/cutStringHelper';

type OperationItemProps = Pick<Operation&AddPropertyPrefix<Category,'category'>,'amount'|'categoryName'|'desc'|'name'>

const OperationItem: React.FC<OperationItemProps> = ({ name, categoryName, desc, amount }) => {
  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.infoWrapper)}>
        <span className={cn(styles.name)}>{name}</span>
        <span className={cn(styles.category)}>{categoryName}</span>
      </div>
      <div className={cn(styles.description)}>{cutStringHelper(desc, 100)}</div>
      <div className={cn(styles.total)} style={{ color: amount >= 0 ? 'green' : 'red' }}>
        {amount.toFixed(2)}&nbsp;руб.
      </div>
    </div>
  );
};

export default OperationItem;
