import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header';

const meta = {
  component: Header,
  title: 'Components/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h1 className="text-2xl font-bold">Welcome to the App</h1>,
  },
};

export const WithNav: Story = {
  args: {
    children: (
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <nav className="flex gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </div>
    ),
  },
};
