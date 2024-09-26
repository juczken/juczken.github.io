import React, { FC } from "react";
import './CartButton.css'

type CartButtonProps = {
    count: number,
}

const CartButton: FC<CartButtonProps> = ({ count }) => {
    return (
        <div className="cart_container">
            {count === 0
                ? <button className="cart_container cartButton" >В корзину</button>
                : (
                    <div className="cartInputContainer">
                        <button className="cartCounter" >-</button>
                        <input className="cartInput" type="number" value={count} />
                        <button className="cartCounter">+</button>
                    </div>
                )
            }
        </div>
    );
}
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
export default CartButton