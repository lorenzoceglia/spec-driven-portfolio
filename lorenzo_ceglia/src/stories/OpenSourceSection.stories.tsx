import type { Meta, StoryObj } from '@storybook/react';
import { OpenSourceSection } from '../components/OpenSourceSection';
import { openSourceProjects } from '../data/openSource';

const meta = {
	component: OpenSourceSection,
	title: 'Sections/OpenSourceSection',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof OpenSourceSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		projects: openSourceProjects,
	},
};
