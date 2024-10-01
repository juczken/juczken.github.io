type BaseOperation = {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
}

type Coast = BaseOperation & {
    type: 'Coast',
}

type Profit = BaseOperation & {
    type: 'Profit',
}

type Operation = Coast | Profit