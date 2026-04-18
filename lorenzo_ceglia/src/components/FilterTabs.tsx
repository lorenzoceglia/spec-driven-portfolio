type FilterTabsProps = {
	tabs: string[];
	activeTab: string;
	onTabChange: (tab: string) => void;
	/**
	 * Controls pill layout.
	 * - `'horizontal'` (default): scrollable row on all viewports.
	 * - `'vertical'`: scrollable row on mobile, stacked column on md+ (CSS-only,
	 *   no JS breakpoint needed). Use this when the parent places FilterTabs in a
	 *   sidebar column on desktop.
	 */
	orientation?: 'horizontal' | 'vertical';
};

/**
 * FilterTabs
 *
 * Pill-tab bar for filtering the bubble cloud.
 *
 * Horizontal (default): single scrollable row on all viewports.
 * Vertical: scrollable row on mobile → stacked column at md breakpoint.
 * The responsive flip is handled purely by Tailwind classes — no JS media
 * query required in the parent.
 */
export function FilterTabs({ tabs, activeTab, onTabChange, orientation = 'horizontal' }: FilterTabsProps) {
	const isVertical = orientation === 'vertical';

	const containerClass = isVertical
		? 'flex gap-2 flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-1 md:pb-0 scrollbar-none'
		: 'flex gap-2 overflow-x-auto pb-1 scrollbar-none';

	const buttonBaseClass = isVertical
		? 'shrink-0 md:shrink-0 md:w-full md:text-left px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200'
		: 'shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200';

	return (
		<div className={containerClass}>
			{tabs.map((tab) => {
				const isActive = tab === activeTab;
				return (
					<button
						key={tab}
						type="button"
						onClick={() => onTabChange(tab)}
						className={[
							buttonBaseClass,
							isActive
								? 'bg-slate-900 text-white'
								: 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700',
						].join(' ')}
					>
						{tab}
					</button>
				);
			})}
		</div>
	);
}
