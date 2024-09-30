import React, { FC, useState } from 'react';
import cn from 'clsx';
import style from './ProductItem.module.css';
import CartButton from '../../../../features/Cart/ui/CartButton/CartButton';
// import CartButton from 'src/features/Cart/ui/CartButton/CartButton';

type ProductItemProps = Pick<Product, 'price' | 'photo' | 'name' | 'desc'>;

export const ProductItem: FC<ProductItemProps> = ({ price, photo, name, desc }) => {
  return (
    <div className={cn(style.wrapper)}>
      <div>
        <img className={cn(style.image)} src={photo} alt={`Product ${name}`} />
      </div>
      <div className={cn(style.title)}>
        <h3>{name}</h3>
      </div>
      <div className={cn(style.price)}>
        <span>{price} руб.</span>
      </div>
      <div className={cn(style.description)}>
        {desc && <p>{desc.length > 100 ? desc.substring(0, 97) + '...' : desc}</p>}
      </div>
      <div className={cn(style.button)}>
        <CartButton count={0} />
      </div>
    </div>
  );
};