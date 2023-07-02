import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'components/atoms/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Example: Story = {
  args: {
    label: 'Submit',
    onClick: () => {},
    variant: 'solid',
  },
  render: ({ label, onClick, variant }) => (
    <Button label={label} onClick={onClick} variant={variant} />
  ),
};
