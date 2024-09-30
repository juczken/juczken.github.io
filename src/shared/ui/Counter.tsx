import React, { FC } from "react"
import cn from 'clsx'
import style from './Counter.module.css'

type CounterProps = {
    count: number,
    min?: number,
    max?: number,
}

export const Counter: FC<CounterProps> = ({count, min, max }) => {
    return (<div className={cn(style.wrapper)}>
        <button className={cn(style.counter)} >-</button>
        <input className={cn(style.input)} type="number" value={count} />
        <button className={cn(style.counter)}>+</button>
    </div>)
}