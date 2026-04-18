import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type BubbleTooltipProps = {
	/** Tech name to display */
	name: string;
	/** Bounding rect of the anchor bubble, captured at click time */
	anchorRect: DOMRect;
};

/**
 * BubbleTooltip
 *
 * Renders a small name tooltip above a tech bubble via React portal.
 * Positioned using the anchor's DOMRect + scrollY/scrollX.
 * Clamped to viewport so edge bubbles don't overflow.
 * z-index 9999 ensures it renders above filter tabs and all section content.
 */
export function BubbleTooltip({ name, anchorRect }: BubbleTooltipProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [pos, setPos] = useState({ top: -9999, left: -9999, visible: false });

	// Measure tooltip after first paint, then compute clamped position
	useEffect(() => {
		if (!ref.current) return;
		const w = ref.current.offsetWidth;
		const h = ref.current.offsetHeight;

		const rawLeft = anchorRect.left + anchorRect.width / 2;
		const top = anchorRect.top + window.scrollY - h - 8;
		const left = Math.max(
			w / 2 + 8,
			Math.min(rawLeft, window.innerWidth - w / 2 - 8),
		);

		setPos({ top, left, visible: true });
	}, [anchorRect]);

	return createPortal(
		<div
			ref={ref}
			style={{
				position: 'absolute',
				top: pos.top,
				left: pos.left,
				transform: 'translateX(-50%)',
				zIndex: 9999,
				opacity: pos.visible ? 1 : 0,
				pointerEvents: 'none',
			}}
			className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 shadow-md whitespace-nowrap"
		>
			{name}
		</div>,
		document.body,
	);
}
