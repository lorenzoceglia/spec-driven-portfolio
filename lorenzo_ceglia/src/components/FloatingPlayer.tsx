import { useEffect, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa6';
import { SiSoundcloud } from 'react-icons/si';
import type { DJSet } from '../data/djSets';
import { useSoundCloudWidget } from '../hooks/useSoundCloudWidget';

type FloatingPlayerProps = {
	isOpen: boolean;
	currentSet: DJSet | null;
};

function getEmbedUrl(url: string) {
	return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&show_artwork=false&visual=false&auto_play=false`;
}

/**
 * FloatingPlayer
 *
 * Sticky bottom bar that appears when the hero scrolls out of view.
 * Contains a hidden SoundCloud iframe controlled via the Widget API.
 * Displays cover art, set title, and play/pause + SoundCloud link.
 */
export function FloatingPlayer({ isOpen, currentSet }: FloatingPlayerProps) {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const { isPlaying, trackTitle, load, play, pause } = useSoundCloudWidget(iframeRef);

	// Capture the initial embed URL once (iframe src never changes as a React prop)
	const initialEmbedUrl = useRef(currentSet ? getEmbedUrl(currentSet.url) : '');

	// Track previous URL to avoid re-loading the same set on first mount
	const prevUrlRef = useRef<string | undefined>(undefined);

	useEffect(() => {
		if (!currentSet) return;
		if (prevUrlRef.current === undefined) {
			// First render — iframe src already has this URL
			prevUrlRef.current = currentSet.url;
			return;
		}
		if (prevUrlRef.current === currentSet.url) return;
		prevUrlRef.current = currentSet.url;
		load(currentSet.url, true);
	}, [currentSet?.url]); // eslint-disable-line react-hooks/exhaustive-deps

	const displayTitle = trackTitle || currentSet?.title || '';

	return (
		<>
			{/* Hidden iframe — the actual audio source */}
			<iframe
				ref={iframeRef}
				src={initialEmbedUrl.current}
				title="SoundCloud Player"
				allow="autoplay"
				className="absolute w-0 h-0 overflow-hidden pointer-events-none"
				aria-hidden="true"
			/>

			{/* Floating player bar */}
			<div
				className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800"
				style={{
					transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
					transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
				}}
			>
				<div className="max-w-5xl mx-auto px-4 h-16 flex items-center gap-4">
					{/* Cover art */}
					{currentSet && (
						<img
							src={currentSet.coverUrl}
							alt={currentSet.title}
							className="w-10 h-10 rounded object-cover flex-shrink-0"
						/>
					)}

					{/* Track info */}
					<div className="flex-1 min-w-0">
						<p className="text-white text-sm font-medium truncate">
							{displayTitle || 'Loading…'}
						</p>
						<p className="text-slate-500 text-xs">Lorenzo Ceglia</p>
					</div>

					{/* Controls */}
					<div className="flex items-center gap-3 flex-shrink-0">
					<button
						type="button"
						onClick={() => (isPlaying ? pause() : play())}
						aria-label={isPlaying ? 'Pause' : 'Play'}
						className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600 text-white transition-colors"
					>
							{isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
						</button>

						{currentSet && (
							<a
								href={currentSet.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Open on SoundCloud"
								className="text-slate-500 hover:text-orange-400 transition-colors"
							>
								<SiSoundcloud size={20} />
							</a>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
