import React from 'react';
import { ThemeProvider } from '../../contexts/TempContext';
import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Shared/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(story) => (
    <ThemeProvider>
      {story()}
    </ThemeProvider>)],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleHeader: Story = {};