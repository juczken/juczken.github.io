import type { Meta, StoryObj } from '@storybook/react';
import ProductDetail from './ProductDetail';

const meta: Meta<typeof ProductDetail> = {
    title: 'Entities/ProductDetail',
    component: ProductDetail,
    tags: ['autodocs'],
    parameters: {
    },
    argTypes: {
        categoryName: { control: 'text', },
        desc: { control: 'text', },
        name: { control: 'text', },
        price: { control: 'number', },
        photos: { control: 'array', },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OrdinaryProductDetail: Story = {
    args: {
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nostra vehicula ultricies, lobortis ornare dapibus montes vel fermentum sed dui.',
        name: 'Lorem ipsum',
        categoryName: 'Lorem ipsum categoty',
        price: 19.95,
        photos: ['https://via.placeholder.com/500.png?text=Lorem+ipsum+1', 'https://via.placeholder.com/500.png?text=Lorem+ipsum+2', 'https://via.placeholder.com/500.png?text=Lorem+ipsum+3', 'https://via.placeholder.com/500.png?text=Lorem+ipsum+4', 'https://via.placeholder.com/500.png?text=Lorem+ipsum+5']
    }
};

export const MissingPhotoProductDetail: Story = {
    args: {
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nostra vehicula ultricies, lobortis ornare dapibus montes vel fermentum sed dui.',
        categoryName: 'Lorem ipsum categoty',
        name: 'Lorem ipsum',
        price: 19.95,
        photos: ['https://wrong.com/miss.png']
    }
};

export const OnePhotoProductDetail: Story = {
    args: {
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nostra vehicula ultricies, lobortis ornare dapibus montes vel fermentum sed dui.',
        categoryName: 'Lorem ipsum categoty',
        name: 'Lorem ipsum',
        price: 19.95,
        photos: ['https://via.placeholder.com/500.png?text=Lorem+ipsum']
    }
};

export const MisingDescriptionProductDetail: Story = {
    args: {
        name: 'Lorem ipsum',
        categoryName: 'Lorem ipsum categoty',
        price: 19.95,
        photos: ['https://via.placeholder.com/500.png?text=Lorem+ipsum+1', 'https://via.placeholder.com/500.png?text=Lorem+ipsum+2', 'https://via.placeholder.com/500.png?text=Lorem+ipsum+3', 'https://via.placeholder.com/500.png?text=Lorem+ipsum+4', 'https://via.placeholder.com/500.png?text=Lorem+ipsum+5']
    }
};