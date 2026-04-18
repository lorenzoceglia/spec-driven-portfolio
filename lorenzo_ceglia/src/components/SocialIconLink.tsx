import type { IconType } from 'react-icons';

type SocialIconLinkProps = {
	icon: IconType;
	href: string;
	label: string;
};

/**
 * SocialIconLink
 *
 * Renders a social media icon as an accessible anchor link.
 * Opens in a new tab. Hover reveals a subtle color change.
 */
export function SocialIconLink({ icon: Icon, href, label }: SocialIconLinkProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={label}
			className="text-slate-400 hover:text-slate-700 transition-colors duration-200"
		>
			<Icon size={20} aria-hidden="true" />
		</a>
	);
}
