import type { Company } from '../data/companies';
import { Card } from './Card';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type CompaniesSectionProps = {
	companies: Company[];
};

/**
 * CompaniesSection
 *
 * Responsive grid of company cards. Fades in on scroll.
 * Grid: 1 col mobile → 2-3 col desktop.
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
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{companies.map((company) => (
						<Card key={company.name} href={company.url}>
							<div className="space-y-2">
								<div className="flex items-start justify-between gap-2">
									<h3 className="font-semibold text-slate-900">{company.name}</h3>
									<span className="text-xs text-slate-400 whitespace-nowrap shrink-0 mt-0.5">
										{company.period}
									</span>
								</div>
								<p className="text-sm font-medium text-indigo-500">{company.role}</p>
								<p className="text-sm text-slate-500 leading-relaxed">{company.description}</p>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
