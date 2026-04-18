import type { Meta, StoryObj } from '@storybook/react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { SocialIconLink } from '../components/SocialIconLink';

const meta = {
	component: SocialIconLink,
	title: 'Components/SocialIconLink',
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SocialIconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GitHub: Story = {
	args: {
		icon: FaGithub,
		href: 'https://github.com',
		label: 'GitHub',
	},
};

export const LinkedIn: Story = {
	args: {
		icon: FaLinkedin,
		href: 'https://linkedin.com',
		label: 'LinkedIn',
	},
};

export const Instagram: Story = {
	args: {
		icon: FaInstagram,
		href: 'https://instagram.com',
		label: 'Instagram',
	},
};

export const Email: Story = {
	args: {
		icon: MdEmail,
		href: 'mailto:hello@example.com',
		label: 'Email',
	},
};
