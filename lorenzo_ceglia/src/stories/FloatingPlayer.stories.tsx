import type { Meta, StoryObj } from '@storybook/react';
import { FloatingPlayer } from '../components/FloatingPlayer';
import { djSets } from '../data/djSets';

const meta = {
	component: FloatingPlayer,
	title: 'Components/FloatingPlayer',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof FloatingPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
	args: {
		isOpen: true,
		currentSet: djSets[0],
	},
};

export const Closed: Story = {
	args: {
		isOpen: false,
		currentSet: djSets[0],
	},
};
