import type { Meta, StoryObj } from '@storybook/react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Footer } from '../components/Footer';

const socialLinks = [
	{ icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
	{ icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
	{ icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
	{ icon: MdEmail, href: 'mailto:hello@example.com', label: 'Email' },
];

const meta = {
	component: Footer,
	title: 'Components/Footer',
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'Lorenzo Ceglia',
		links: socialLinks,
	},
};
