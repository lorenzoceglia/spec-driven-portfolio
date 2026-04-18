import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';

const meta = {
	component: Card,
	title: 'Components/Card',
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<div>
				<h3 className="font-semibold text-slate-900 mb-1">Card Title</h3>
				<p className="text-sm text-slate-500">This is a card description with some placeholder text.</p>
			</div>
		),
	},
};

export const WithLink: Story = {
	args: {
		href: 'https://example.com',
		children: (
			<div>
				<h3 className="font-semibold text-slate-900 mb-1">Clickable Card</h3>
				<p className="text-sm text-slate-500">This card links to an external URL. Hover to see the lift effect.</p>
			</div>
		),
	},
};
