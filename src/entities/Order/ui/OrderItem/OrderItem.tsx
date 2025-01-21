import React from 'react';
import styles from './OrderItem.module.css';
import { useTranslation } from 'react-i18next';

type OrderItemProps = {
  createdAt: Date;
  updatedAt: Date;
  status: string;
  totalPrice: number;
};

const OrderItem: React.FC<OrderItemProps> = ({ createdAt, updatedAt, status, totalPrice }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.orderItem}>
      <div className={styles.row}>
        <span className={styles.label}>{t('OrderItem.createdAt', { createdAt })}</span>
        <span className={styles.value}>{t('OrderItem.totalPrice', { totalPrice })}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>{t('OrderItem.status', { status })}</span>
        <span className={styles.value}>{t('OrderItem.updatedAt', { updatedAt })}</span>
      </div>
    </div>
  );
};

export default OrderItem;
