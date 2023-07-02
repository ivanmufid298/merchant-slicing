import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'components/atoms/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false, iframeHeight: 500 } },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Example: Story = {
  args: {
    isOpen: false,
    withCloseButton: false,
    onClose: () => {},
    className: 'h-52',
    children: (
      <div className="absolute bottom-1 mb-3 w-full">
        <div className="flex justify-center gap-2 items-center">
          <button
            className="bg-red-600 border-none rounded-2xl"
            onClick={() => {}}
          >
            Delete
          </button>
          <button
            className="bg-transparent border rounded-2xl"
            onClick={() => {}}
          >
            Cancel
          </button>
        </div>
      </div>
    ),
  },
  render: ({ isOpen, children, onClose, className, withCloseButton }) => (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      withCloseButton={withCloseButton}
      className={className}
    >
      {children}
    </Modal>
  ),
};
