import type { Meta, StoryObj } from '@storybook/react';
import CartButton from './CartButton';

const meta: Meta<typeof CartButton> = {
  title: 'Features/CartButton',
  component: CartButton,
  tags: ['autodocs'],
  parameters: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutProductCartButton:Story={
  args:{
    count:0,
    disabled:false,
  }
}

export const WithProductCartButton:Story={
  args:{
    count:1,
    disabled:false,
  }
}