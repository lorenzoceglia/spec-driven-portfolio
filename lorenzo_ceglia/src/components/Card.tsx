import type { ReactNode } from 'react';

type CardProps = {
	children: ReactNode;
	className?: string;
	href?: string;
};

/**
 * Card
 *
 * A reusable card shell with a subtle border, white background, and
 * hover lift animation (translateY + shadow). Optionally wraps content
 * in an anchor tag when `href` is provided.
 */
export function Card({ children, className = '', href }: CardProps) {
	const base =
		'bg-white border border-slate-200 rounded-lg p-6 transition-all duration-250 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60';

	if (href) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={`block no-underline ${base} ${className}`}
			>
				{children}
			</a>
		);
	}

	return <div className={`${base} ${className}`}>{children}</div>;
}
