import React, { useCallback, useEffect } from 'react';
import cn from 'clsx';
import styles from './CatalogScreen.module.css';
import ProductItem from '../../entities/Product/ui/ProductItem/ProductItem';
import ComponentFetchList from '../../shared/ui/ComponentFetchList/ComponentFetchList';
import { getPartProducts } from '../../features/Products/model/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store/store';
import { setQuantity } from '../../entities/Cart/model/slice';

const CatalogScreen: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const itemsEmpty = useSelector((state: RootState) => state.products.products).length === 0;

  useEffect(() => {
    if (itemsEmpty) dispatch(getPartProducts());
  }, []);

  const items = useSelector((state: RootState) => state.products.products);
  const currentCart = useSelector((state: RootState) => state.cart.currentCartEntry);

  const handleFetchProducts = useCallback(() => {
    dispatch(getPartProducts());
  }, [dispatch]);

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
          photo={item.photos?.length > 0 ? item.photos[0] : undefined}
          count={currentCart.find(({ product }) => product.id === item.id)?.quantity ?? 0}
          onCountChange={(count) => hanleSetQuantity(item, count)}
        />
      </div>
    ),
    [currentCart]
  );

  return (
    <>
      <ComponentFetchList items={items} doFetch={handleFetchProducts} render={renderCallback} />
    </>
  );
};

export default CatalogScreen;
