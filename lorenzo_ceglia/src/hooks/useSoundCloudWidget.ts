import { useEffect, useRef, useState } from 'react';

// Minimal SoundCloud Widget API typings
declare global {
	interface Window {
		SC?: SCWidgetAPI;
	}
}

type SCWidgetAPI = {
	Widget: SCWidgetConstructor;
};

type SCWidgetConstructor = {
	(iframe: HTMLIFrameElement): SCWidget;
	Events: {
		READY: string;
		PLAY: string;
		PAUSE: string;
		PLAY_PROGRESS: string;
		FINISH: string;
	};
};

type SCWidget = {
	bind: (event: string, callback: (data?: unknown) => void) => void;
	load: (url: string, options?: Record<string, unknown>) => void;
	play: () => void;
	pause: () => void;
	getCurrentSound: (callback: (sound: { title: string } | null) => void) => void;
};

type PendingLoad = { url: string; autoPlay: boolean };

/**
 * useSoundCloudWidget
 *
 * Encapsulates the SoundCloud Widget API lifecycle:
 * - Loads the SC Widget API script once
 * - Initialises the widget when the iframe element is provided (non-null)
 * - Queues load() calls that arrive before READY fires
 * - Exposes load(), play(), pause(), isPlaying, trackTitle, relativePosition
 *
 * Accepts the iframe element directly (not a ref) so the effect re-runs when
 * the element is lazy-mounted via a callback ref.
 */
export function useSoundCloudWidget(iframe: HTMLIFrameElement | null) {
	const widgetRef = useRef<SCWidget | null>(null);
	const isReadyRef = useRef(false);
	const pendingLoadRef = useRef<PendingLoad | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [trackTitle, setTrackTitle] = useState('');
	const [relativePosition, setRelativePosition] = useState(0);

	// Load SC Widget API script once
	useEffect(() => {
		if (document.querySelector('script[src*="soundcloud.com/player/api.js"]')) return;
		const script = document.createElement('script');
		script.src = 'https://w.soundcloud.com/player/api.js';
		script.async = true;
		document.head.appendChild(script);
	}, []);

	// Initialise widget when iframe element becomes available
	useEffect(() => {
		if (!iframe) return;

		const bindWidget = () => {
			if (!window.SC || !iframe) return;
			const widget = window.SC.Widget(iframe);
			widgetRef.current = widget;

			const onReady = () => {
				isReadyRef.current = true;
				widget.getCurrentSound((sound) => {
					setTrackTitle(sound?.title ?? '');
				});
				// Flush any queued load()
				if (pendingLoadRef.current) {
					const { url, autoPlay } = pendingLoadRef.current;
					pendingLoadRef.current = null;
					isReadyRef.current = false;
					widget.load(url, { auto_play: autoPlay });
				}
			};

			widget.bind(window.SC.Widget.Events.READY, onReady);
			widget.bind(window.SC.Widget.Events.PLAY, () => {
				setIsPlaying(true);
				widget.getCurrentSound((sound) => setTrackTitle(sound?.title ?? ''));
			});
			widget.bind(window.SC.Widget.Events.PAUSE, () => setIsPlaying(false));
			widget.bind(window.SC.Widget.Events.FINISH, () => setIsPlaying(false));
			widget.bind(window.SC.Widget.Events.PLAY_PROGRESS, (data?: unknown) => {
				const e = data as { relativePosition: number };
				setRelativePosition(e.relativePosition);
			});
		};

		if (window.SC) {
			bindWidget();
		} else {
			const script = document.querySelector<HTMLScriptElement>(
				'script[src*="soundcloud.com/player/api.js"]',
			);
			if (script) {
				script.addEventListener('load', bindWidget);
				return () => script.removeEventListener('load', bindWidget);
			}
		}
	}, [iframe]);

	const load = (url: string, autoPlay = false) => {
		setRelativePosition(0);
		if (!isReadyRef.current || !widgetRef.current) {
			pendingLoadRef.current = { url, autoPlay };
			return;
		}
		isReadyRef.current = false; // READY will fire again after load
		widgetRef.current.load(url, { auto_play: autoPlay });
	};

	const play = () => widgetRef.current?.play();
	const pause = () => widgetRef.current?.pause();

	return { isPlaying, trackTitle, relativePosition, load, play, pause };
}
