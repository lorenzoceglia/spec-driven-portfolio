import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FilterTabs } from '../components/FilterTabs';

const meta = {
	component: FilterTabs,
	title: 'Components/FilterTabs',
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
} satisfies Meta<typeof FilterTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tabs: ['All', 'Frontend', 'Backend', 'Database', 'Tools'],
		activeTab: 'All',
		onTabChange: () => {},
	},
};

export const Interactive: Story = {
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [activeTab, setActiveTab] = useState('All');
		return (
			<FilterTabs
				tabs={['All', 'Frontend', 'Backend', 'Database', 'Tools']}
				activeTab={activeTab}
				onTabChange={setActiveTab}
			/>
		);
	},
};

/** Vertical orientation — used as sidebar on desktop (md+) */
export const Vertical: Story = {
	args: {
		tabs: ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'AI'],
		activeTab: 'All',
		onTabChange: () => {},
		orientation: 'vertical',
	},
};
