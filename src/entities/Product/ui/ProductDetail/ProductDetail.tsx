import React, { FC } from 'react';
import CartButton from '../../../../features/Cart/ui/CartButton/CartButton';
import style from './ProductDetail.module.css';

// type ProductDetailProps = Pick<
//   Product& MutatePropertyToArray<Product> & AddPropertyPrefix<Category, 'category'>,
//   'categoryName' | 'desc' | 'name' | 'photos' | 'price'
// >;
type ProductDetailProps = Pick<Product, 'desc' | 'name' | 'price'> & {
  photos: Product['photo'][],
  categoryName: Category['name'],
};

const ProductDetail: FC<ProductDetailProps> = ({ name, photos, desc, price, categoryName }) => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.imageWrapper}>
          {photos.length === 0 ? (
            <img className={style.image} src="undefined.png" alt={`Product ${name}`} />
          ) : (
            photos.map((photo, index) => (
              <img className={style.image} src={photo} alt={`Product ${name}`} key={index} />
            ))
          )}
        </div>
        <div className={style.infoWrapper}>
          <div className={style.title}>{name}</div>
          <div className={style.category}>{categoryName}</div>
          <div className={style.description}>{desc || 'undescrible'}</div>
        </div>
        <div className={style.cartWrapper}>
          <div className={style.button}>
            <CartButton count={0} />
          </div>
          <div className={style.price}>{price.toFixed(2)}&nbsp;руб.</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
