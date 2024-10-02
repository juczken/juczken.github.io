import type { Meta, StoryObj } from '@storybook/react';
import ProductItem from './ProductItem';

const meta: Meta<typeof ProductItem> = {
  title: 'Entities/ProductItem',
  component: ProductItem,
  tags: ['autodocs'],
  parameters: {
  },
  argTypes: {
    desc: { control: 'text', },
    name: { control: 'text', },
    price: { control: 'number', },
    photo: { control: 'text', },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OrdinaryProductItem: Story = {
  args: {
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nostra.',
    name: 'Lorem ipsum',
    price: 19.95,
    photo: 'https://via.placeholder.com/500.png?text=Lorem+ipsum',
  }
};

export const MissingPhotoProductItem: Story = {
  args: {
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nostra.',
    name: 'Lorem ipsum',
    price: 19.95,
    photo: 'https://wrong.com/miss.png',
  }
};

export const CutDescriptionProductItem: Story = {
  args: {
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nostra vehicula ultricies, lobortis ornare dapibus montes vel fermentum sed dui.',
    name: 'Lorem ipsum',
    price: 19.95,
    photo: 'https://via.placeholder.com/500.png?text=Lorem+ipsum',
  }
};

export const MissingDescriptionProductItem: Story = {
  args: {
    // desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nostra vehicula ultricies, lobortis ornare dapibus montes vel fermentum sed dui.',
    name: 'Lorem ipsum',
    price: 19.95,
    photo: 'https://via.placeholder.com/500.png?text=Lorem+ipsum',
  }
};

