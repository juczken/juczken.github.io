import React, { FC } from 'react';
import cn from 'clsx';
import style from './Counter.module.css';

type CounterProps = {
  count: number;
  min?: number;
  max?: number;
  disabled?: boolean;
};

const Counter: FC<CounterProps> = ({ count, min, max, disabled = true }) => {
  return (
    <div className={cn(style.wrapper)}>
      <button className={cn(style.counter, { [style.counter_active]: !disabled })} disabled={disabled}>
        -
      </button>
      <input className={cn(style.input)} type="number" value={count} disabled={disabled} />
      <button className={cn(style.counter, { [style.counter_active]: !disabled })} disabled={disabled}>
        +
      </button>
    </div>
  );
};

export default Counter;
