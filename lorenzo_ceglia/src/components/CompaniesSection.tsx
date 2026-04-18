import type { Company } from '../data/companies';
import { Card } from './Card';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type CompaniesSectionProps = {
	companies: Company[];
};

/**
 * A small downward-pointing SVG arrow used to connect adjacent company cards,
 * indicating career progression from oldest to newest.
 */
function ExperienceArrow() {
	return (
		<div className="flex justify-center py-1 text-slate-300" aria-hidden="true">
			<svg
				width="20"
				height="28"
				viewBox="0 0 20 28"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				{/* Vertical stem */}
				<line x1="10" y1="2" x2="10" y2="22" />
				{/* Arrowhead */}
				<polyline points="4,16 10,24 16,16" />
			</svg>
		</div>
	);
}

/**
 * CompaniesSection
 *
 * Single-column chronological list of company cards (oldest → newest).
 * A downward arrow connector between each pair signals career progression.
 * Fades in on scroll.
 */
export function CompaniesSection({ companies }: CompaniesSectionProps) {
	const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

	return (
		<section
			ref={ref}
			className="px-6 py-20 bg-white"
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
				transition: 'opacity 0.6s ease, transform 0.6s ease',
			}}
		>
			<div className="max-w-5xl mx-auto">
				<h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-10">
					Experience
				</h2>
				<div className="flex flex-col max-w-xl mx-auto">
					{companies.map((company, i) => (
						<div key={company.name}>
							<Card href={company.url}>
								<div className="space-y-2">
									<div className="flex items-start justify-between gap-2">
										<h3 className="font-semibold text-slate-900">{company.name}</h3>
										<span className="text-xs text-slate-400 whitespace-nowrap shrink-0 mt-0.5">
											{company.period}
										</span>
									</div>
									<p className="text-sm font-medium text-slate-700">{company.role}</p>
									<p className="text-sm text-slate-500 leading-relaxed">{company.description}</p>
								</div>
							</Card>
							{i < companies.length - 1 && <ExperienceArrow />}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
