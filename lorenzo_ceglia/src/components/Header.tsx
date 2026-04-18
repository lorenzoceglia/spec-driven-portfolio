type HeaderProps = {
	name?: string;
};

/**
 * Header
 *
 * Minimal decorative bar. Name left-aligned. No children slot —
 * the header has a fixed, known shape for a personal portfolio.
 */
export function Header({ name = 'Lorenzo Ceglia' }: HeaderProps) {
	return (
		<header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-slate-100 px-6 py-4">
			<span className="text-sm font-semibold tracking-widest text-slate-400 uppercase">
				{name}
			</span>
		</header>
	);
}
