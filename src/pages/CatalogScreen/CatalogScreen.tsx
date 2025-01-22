import React, { useCallback, useEffect, useRef } from 'react';
import cn from 'clsx';
import styles from './CatalogScreen.module.css';
import ProductItem from '../../entities/Product/ui/ProductItem/ProductItem';
import ComponentFetchList from '../../shared/ui/ComponentFetchList/ComponentFetchList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store/store';
import { Product } from '../../shared/types/serverTypes';
import { getPartProducts } from '../../features/Products/model/thunks';
import { setQuantity } from '../../features/Cart/model/slice';

const CatalogScreen: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const productState = useSelector((state: RootState) => state.products);

  const itemsEmpty = useSelector((state: RootState) => state.products.products).length === 0;
  const firstRender = useRef(true);

  useEffect(() => {
    if (itemsEmpty && firstRender.current) {
      dispatch(getPartProducts({ pagination: { pageSize: 10, pageNumber: 1 } }));
    }
    firstRender.current = false;
  }, []);

  const items = useSelector((state: RootState) => state.products.products);
  const currentCart = useSelector((state: RootState) => state.cart.currentCartEntries);
  const pagination = useSelector((state: RootState) => state.products.pagination);

  const pageTotal = Math.ceil(pagination.total / pagination.pageSize);

  const handleFetchProducts = useCallback(() => {
    if (pagination.pageNumber !== pageTotal && pagination.pageNumber !== 0 && productState.status !== 'loading') {
      dispatch(getPartProducts({ pagination: { pageSize: 10, pageNumber: pagination.pageNumber + 1 } }));
    }
  }, [dispatch, pagination, pageTotal, productState.status]);

  const hanleSetQuantity = useCallback(
    (product: Product, quantity: number) => {
      dispatch(setQuantity({ product, quantity }));
    },
    [dispatch]
  );

  const renderCallback = useCallback(
    (item: Product) => (
      <div className={cn(styles.item)} key={item.id}>
        <ProductItem
          name={item.name}
          desc={item.desc}
          price={item.price}
          photo={item.photo}
          count={currentCart.find(({ product }) => product.id === item.id)?.quantity ?? 0}
          onCountChange={(count) => hanleSetQuantity(item, count)}
        />
      </div>
    ),
    [currentCart]
  );

  return (
    <div className={cn(styles.list)}>
      <ComponentFetchList
        items={items}
        doFetch={handleFetchProducts}
        render={renderCallback}
        needObserve={pagination.pageNumber < pageTotal}
      />
    </div>
  );
};

export default CatalogScreen;
