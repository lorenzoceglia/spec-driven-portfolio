import { useState, useMemo } from 'react';
import type { TechItem } from '../data/techStack';
import { BubblePack } from './BubblePack';
import { FilterTabs } from './FilterTabs';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type WorkedWithSectionProps = {
	techs: TechItem[];
};

/**
 * WorkedWithSection
 *
 * Replaces TechStackSection. Renders an organic circle-packed bubble cloud
 * of technologies with confidence-driven sizes. Filter tabs re-pack the cloud
 * with a FLIP animation. Defaults to "All" tab.
 */
export function WorkedWithSection({ techs }: WorkedWithSectionProps) {
	const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

	const availableTabs = ['All', ...Array.from(new Set(techs.map((t) => t.category)))];
	const [activeTab, setActiveTab] = useState('All');

	const filtered = useMemo(
		() => (activeTab === 'All' ? techs : techs.filter((t) => t.category === activeTab)),
		[activeTab, techs],
	);

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
					I worked with
				</h2>
				<FilterTabs tabs={availableTabs} activeTab={activeTab} onTabChange={setActiveTab} />
				<BubblePack items={filtered} />
			</div>
		</section>
	);
}
