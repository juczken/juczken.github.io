import React, { FC } from "react";
import cn from 'clsx'
import style from './CartButton.module.css'

type CartButtonProps = {
    count: number,
}

const CartButton: FC<CartButtonProps> = ({ count }) => {
    return (
        <div className={style.cartContainer}>
            {count === 0
                ? <button className={cn(style.cartContainer, style.cartButton)} >В корзину</button>
                : (
                    <div className={style.cartInputContainer}>
                        <button className={style.cartCounter} >-</button>
                        <input className={style.cartInput} type="number" value={count} />
                        <button className={style.cartCounter}>+</button>
                    </div>
                )
            }
        </div>
    );
}
// const CartButton: FC<CartButtonProps> = ({ count }) => {
//     return (
//         <div className={style.cartContainer}>
//             <button className={cn(style.cartContainer, style.cartButton)} hidden={count > 0}>В корзину</button>
//             <div className={style.cartInputContainer} hidden={count === 0}>
//                 <button className={style.cartCounter} hidden={count === 0}>-</button>
//                 <input className={style.cartInput} type="number" value={count} hidden={count === 0} />
//                 <button className={style.cartCounter} hidden={count === 0}>+</button>
//             </div>
//         </div>)
// }
export default CartButton