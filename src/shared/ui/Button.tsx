import React, { FC } from "react";
import cn from 'clsx'
import style from './Button.module.css'

type ButtonProps = {
    caption: string;
    className: string;
}

const Button: FC<ButtonProps> = ({ caption, className }) => {

    return (
        <div className={style.wrapper} >
            <button className={cn(className, style.button)}>{caption}</button>
        </div>
    )
}

export default Button