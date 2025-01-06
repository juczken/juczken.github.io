import React, { useCallback } from 'react';
import ComponentFetchList from '../../shared/ui/ComponentFetchList/ComponentFetchList';
import useCarts from '../../shared/contexts/CartContext/CartContext';
import { CartEntry } from '../../shared/providers/CartProvider/CartProvider';
import CartItem from '../../features/Cart/ui/CartItem/CartItem';

const CatalogScreen: React.FC = () => {
  const {
    currentCart: items,
    addToCart: handleIncrement,
    removeFromCart: handleDecrement,
    setQuantity: handleInputChange,
  } = useCarts();

  const renderCallback = useCallback(
    (item: CartEntry) => (
      <div key={item.product.id}>
        <CartItem
          name={item.product.name}
          price={item.product.price}
          photo={item.product.photos?.length > 0 ? item.product.photos[0] : undefined}
          count={item.quantity}
          onIncrement={() => handleIncrement(item.product)}
          onDecrement={() => handleDecrement(item.product.id)}
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
      />
    </>
  );
};

export default CatalogScreen;
