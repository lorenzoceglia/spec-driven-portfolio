import type { DJSet } from '../data/djSets';

type SetCardProps = {
	set: DJSet;
	isActive: boolean;
	isPlaying: boolean;
	onPlay: (url: string) => void;
};

/**
 * SetCard
 *
 * Displays a DJ set card with cover art, title, duration, and date.
 * Shows an orange ring when the set is currently playing.
 * Entire card is clickable to trigger playback.
 */
export function SetCard({ set, isActive, isPlaying, onPlay }: SetCardProps) {
	return (
		<button
			type="button"
			onClick={() => onPlay(set.url)}
			className={[
				'w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all duration-200',
				'bg-slate-800 hover:bg-slate-700',
				isActive ? 'ring-2 ring-orange-400' : 'ring-1 ring-slate-700',
			].join(' ')}
		>
			<img
				src={set.coverUrl}
				alt={set.title}
				className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover flex-shrink-0"
			/>
			<div className="flex-1 min-w-0">
				<p className="font-semibold text-white text-sm sm:text-base truncate">{set.title}</p>
				<p className="text-slate-400 text-xs mt-1">
					{set.duration}
					<span className="mx-1.5 text-slate-600">·</span>
					{set.date}
				</p>
				{isActive && isPlaying && (
					<span className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-orange-400">
						<span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
						Now Playing
					</span>
				)}
			</div>
		</button>
	);
}
