import type { Meta, StoryObj } from '@storybook/react';
import imageFile from '../../../../public/images/profile_1.png';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'components/atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Example: Story = {
  args: {
    image: imageFile.src,
    alt: 'Profile 1',
  },
  render: ({ image, alt, size, className }) => (
    <Avatar image={image} alt={alt} size={size} className={className} />
  ),
};
