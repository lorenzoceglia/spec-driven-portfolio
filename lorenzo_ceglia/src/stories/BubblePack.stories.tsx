import type { Meta, StoryObj } from '@storybook/react';
import { BubblePack } from '../components/BubblePack';
import { techStack } from '../data/techStack';

const meta = {
	component: BubblePack,
	title: 'Components/BubblePack',
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	decorators: [
		(Story) => (
			<div style={{ width: 800, maxWidth: '100%' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof BubblePack>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Full tech stack — all 29 items packed */
export const AllItems: Story = {
	args: {
		items: techStack,
	},
};

/** Only Frontend items — fewer, larger-relative cloud */
export const FrontendOnly: Story = {
	args: {
		items: techStack.filter((t) => t.category === 'Frontend'),
	},
};

/** Only Backend items */
export const BackendOnly: Story = {
	args: {
		items: techStack.filter((t) => t.category === 'Backend'),
	},
};
