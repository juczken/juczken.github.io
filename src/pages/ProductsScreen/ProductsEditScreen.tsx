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
    if (itemsEmpty) dispatch(getPartProducts({ pagination: { pageSize: 10, pageNumber: 1 } }));
  }, []);

  const items = useSelector((state: RootState) => state.products.products);
  const categories = useSelector((state: RootState) => state.products.categories);
  const pagination = useSelector((state: RootState) => state.products.pagination);

  const [categoryNames] = useState(categories.map((category) => category.name));
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleEditProduct = useCallback(
    (id: string, data: Partial<Product>) => {
      dispatch(updateProduct({ id, updatedProduct: data }));
    },
    [dispatch]
  );

  const handleFetchProducts = useCallback(() => {
    if (pagination.pageNumber !== pagination.total && pagination.pageNumber !== 0) {
      dispatch(getPartProducts({ pagination: { pageSize: 10, pageNumber: pagination.pageNumber + 1 } }));
    }
  }, [dispatch, pagination]);

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
      <ComponentFetchList
        items={items}
        doFetch={handleFetchProducts}
        render={renderCallback}
        needObserve={pagination.pageNumber < pagination.total}
      />
      {editingProduct && (
        <Modal setVisible={(visible) => (visible ? null : setEditingProduct(null))} visible={editingProduct !== null}>
          <ProductEditForm
            defaultValues={{
              name: editingProduct.name,
              price: editingProduct.price,
              description: editingProduct.desc,
              category: editingProduct.category.name,
              photo: { url: editingProduct.photo },
            }}
            categories={categoryNames}
            onSubmit={(data) => {
              const category = categories.find((category) => category.name === data.category);
              const { category: _, description: desc, photo, ...rest } = data;
              handleEditProduct(editingProduct.id, {
                ...rest,
                desc,
                category,
                photo: photo.url,
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
