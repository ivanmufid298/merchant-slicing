import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'components/atoms/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Example: Story = {
  args: {
    onClick: () => {
      alert('Clicked!');
    },
    children: 'Hello World',
  },
  render: ({ children, onClick }) => <Card onClick={onClick}>{children}</Card>,
};
