import type { DJSet } from '../data/djSets';
import { SetCard } from './SetCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type BSideSectionProps = {
	sets: DJSet[];
	currentSetUrl: string | null;
	onPlay: (url: string) => void;
};

/**
 * BSideSection
 *
 * Dark (slate-900) section displaying all DJ sets as SetCard items.
 * Supports scroll-reveal animation. Each card triggers playback in
 * the FloatingPlayer via the onPlay callback.
 */
export function BSideSection({ sets, currentSetUrl, onPlay }: BSideSectionProps) {
	const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

	return (
		<section
			id="b-side"
			ref={ref}
			className="bg-slate-900 px-6 py-20"
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
				transition: 'opacity 0.6s ease, transform 0.6s ease',
			}}
		>
			<div className="max-w-5xl mx-auto">
				<h2 className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-1">
					B-Side
				</h2>
				<p className="text-slate-400 text-sm mb-10">
					When code stops, the music starts.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{sets.map((set) => (
						<SetCard
							key={set.url}
							set={set}
							isActive={set.url === currentSetUrl}
							onPlay={onPlay}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
