import type { Meta, StoryObj } from '@storybook/react';
import { SiTypescript, SiReact, SiDocker } from 'react-icons/si';
import { TechBadge } from '../components/TechBadge';

const meta = {
	component: TechBadge,
	title: 'Components/TechBadge',
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof TechBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeScript: Story = {
	args: {
		name: 'TypeScript',
		icon: SiTypescript,
		color: '#3178C6',
	},
};

export const React: Story = {
	args: {
		name: 'React',
		icon: SiReact,
		color: '#61DAFB',
	},
};

export const Docker: Story = {
	args: {
		name: 'Docker',
		icon: SiDocker,
		color: '#2496ED',
	},
};
