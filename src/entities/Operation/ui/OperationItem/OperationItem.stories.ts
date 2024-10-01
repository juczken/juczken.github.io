import type { Meta, StoryObj } from '@storybook/react';
import OperationItem from './OperationItem';

const meta: Meta<typeof OperationItem> = {
  title: 'Entities/OperationItem',
  component: OperationItem,
  tags: ['autodocs'],
  parameters: {
  },
  argTypes: {
    amount: { control: 'number', },
    categoryName: { control: 'text', },
    desc: { control: 'text', },
    name: { control: 'text', },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OrdinaryOperationItem: Story = {
  args: {
    amount: 19.95,
    categoryName: 'Category Lorem ipsum dolor sit amet consectetur adipiscing elit nostra.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nostra.',
    name: 'Lorem ipsum',
  }
};

export const MissingDescriptoinOperationItem: Story = {
  args: {
    amount: 19.95,
    categoryName: 'Category Lorem ipsum dolor sit amet consectetur adipiscing elit nostra.',
    name: 'Lorem ipsum',
  }
};

export const CutDescriptionOperationItem: Story = {
  args: {
    amount: 19.95,
    categoryName: 'Category Lorem ipsum dolor sit amet consectetur adipiscing elit nostra.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nostra vehicula ultricies, lobortis ornare dapibus montes vel fermentum sed dui.',
    name: 'Lorem ipsum',
  }
};
