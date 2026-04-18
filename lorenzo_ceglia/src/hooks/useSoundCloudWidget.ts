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
	bind: (event: string, callback: () => void) => void;
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
 * - Initialises the widget from an iframe ref
 * - Queues load() calls that arrive before READY fires
 * - Exposes load(), toggle(), isPlaying, trackTitle
 */
export function useSoundCloudWidget(iframeRef: React.RefObject<HTMLIFrameElement | null>) {
	const widgetRef = useRef<SCWidget | null>(null);
	const isReadyRef = useRef(false);
	const pendingLoadRef = useRef<PendingLoad | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [trackTitle, setTrackTitle] = useState('');

	// Load SC Widget API script once
	useEffect(() => {
		if (document.querySelector('script[src*="soundcloud.com/player/api.js"]')) return;
		const script = document.createElement('script');
		script.src = 'https://w.soundcloud.com/player/api.js';
		script.async = true;
		document.head.appendChild(script);
	}, []);

	// Initialise widget when iframe is mounted
	useEffect(() => {
		const iframe = iframeRef.current;
		if (!iframe) return;

		const bindWidget = () => {
			if (!window.SC || !iframeRef.current) return;
			const widget = window.SC.Widget(iframeRef.current);
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
	}, [iframeRef]);

	const load = (url: string, autoPlay = false) => {
		if (!isReadyRef.current || !widgetRef.current) {
			pendingLoadRef.current = { url, autoPlay };
			return;
		}
		isReadyRef.current = false; // READY will fire again after load
		widgetRef.current.load(url, { auto_play: autoPlay });
	};

	const play = () => widgetRef.current?.play();
	const pause = () => widgetRef.current?.pause();

	return { isPlaying, trackTitle, load, play, pause };
}
