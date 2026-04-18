import { useCallback, useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaBackwardStep, FaForwardStep } from 'react-icons/fa6';
import { SiSoundcloud } from 'react-icons/si';
import type { DJSet } from '../data/djSets';
import { useSoundCloudWidget } from '../hooks/useSoundCloudWidget';

type FloatingPlayerProps = {
	isOpen: boolean;
	currentSet: DJSet | null;
	sets: DJSet[];
	onSetChange: (url: string) => void;
};

function getEmbedUrl(url: string, autoPlay = false) {
	return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&show_artwork=false&visual=false&auto_play=${autoPlay}`;
}

/**
 * FloatingPlayer
 *
 * Sticky bottom bar that appears when the hero scrolls out of view.
 * Contains a hidden SoundCloud iframe controlled via the Widget API.
 * Shows cover art, waveform with orange progress overlay, track title,
 * and prev / play-pause / next + SoundCloud link controls.
 * When no set is selected, shows an idle placeholder.
 */
export function FloatingPlayer({ isOpen, currentSet, sets, onSetChange }: FloatingPlayerProps) {
	// Lazy-mount the iframe: only add it to the DOM when the user first selects a
	// set, so the SoundCloud widget never tries to render on a 0×0 canvas.
	const [iframeEl, setIframeEl] = useState<HTMLIFrameElement | null>(null);
	const callbackRef = useCallback((el: HTMLIFrameElement | null) => setIframeEl(el), []);
	const [iframeSrc, setIframeSrc] = useState<string | null>(null);
	const isMountedRef = useRef(false);

	const { isPlaying, trackTitle, relativePosition, load, play, pause } =
		useSoundCloudWidget(iframeEl);

	// Track previous URL to avoid re-loading the same set
	const prevUrlRef = useRef<string>('');

	// Load new set whenever currentSet.url changes
	useEffect(() => {
		if (!currentSet) return;
		if (!isMountedRef.current) {
			// First selection: mount the iframe with auto_play=true in the src URL
			setIframeSrc(getEmbedUrl(currentSet.url, true));
			isMountedRef.current = true;
			prevUrlRef.current = currentSet.url;
			return;
		}
		if (prevUrlRef.current === currentSet.url) {
			play();
			return;
		}
		prevUrlRef.current = currentSet.url;
		load(currentSet.url, true);
	}, [currentSet?.url]); // eslint-disable-line react-hooks/exhaustive-deps

	const currentIndex = sets.findIndex((s) => s.url === currentSet?.url);
	const displayTitle = trackTitle || currentSet?.title || '';

	return (
		<>
			{/* Hidden iframe — only mounted after the user first selects a set */}
			{iframeSrc && (
				<iframe
					ref={callbackRef}
					src={iframeSrc}
					title="SoundCloud Player"
					allow="autoplay"
					style={{
						position: 'fixed',
						left: '-10px',
						top: '-10px',
						width: '1px',
						height: '1px',
						pointerEvents: 'none',
					}}
					aria-hidden="true"
				/>
			)}

			{/* Floating player bar */}
			<div
				className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800"
				style={{
					transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
					transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
				}}
			>
			{/* Waveform progress bar */}
			<div className="h-1 w-full bg-slate-800">
				<div
					className="h-full bg-orange-500"
					style={{ width: `${relativePosition * 100}%`, transition: 'width 250ms linear' }}
				/>
			</div>

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
						{currentSet ? (
							<>
								<p className="text-white text-sm font-medium truncate">
									{displayTitle || 'Loading\u2026'}
								</p>
								<p className="text-slate-500 text-xs">Lorenzo Ceglia</p>
							</>
						) : (
							<p className="text-slate-500 text-sm">Select a set to play</p>
						)}
					</div>

					{/* Controls */}
					<div className="flex items-center gap-3 flex-shrink-0">
						{/* Prev */}
						<button
							type="button"
							onClick={() =>
								currentIndex > 0 && onSetChange(sets[currentIndex - 1].url)
							}
							disabled={!currentSet || currentIndex <= 0}
							aria-label="Previous set"
							className="text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
						>
							<FaBackwardStep size={16} />
						</button>

						{/* Play / Pause */}
						<button
							type="button"
							onClick={() => (isPlaying ? pause() : play())}
							disabled={!currentSet}
							aria-label={isPlaying ? 'Pause' : 'Play'}
							className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
						>
							{isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
						</button>

						{/* Next */}
						<button
							type="button"
							onClick={() =>
								currentIndex < sets.length - 1 &&
								onSetChange(sets[currentIndex + 1].url)
							}
							disabled={!currentSet || currentIndex >= sets.length - 1}
							aria-label="Next set"
							className="text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
						>
							<FaForwardStep size={16} />
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
