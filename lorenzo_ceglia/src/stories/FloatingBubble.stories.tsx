import type { Meta, StoryObj } from '@storybook/react';
import { SiTypescript, SiJquery, SiReact } from 'react-icons/si';
import { FloatingBubble } from '../components/FloatingBubble';

const meta = {
	component: FloatingBubble,
	title: 'Components/FloatingBubble',
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	decorators: [
		(Story) => (
			<div style={{ position: 'relative', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof FloatingBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Large confidence-5 bubble (TypeScript, r=48) — label + icon inside */
export const LargeConfidence5: Story = {
	args: {
		x: 80,
		y: 80,
		r: 48,
		item: {
			name: 'TypeScript',
			icon: SiTypescript,
			color: '#3178C6',
			category: 'Frontend',
			confidence: 5,
		},
		animDelay: 0,
		isTransitioning: false,
	},
};

/** Small confidence-1 bubble (jQuery, r=17) — tooltip on hover, no label */
export const SmallConfidence1: Story = {
	args: {
		x: 40,
		y: 40,
		r: 17,
		item: {
			name: 'jQuery',
			icon: SiJquery,
			color: '#0769AD',
			category: 'Frontend',
			confidence: 1,
		},
		animDelay: 1,
		isTransitioning: false,
	},
};

/** Medium confidence-4 bubble (React, r=38) — label + icon inside */
export const MediumConfidence4: Story = {
	args: {
		x: 70,
		y: 70,
		r: 38,
		item: {
			name: 'React',
			icon: SiReact,
			color: '#61DAFB',
			category: 'Frontend',
			confidence: 4,
		},
		animDelay: 2,
		isTransitioning: false,
	},
};

/** Float animation paused (simulates mid-FLIP transition state) */
export const Transitioning: Story = {
	args: {
		x: 70,
		y: 70,
		r: 38,
		item: {
			name: 'React',
			icon: SiReact,
			color: '#61DAFB',
			category: 'Frontend',
			confidence: 4,
		},
		animDelay: 0,
		isTransitioning: true,
	},
};
