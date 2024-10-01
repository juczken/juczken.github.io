import type { Meta, StoryObj } from '@storybook/react';
import CartItem from './CartItem';

const meta: Meta<typeof CartItem> = {
    title: 'Features/CartItem',
    component: CartItem,
    tags: ['autodocs'],
    parameters: {
    },
    argTypes: {
        count: { control: 'number', },
        name: { control: 'text', },
        price: { control: 'number', },
        photo: { control: 'text', },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OrdinaryCartItem: Story = {
    args: {
        count: 5,
        name: 'Lorem ipsum',
        price: 19.95,
        photo: 'https://via.placeholder.com/500.png?text=Lorem+ipsum',
    }
};

export const MissingPhotoCartItem: Story = {
    args: {
        count: 5,
        name: 'Lorem ipsum',
        price: 19.95,
        photo: 'https://wrong.com/miss.png',
    }
};
