import type { Meta, StoryObj } from '@storybook/react';
import InputText from './InputText';

const meta: Meta<typeof InputText> = {
  title: 'component/molecules/InputText',
  component: InputText,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Example: Story = {
  args: {
    id: 'username',
    name: 'username',
    type: 'text',
    placeholder: 'Enter username here',
  },
  render: ({ id, name, type, placeholder }) => (
    <InputText id={id} name={name} type={type} placeholder={placeholder} />
  ),
};

export const ExampleAnimatedPlaceholder: Story = {
  args: {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Enter password here',
  },
  render: ({ id, name, type, label }) => (
    <InputText id={id} name={name} type={type} label={label} />
  ),
};
