import { useState } from 'react';
import type { TechItem } from '../data/techStack';
import { TechBadge } from './TechBadge';
import { FilterTabs } from './FilterTabs';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type TechStackSectionProps = {
	techs: TechItem[];
};

/**
 * TechStackSection
 *
 * Responsive grid of TechBadge items with category filter tabs.
 * Fades in on scroll. Grid: 2 col mobile → 4 col tablet → 6 col desktop.
 */
export function TechStackSection({ techs }: TechStackSectionProps) {
	const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

	const availableTabs = [
		'All',
		...Array.from(new Set(techs.map((t) => t.category))),
	];
	const [activeTab, setActiveTab] = useState('Frontend');

	const filtered = activeTab === 'All' ? techs : techs.filter((t) => t.category === activeTab);

	return (
		<section
			ref={ref}
			className="px-6 py-20"
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
				transition: 'opacity 0.6s ease, transform 0.6s ease',
			}}
		>
			<div className="max-w-5xl mx-auto">
				<h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-10">
					Tech Stack
				</h2>
				<FilterTabs tabs={availableTabs} activeTab={activeTab} onTabChange={setActiveTab} />
				<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
					{filtered.map((tech) => (
						<TechBadge
							key={tech.name}
							name={tech.name}
							icon={tech.icon}
							color={tech.color}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
