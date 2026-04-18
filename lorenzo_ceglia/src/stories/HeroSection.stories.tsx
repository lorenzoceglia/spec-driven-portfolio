import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from '../components/HeroSection';

const meta = {
	component: HeroSection,
	title: 'Sections/HeroSection',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'Lorenzo Ceglia',
		role: 'Software Engineer',
		bio: 'Software engineer obsessed with clean UIs and open source. Also responsible for clearing the dance floor at least once a weekend.',
		chips: [
			{ label: '</> Code by day' },
			{ label: '🎧 B-Side', href: '#b-side' },
		],
	},
};
