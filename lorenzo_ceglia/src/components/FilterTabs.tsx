type FilterTabsProps = {
	tabs: string[];
	activeTab: string;
	onTabChange: (tab: string) => void;
};

/**
 * FilterTabs
 *
 * Horizontally scrollable tab bar. One button per tab.
 * Active tab gets an indigo highlight. Scrollable on mobile.
 */
export function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
	return (
		<div className="flex gap-2 overflow-x-auto pb-1 mb-8 scrollbar-none">
			{tabs.map((tab) => {
				const isActive = tab === activeTab;
				return (
					<button
						key={tab}
						type="button"
						onClick={() => onTabChange(tab)}
						className={[
							'shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200',
							isActive
								? 'bg-indigo-600 text-white'
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
