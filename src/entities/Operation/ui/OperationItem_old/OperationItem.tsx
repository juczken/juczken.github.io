import React, { FC } from "react"
import cn from 'clsx'
import cutStringHelper from "../../../../shared/lib/cutStringHelper"
import style from './OperationItem.module.css'

type OperationItemProps = Pick<Operation, 'name' | 'amount' | 'desc'> &{
    categoryName:string,
}

const OperationItem: FC<OperationItemProps> = ({ amount, categoryName, name, desc }) => {

    return (
        <div className={cn(style.wrapper)}>
            <div className={cn(style.namesWrapper)}>
                <div className={cn(style.name)}>{name}</div>
                <div className={cn(style.categoryName)}>{categoryName}</div>
            </div>
            <div className={cn(style.description)}>{cutStringHelper(desc,100)}</div>
            <div className={cn(style.amount)}>{amount} руб.</div>
        </div>
    )
}

export default OperationItem