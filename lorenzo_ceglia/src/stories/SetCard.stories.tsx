import type { Meta, StoryObj } from '@storybook/react';
import { SetCard } from '../components/SetCard';
import { djSets } from '../data/djSets';

const meta = {
	component: SetCard,
	title: 'Components/SetCard',
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
		backgrounds: { default: 'dark' },
	},
} satisfies Meta<typeof SetCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		set: djSets[0],
		isActive: false,
		onPlay: () => {},
	},
};

export const NowPlaying: Story = {
	args: {
		set: djSets[0],
		isActive: true,
		onPlay: () => {},
	},
};
