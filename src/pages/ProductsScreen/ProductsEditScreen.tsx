import React, { useCallback, useEffect, useState } from 'react';
import cn from 'clsx';
import styles from './ProductsEditScreen.module.css';
import ProductItem from '../../entities/Product/ui/ProductItem/ProductItem';
import ComponentFetchList from '../../shared/ui/ComponentFetchList/ComponentFetchList';
import withEditMode from '../../shared/hocs/withEditMode';
import Modal from '../../shared/ui/Modal/Modal';
import ProductEditForm from '../../features/forms/ProductEditForm/ProductEditForm';
import { updateProduct, getPartProducts } from '../../features/Products/model/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store/store';

const EditProductItem = withEditMode(ProductItem);

const ProductsEditScreen: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const itemsEmpty = useSelector((state: RootState) => state.products.products).length === 0;

  useEffect(() => {
    if (itemsEmpty) dispatch(getPartProducts());
  }, []);

  const items = useSelector((state: RootState) => state.products.products);
  const categories = useSelector((state: RootState) => state.products.categories);

  const [categoryNames] = useState(categories.map((category) => category.name));
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleEditProduct = useCallback(
    (id: string, data: Partial<Product>) => {
      dispatch(updateProduct({ id, updatedProduct: data }));
    },
    [dispatch]
  );

  const handleFetchProducts = useCallback(() => {
    dispatch(getPartProducts());
  }, [dispatch]);

  const renderCallback = useCallback(
    (item: Product) => (
      <div className={cn(styles.item)} key={item.id}>
        <EditProductItem
          onEdit={() => setEditingProduct(item)}
          name={item.name}
          desc={item.desc}
          price={item.price}
          photo={item.photos?.length > 0 ? item.photos[0] : ''}
        />
      </div>
    ),
    []
  );

  return (
    <>
      <ComponentFetchList items={items} doFetch={handleFetchProducts} render={renderCallback} />
      {editingProduct && (
        <Modal setVisible={(visible) => (visible ? null : setEditingProduct(null))} visible={editingProduct !== null}>
          <ProductEditForm
            defaultValues={{
              name: editingProduct.name,
              price: editingProduct.price,
              description: editingProduct.desc,
              category: editingProduct.category.name,
              photos: editingProduct.photos.map((photo) => ({ url: photo })),
            }}
            categories={categoryNames}
            onSubmit={(data) => {
              const category = categories.find((category) => category.name === data.category);
              const { category: _, description: desc, photos, ...rest } = data;
              handleEditProduct(editingProduct.id, {
                ...rest,
                desc,
                category,
                photos: photos.map((photo) => photo.url),
              });
              setEditingProduct(null);
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default ProductsEditScreen;
