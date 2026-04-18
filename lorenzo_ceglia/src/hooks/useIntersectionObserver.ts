import { useEffect, useRef, useState } from 'react';

type Options = {
	threshold?: number;
	rootMargin?: string;
	triggerOnce?: boolean;
};

/**
 * useIntersectionObserver
 *
 * Returns a [ref, isVisible] tuple. Attach `ref` to any DOM element.
 * `isVisible` becomes true when the element enters the viewport.
 *
 * Defaults to `triggerOnce: true` — the element stays visible once revealed.
 * Set `triggerOnce: false` to toggle visibility on scroll in/out.
 */
export function useIntersectionObserver<T extends Element>({
	threshold = 0.15,
	rootMargin = '0px',
	triggerOnce = true,
}: Options = {}): [React.RefObject<T | null>, boolean] {
	const ref = useRef<T | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (triggerOnce) observer.disconnect();
				} else if (!triggerOnce) {
					setIsVisible(false);
				}
			},
			{ threshold, rootMargin },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold, rootMargin, triggerOnce]);

	return [ref, isVisible];
}
