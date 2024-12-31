import React, { useCallback } from 'react';
import cn from 'clsx';
import styles from './CatalogScreen.module.css';
import ProductItem from '../../entities/Product/ui/ProductItem/ProductItem';
import ComponentFetchList from '../../shared/ui/ComponentFetchList/ComponentFetchList';
import useProducts from '../../shared/contexts/ProductsContext/ProductsContext';
import useCart from '../../shared/contexts/CartContext/CartContext';

const CatalogScreen: React.FC = () => {
  const { currentProducts: items, fetchProducts: doFetch } = useProducts();
  const { currentCart, setQuantity } = useCart();

  const renderCallback = useCallback(
    (item: Product) => (
      <div className={cn(styles.item)} key={item.id}>
        <ProductItem
          name={item.name}
          desc={item.desc}
          price={item.price}
          photo={item.photo}
          count={currentCart.find(({ product }) => product.id === item.id)?.quantity ?? 0}
          onCountChange={(count) => setQuantity(item, count)}
        />
      </div>
    ),
    [currentCart]
  );

  return (
    <>
      <ComponentFetchList items={items} doFetch={doFetch} render={renderCallback} />
    </>
  );
};

export default CatalogScreen;
