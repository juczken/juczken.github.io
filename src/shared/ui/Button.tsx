import React, { FC } from 'react';
import cn from 'clsx';
import style from './Button.module.css';

type ButtonProps = {
  caption: string;
  className: string;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ caption, className, disabled = true }) => {
  return (
    <div className={style.wrapper}>
      <button className={cn({[className]:!disabled}, style.button, { [style.button_active]: !disabled, [style.button_disable]:disabled })} disabled={disabled}>
        {caption}
      </button>
    </div>
  );
};

export default Button;
