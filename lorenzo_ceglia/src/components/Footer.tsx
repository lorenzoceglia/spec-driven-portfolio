import type { IconType } from 'react-icons';
import { SocialIconLink } from './SocialIconLink';

export type SocialLink = {
	icon: IconType;
	href: string;
	label: string;
};

type FooterProps = {
	name?: string;
	links: SocialLink[];
};

/**
 * Footer
 *
 * Minimal footer: name left-aligned, social icon links right.
 * Stacks vertically and centers on mobile.
 */
export function Footer({ name = 'Lorenzo Ceglia', links }: FooterProps) {
	return (
		<footer className="border-t border-slate-100 bg-white px-6 py-8">
			<div className="max-w-5xl mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
				<span className="text-sm text-slate-400 font-medium">
					{name}
				</span>
				<div className="flex items-center gap-5">
					{links.map((link) => (
						<SocialIconLink
							key={link.label}
							icon={link.icon}
							href={link.href}
							label={link.label}
						/>
					))}
				</div>
			</div>
		</footer>
	);
}
