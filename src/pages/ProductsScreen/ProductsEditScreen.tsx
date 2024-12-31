import React, { useCallback, useState } from 'react';
import cn from 'clsx';
import styles from './ProductsEditScreen.module.css';
import ProductItem from '../../entities/Product/ui/ProductItem/ProductItem';
import ComponentFetchList from '../../shared/ui/ComponentFetchList/ComponentFetchList';
import useProducts from '../../shared/contexts/ProductsContext/ProductsContext';
import withEditMode from '../../shared/hocs/withEditMode';
import Modal from '../../shared/ui/Modal/Modal';
import ProductEditForm from '../../features/forms/ProductEditForm/ProductEditForm';

const EditProductItem = withEditMode(ProductItem);

const ProductsEditScreen: React.FC = () => {
  const { currentProducts: items, fetchProducts: doFetch, editProduct, catigories } = useProducts();
  const [categories] = useState(catigories.map((category) => category.name));
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const renderCallback = useCallback(
    (item: Product) => (
      <div className={cn(styles.item)} key={item.id}>
        <EditProductItem
          onEdit={() => setEditingProduct(item)}
          name={item.name}
          desc={item.desc}
          price={item.price}
          photo={item.photo}
        />
      </div>
    ),
    []
  );

  return (
    <>
      <ComponentFetchList items={items} doFetch={doFetch} render={renderCallback} />
      {editingProduct && (
        <Modal setVisible={(visible) => (visible ? null : setEditingProduct(null))} visible={editingProduct !== null}>
          <ProductEditForm
            defaultValues={{
              name: editingProduct.name,
              price: editingProduct.price,
              description: editingProduct.desc,
              category: editingProduct.category.name,
              photos: [{ url: editingProduct.photo }],
            }}
            categories={categories}
            onSubmit={(data) => {
              const category = catigories.find((category) => category.name === data.category);
              const { category: _, description: desc, photos, ...rest } = data;
              editProduct(editingProduct.id, { ...rest, desc, category, photo: photos.length > 0 && photos[0].url });
              setEditingProduct(null);
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default ProductsEditScreen;
