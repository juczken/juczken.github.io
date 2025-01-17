import React, { useCallback } from 'react';
import ComponentFetchList from '../../shared/ui/ComponentFetchList/ComponentFetchList';
import { CartEntry } from '../../shared/providers/CartProvider/CartProvider';
import CartItem from '../../features/Cart/ui/CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store/store';
import { setQuantity } from '../../entities/Cart/model/slice';

const CatalogScreen: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.currentCartEntry);
  const dispatch: AppDispatch = useDispatch();

  const handleIncrement = useCallback(
    (product: Product, count: number) => {
      dispatch(setQuantity({ product, quantity: count + 1 }));
    },
    [dispatch]
  );

  const handleDecrement = useCallback(
    (product: Product, count: number) => {
      dispatch(setQuantity({ product, quantity: count - 1 }));
    },
    [dispatch]
  );

  const handleInputChange = useCallback(
    (product: Product, count: number) => {
      dispatch(setQuantity({ product, count }));
    },
    [dispatch]
  );

  const renderCallback = useCallback(
    (item: CartEntry) => (
      <div key={item.product.id}>
        <CartItem
          name={item.product.name}
          price={item.product.price}
          photo={item.product.photo}
          count={item.quantity}
          onIncrement={() => handleIncrement(item.product, item.quantity)}
          onDecrement={() => handleDecrement(item.product, item.quantity)}
          onInputChange={(count) => handleInputChange(item.product, count)}
        />
      </div>
    ),
    []
  );

  return (
    <>
      <ComponentFetchList
        items={items}
        doFetch={() => {
          /* do nothing */
        }}
        render={renderCallback}
        needObserve={true}
      />
    </>
  );
};

export default CatalogScreen;
