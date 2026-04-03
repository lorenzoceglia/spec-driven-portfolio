import type { Meta, StoryObj } from '@storybook/react';
import { Section } from '../components/Section';

const meta = {
  component: Section,
  title: 'Components/Section',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h2 className="text-xl font-bold mb-4">Section Title</h2>
        <p className="text-gray-700">This is an example section with some content.</p>
      </div>
    ),
  },
};

export const WithMultipleElements: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Featured Content</h2>
        <p className="text-gray-700">First paragraph of content goes here.</p>
        <p className="text-gray-700">Second paragraph of content goes here.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Call to Action
        </button>
      </div>
    ),
  },
};
