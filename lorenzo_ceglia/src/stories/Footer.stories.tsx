import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../components/Footer';

const meta = {
  component: Footer,
  title: 'Components/Footer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>&copy; 2026 MyApp. All rights reserved.</p>,
  },
};

export const WithLinks: Story = {
  args: {
    children: (
      <div className="flex justify-between items-center">
        <p>&copy; 2026 MyApp. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="#privacy" className="hover:underline">Privacy</a>
          <a href="#terms" className="hover:underline">Terms</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    ),
  },
};
