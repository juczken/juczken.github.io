import React, { FC } from 'react';
import cn from 'clsx';
import style from './CartButton.module.css';
import Counter from '../../../../shared/ui/Counter/Counter';
import Button from '../../../../shared/ui/Button/Button';

type CartButtonProps = {
  count: number;
  disabled?: boolean;
};

const CartButton: FC<CartButtonProps> = ({ count, disabled }) => {
  return (
    <div className={cn(style.wrapper)}>
      {count === 0 ? (
        <Button className={cn(style.button)} lable="В корзину" disabled={disabled} />
        // <Button className={cn(style.wrapper, style.button)} caption="В корзину" disabled={disabled} />
      ) : (
        <Counter count={count} min={0} disabled={disabled} />
      )}
    </div>
  );
};
// const CartButton: FC<CartButtonProps> = ({ count }) => {
//     return (
//         <div className="cart_container">
//             <button className="cart_container cartButton" hidden={count > 0}>В корзину</button>
//             <div className="cartInputContainer" hidden={count === 0}>
//                 <button className="cartCounter" hidden={count === 0}>-</button>
//                 <input className="cartInput" type="number" value={count} hidden={count === 0} />
//                 <button className="cartCounter" hidden={count === 0}>+</button>
//             </div>
//         </div>)
// }
export default CartButton;
