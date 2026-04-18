import { useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { SiNpm } from 'react-icons/si';
import type { OSProject } from '../data/openSource';
import { Card } from './Card';
import { FilterTabs } from './FilterTabs';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type OpenSourceSectionProps = {
	projects: OSProject[];
};

/**
 * OpenSourceSection
 *
 * Responsive grid of open source project cards with GitHub and optional NPM links.
 * Supports filter tabs by project type. Fades in on scroll.
 */
export function OpenSourceSection({ projects }: OpenSourceSectionProps) {
	const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

	const availableTabs = [
		'All',
		...Array.from(new Set(projects.map((p) => capitalise(p.type)))),
	];
	const [activeTab, setActiveTab] = useState(availableTabs[0]);

	const filtered =
		activeTab === 'All'
			? projects
			: projects.filter((p) => capitalise(p.type) === activeTab);

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
					Open Source
				</h2>
				<FilterTabs tabs={availableTabs} activeTab={activeTab} onTabChange={setActiveTab} />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{filtered.map((project) => (
						<Card key={project.name}>
							<div className="space-y-2">
								<div className="flex items-start justify-between gap-2">
									<h3 className="font-semibold text-slate-900 font-mono text-sm">
										{project.name}
									</h3>
									<div className="flex items-center gap-2 shrink-0 mt-0.5">
										{project.npmUrl && (
											<a
												href={project.npmUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`${project.name} on NPM`}
												className="text-slate-400 hover:text-red-500 transition-colors"
											>
												<SiNpm size={18} />
											</a>
										)}
										<a
											href={project.url}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${project.name} on GitHub`}
											className="text-slate-400 hover:text-slate-700 transition-colors"
										>
											<FaGithub size={16} />
										</a>
									</div>
								</div>
								<span className="inline-block text-xs font-medium text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full">
									{project.language}
								</span>
								<p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

function capitalise(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
