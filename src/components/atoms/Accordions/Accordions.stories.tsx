import type { Meta, StoryObj } from '@storybook/react';
import Accordions from './Accordions';

const meta: Meta<typeof Accordions> = {
  title: 'components/atoms/Accordions',
  component: Accordions,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordions>;

export const Example: Story = {
  args: {
    title: 'Gd Pharmacy',
  },
  render: ({ title }) => <Accordions title={title} />,
};
