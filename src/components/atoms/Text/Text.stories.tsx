import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'components/atoms/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Example: Story = {
  args: {
    label: 'Text',
    variant: 'regular12',
  },
  render: ({ label, variant }) => <Text label={label} variant={variant}></Text>,
};
