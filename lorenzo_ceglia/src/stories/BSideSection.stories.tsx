import type { Meta, StoryObj } from '@storybook/react';
import { BSideSection } from '../components/BSideSection';
import { djSets } from '../data/djSets';

const meta = {
	component: BSideSection,
	title: 'Sections/BSideSection',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof BSideSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		sets: djSets,
		currentSetUrl: null,
		onPlay: () => {},
	},
};

export const WithActiveSet: Story = {
	args: {
		sets: djSets,
		currentSetUrl: djSets[0].url,
		onPlay: () => {},
	},
};
