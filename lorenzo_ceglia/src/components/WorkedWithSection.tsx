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
 * Renders an organic circle-packed bubble cloud of technologies with
 * confidence-driven sizes. Filter tabs re-pack the cloud with a FLIP animation.
 *
 * Layout:
 * - Mobile  (< md): filter pills above cloud, horizontal scrollable row.
 * - Desktop (≥ md): filter pills as left sidebar (~144px), cloud fills remaining width.
 *
 * The ResizeObserver in useCirclePacker automatically repacks the cloud when
 * the flex-1 column width changes on breakpoint transition.
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
			className="px-6 py-20 bg-white"
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

				{/* Two-column on desktop, single-column on mobile */}
				<div className="flex flex-col md:flex-row gap-8">
					{/* Filter sidebar (desktop) / horizontal scroll bar (mobile) */}
					<div className="md:w-36 md:flex-shrink-0">
						<FilterTabs
							tabs={availableTabs}
							activeTab={activeTab}
							onTabChange={setActiveTab}
							orientation="vertical"
						/>
					</div>

					{/* Bubble cloud — flex-1 so it takes all remaining horizontal space */}
					<div className="flex-1 min-w-0">
						<BubblePack items={filtered} allItems={techs} />
					</div>
				</div>
			</div>
		</section>
	);
}
