import type { Meta, StoryObj } from '@storybook/react';
import { WorkedWithSection } from '../components/WorkedWithSection';
import { techStack } from '../data/techStack';

const meta = {
	component: WorkedWithSection,
	title: 'Components/WorkedWithSection',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof WorkedWithSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Full tech stack with all filter tabs */
export const Default: Story = {
	args: {
		techs: techStack,
	},
};

/** Only a subset of items — fewer tabs */
export const FrontendAndToolsOnly: Story = {
	args: {
		techs: techStack.filter((t) => t.category === 'Frontend' || t.category === 'Tools'),
	},
};
