type Chip = {
	label: string;
	href?: string;
};

type HeroSectionProps = {
	name: string;
	role: string;
	bio: string;
	chips?: Chip[];
};

/**
 * HeroSection
 *
 * Full-width intro section. Name, role, bio, and optional identity chips
 * animate in with a staggered fade-in + slide-up effect on mount.
 * White background, no gradient.
 */
export function HeroSection({ name, role, bio, chips }: HeroSectionProps) {
	return (
		<section
			className="min-h-[calc(100svh-3.25rem)] flex flex-col justify-center px-6 py-20 max-w-5xl mx-auto"
		>
			<div className="space-y-4">
				<h1
					className="text-6xl sm:text-8xl font-black tracking-tighter text-slate-900"
					style={{ animation: 'fadeSlideUp 0.7s ease both', animationDelay: '0ms' }}
				>
					{name}
				</h1>
				<p
					className="text-xl sm:text-2xl text-slate-500 font-light"
					style={{ animation: 'fadeSlideUp 0.7s ease both', animationDelay: '150ms' }}
				>
					{role}
				</p>
				<p
					className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
					style={{ animation: 'fadeSlideUp 0.7s ease both', animationDelay: '300ms' }}
				>
					{bio}
				</p>
				{chips && chips.length > 0 && (
					<div className="flex flex-wrap gap-3 pt-2">
						{chips.map((chip, i) =>
							chip.href ? (
								<a
									key={chip.label}
									href={chip.href}
									onClick={(e) => {
										e.preventDefault();
										const target = document.getElementById(chip.href!.replace('#', ''));
										target?.scrollIntoView({ behavior: 'smooth' });
									}}
									className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
									style={{
										animation: 'fadeSlideUp 0.7s ease both',
										animationDelay: `${450 + i * 150}ms`,
									}}
								>
									{chip.label}
								</a>
							) : (
								<span
									key={chip.label}
									className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-600"
									style={{
										animation: 'fadeSlideUp 0.7s ease both',
										animationDelay: `${450 + i * 150}ms`,
									}}
								>
									{chip.label}
								</span>
							),
						)}
					</div>
				)}
			</div>
		</section>
	);
}
