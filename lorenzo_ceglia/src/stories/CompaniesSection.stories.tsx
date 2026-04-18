import type { Meta, StoryObj } from '@storybook/react';
import { CompaniesSection } from '../components/CompaniesSection';
import { companies } from '../data/companies';

const meta = {
	component: CompaniesSection,
	title: 'Sections/CompaniesSection',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof CompaniesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		companies,
	},
};
