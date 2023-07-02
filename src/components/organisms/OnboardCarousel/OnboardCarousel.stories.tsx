import type { Meta, StoryObj } from '@storybook/react';
import OnboardCarousel, {
  OnboardCarouselProps,
  OnboardCarouselType,
} from './OnboardCarousel';

const meta: Meta<typeof OnboardCarousel> = {
  title: 'components/organisms/OnboardCarousel',
  component: OnboardCarousel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OnboardCarousel>;
const items: OnboardCarouselType[] = [
  {
    title: 'Welcome to our merchant app1!',
    description:
      "Whether you have questions, need advice, or just want to have a conversation, I'm here to help 1.",
    src: 'https://rm.id/images/berita/750x390/gandeng-1000-mitra-good-doctor-technology-indonesia-perkuat-layanan-kesehatan_110322.jpg',
  },
  {
    title: 'Welcome to our merchant app2!',
    description:
      "Whether you have questions, need advice, or just want to have a conversation, I'm here to help 2.",
    src: 'https://cdn.idntimes.com/content-images/community/2020/01/cats-f51f309fbd2ca0d7f8f4e5193b469427.jpg',
  },
  {
    title: 'Welcome to our merchant app3!',
    description:
      "Whether you have questions, need advice, or just want to have a conversation, I'm here to help 3.",
    src: 'https://static.gooddoctor.co.id/v1/tfs/T1A8KTBXAT1RCvBVdK.png',
  },
];

export const Example: Story = {
  args: {
    items: items,
  },
  render: ({ items }: OnboardCarouselProps) => (
    <OnboardCarousel items={items} />
  ),
};
