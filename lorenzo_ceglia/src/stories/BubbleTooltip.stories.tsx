import type { Meta, StoryObj } from '@storybook/react';
import { BubbleTooltip } from '../components/BubbleTooltip';

const meta = {
	component: BubbleTooltip,
	title: 'Components/BubbleTooltip',
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof BubbleTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Simulates a bubble centered in a 400×400 viewport
const centreRect = new DOMRect(175, 175, 50, 50);

export const Default: Story = {
	args: {
		name: 'TypeScript',
		anchorRect: centreRect,
	},
};

export const LongName: Story = {
	args: {
		name: 'Styled Components',
		anchorRect: centreRect,
	},
};

export const LeftEdge: Story = {
	args: {
		name: 'React',
		anchorRect: new DOMRect(4, 200, 34, 34),
	},
};

export const RightEdge: Story = {
	args: {
		name: 'Node.js',
		anchorRect: new DOMRect(window.innerWidth - 38, 200, 34, 34),
	},
};
