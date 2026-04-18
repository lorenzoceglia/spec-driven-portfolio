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
		name: 'Lorenzo Ceglia',
	},
};

export const CustomName: Story = {
	args: {
		name: 'Jane Doe',
	},
};
