import React, { FC } from "react"
import style from './CartItem.module.css'
import { Counter } from "../../../../shared/ui/Counter"

type CartItemProps = Pick<Product, 'price' | 'photo' | 'name'> & {
    count: number,
}

export const CartItem: FC<CartItemProps> = ({ name, count, photo, price}) => {

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.imageWrapper}>
                    <img className={style.image} src={photo} alt={`Product ${name}`} />
                </div>
                <div className={style.infoWrapper}>
                    <div className={style.title}>{name}</div>
                </div>
                <div className={style.cartWrapper}>
                    <div className={style.counter}>
                        <Counter count={1} />
                    </div>
                    <div className={style.price}>{count * price} руб.</div>
                    <div className={style.remove}>
                        <button>Удалить</button>
                    </div>
                </div>
            </div>
        </>
    )
}