import type { Meta, StoryObj } from '@storybook/react';
import { TechStackSection } from '../components/TechStackSection';
import { techStack } from '../data/techStack';

const meta = {
	component: TechStackSection,
	title: 'Sections/TechStackSection',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof TechStackSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		techs: techStack,
	},
};
