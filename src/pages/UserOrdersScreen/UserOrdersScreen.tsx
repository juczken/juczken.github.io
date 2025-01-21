import React, { useEffect, useRef, useState } from 'react';
import cn from 'clsx';
import styles from './UserOrdersScreen.module.css';
import { useTranslation } from 'react-i18next';
import { AppDispatch, RootState } from '../../app/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../entities/User/model/thunks';
import OrderItem from '../../entities/Order/ui/OrderItem/OrderItem';
import { Order } from '../../shared/types/serverTypes';
import OrderProductItem from '../../entities/Product/ui/OrderProductItem/OrderProductItem';

const UserOrdersScreen: React.FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();

  // const categorieState = useSelector((state: RootState) => state.categories);
  const userId = useSelector((state: RootState) => state.user.currentUser?.id);

  const itemsEmpty = useSelector((state: RootState) => state.user.currentOrders.orders).length === 0;
  const firstRender = useRef(true);
  // ????
  useEffect(() => {
    firstRender.current = true;
  }, [userId]);

  useEffect(() => {
    if (itemsEmpty && firstRender.current) {
      //   dispatch(getUserOrders({ sorting: { type: 'ASC', field: 'createdAt' } }));
      dispatch(getUserOrders({ userId: userId }));
      // dispatch(getUserOrders({ pagination: { pageSize: 10, pageNumber: 1 } }));
    }
    firstRender.current = false;
  }, []);

  const items = useSelector((state: RootState) => state.user.currentOrders.orders);
  const currentOrderStatus = useSelector((state: RootState) => state.user.currentOrders.status);
  const currentOrdreError = useSelector((state: RootState) => state.user.currentOrders.error);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const handleClick = (order: Order) => {
    setCurrentOrder((prev) => (prev === order ? null : order));
  };

  if (currentOrderStatus === 'loading') {
    return <div>{t('CartScreen.loading')}</div>;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}></div>
        <div className={styles.content}>
          <div className={styles.orders}>
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item)}
                className={currentOrder === item ? styles.selectedOrder : ''}
              >
                <OrderItem
                  createdAt={item.createdAt}
                  updatedAt={item.updatedAt}
                  status={item.status}
                  totalPrice={item.products.reduce(
                    (total, product) => total + product.product.price * product.quantity,
                    0
                  )}
                />
              </div>
            ))}
          </div>
          <div className={styles.products}>
            {currentOrder &&
              currentOrder.products.map((item) => (
                <div key={item._id}>
                  <OrderProductItem
                    photo={item.product.photo}
                    name={item.product.name}
                    price={item.product.price}
                    quantity={item.quantity}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className={cn(styles.footer)}>
          <div className={styles.error}>
            {currentOrdreError && (currentOrdreError as string[]).map((str) => t(str)).join('\n')}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrdersScreen;
