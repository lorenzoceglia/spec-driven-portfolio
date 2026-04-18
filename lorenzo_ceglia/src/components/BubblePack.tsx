import { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
import type { TechItem } from '../data/techStack';
import type { PackedCircle } from '../hooks/useCirclePacker';
import { useCirclePacker } from '../hooks/useCirclePacker';
import { FloatingBubble } from './FloatingBubble';

type ExitingBubble = PackedCircle & { exiting: true };

type BubblePackProps = {
	items: TechItem[];
};

/**
 * BubblePack
 *
 * Renders an organic circle-packed bubble cloud. Positions are computed by
 * useCirclePacker. Tab changes trigger a FLIP animation: staying bubbles
 * translate to their new positions, exiting bubbles scale out.
 *
 * Layout formula (centred coordinate system from the packer):
 *   left = circle.x - circle.r + cloudWidth  / 2
 *   top  = circle.y - circle.r + cloudHeight / 2
 */
export function BubblePack({ items }: BubblePackProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { circles, cloudWidth, cloudHeight } = useCirclePacker(items, containerRef);

	// FLIP: store previous screen positions per bubble id (populated after each render)
	const prevPositionsRef = useRef<Map<string, { left: number; top: number }>>(new Map());

	// Per-bubble transform overrides:
	//   Phase 1 (invert)  — translate(dx, dy), transition: none   → appears at old position
	//   Phase 2 (play)    — translate(0,0),    transition: 350ms  → animates to new position
	const [flipOverrides, setFlipOverrides] = useState<Map<string, React.CSSProperties>>(new Map());

	// Exiting bubbles that need to shrink out
	const [exitingBubbles, setExitingBubbles] = useState<ExitingBubble[]>([]);

	// Transitioning flag — pauses float animation during FLIP
	const [isTransitioning, setIsTransitioning] = useState(false);

	// Ref to bubble wrapper DOM nodes for FLIP snapshotting
	const bubbleRefs = useRef<Map<string, HTMLDivElement>>(new Map());

	const prevItemIdsRef = useRef<Set<string>>(new Set());

	// FLIP implementation
	useLayoutEffect(() => {
		const currentIds = new Set(items.map((i) => i.name));
		const prevIds = prevItemIdsRef.current;

		// Identify exiting items — scale them out
		const newExiting: ExitingBubble[] = [];
		for (const id of prevIds) {
			if (!currentIds.has(id)) {
				const matchingCircle = circles.find((c) => c.id === id);
				if (matchingCircle) {
					newExiting.push({ ...matchingCircle, exiting: true });
				}
			}
		}
		if (newExiting.length > 0) {
			setExitingBubbles(newExiting);
			setTimeout(() => setExitingBubbles([]), 220);
		}

		// FLIP: compute per-bubble deltas for staying bubbles
		if (prevIds.size > 0) {
			const containerRect = containerRef.current?.getBoundingClientRect();
			if (containerRect) {
				const newOverrides = new Map<string, React.CSSProperties>();

				for (const circle of circles) {
					// prevPositionsRef holds screen coords from the PREVIOUS render
					const prevPos = prevPositionsRef.current.get(circle.id);
					if (!prevPos) continue; // new bubble — just appear, no animation

					// New container-relative position (where React just placed this wrapper)
					const newLeft = circle.x - circle.r + cloudWidth / 2;
					const newTop = circle.y - circle.r + cloudHeight / 2;

					// Old container-relative position (where the element was before)
					const oldLeft = prevPos.left - containerRect.left;
					const oldTop = prevPos.top - containerRect.top;

					const dx = oldLeft - newLeft;
					const dy = oldTop - newTop;

					if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
						// Phase 1: INVERT — instantly move to old position
						newOverrides.set(circle.id, {
							transform: `translate(${dx}px, ${dy}px)`,
							transition: 'none',
						});
					}
				}

				if (newOverrides.size > 0) {
					setIsTransitioning(true);
					setFlipOverrides(newOverrides);

					// Phase 2: PLAY — after the browser paints phase 1, animate to final position
					requestAnimationFrame(() => {
						requestAnimationFrame(() => {
							const playOverrides = new Map<string, React.CSSProperties>();
							for (const id of newOverrides.keys()) {
								playOverrides.set(id, {
									transform: 'none',
									transition: 'transform 350ms ease',
								});
							}
							setFlipOverrides(playOverrides);

							// Cleanup after animation completes
							setTimeout(() => {
								setFlipOverrides(new Map());
								setIsTransitioning(false);
							}, 360);
						});
					});
				}
			}
		}

		prevItemIdsRef.current = currentIds;
	}, [items, circles, cloudWidth, cloudHeight]);

	// After every render, snapshot wrapper positions for the NEXT FLIP cycle.
	// Skip while phase-1 FLIP transforms are active — those positions include
	// the invert offset and would corrupt the next animation's "old position".
	useEffect(() => {
		if (flipOverrides.size > 0) return;
		const positions = new Map<string, { left: number; top: number }>();
		for (const [id, el] of bubbleRefs.current) {
			const rect = el.getBoundingClientRect();
			positions.set(id, { left: rect.left, top: rect.top });
		}
		prevPositionsRef.current = positions;
	});

	const setBubbleRef = useCallback((id: string, el: HTMLDivElement | null) => {
		if (el) {
			bubbleRefs.current.set(id, el);
		} else {
			bubbleRefs.current.delete(id);
		}
	}, []);

	return (
		<div
			ref={containerRef}
			style={{
				position: 'relative',
				width: '100%',
				height: cloudHeight,
				transition: 'height 400ms ease',
				overflow: 'hidden',
			}}
		>
			{/* Exiting bubbles — scale out in place */}
			{exitingBubbles.map((circle) => (
				<FloatingBubble
					key={`exiting-${circle.id}`}
					x={circle.x + cloudWidth / 2}
					y={circle.y + cloudHeight / 2}
					r={circle.r}
					item={circle.item}
					animDelay={0}
					isTransitioning={true}
					style={{
						transform: 'scale(0)',
						opacity: 0,
						transition: 'transform 200ms ease, opacity 200ms ease',
						pointerEvents: 'none',
					}}
				/>
			))}

			{/* Active bubbles */}
			{circles.map((circle, index) => {
				const override = flipOverrides.get(circle.id);
				return (
					<div
						key={circle.id}
						ref={(el) => setBubbleRef(circle.id, el)}
						style={{
							position: 'absolute',
							left: circle.x - circle.r + cloudWidth / 2,
							top: circle.y - circle.r + cloudHeight / 2,
							width: circle.r * 2,
							height: circle.r * 2,
							...(override ?? {}),
						}}
					>
						<FloatingBubble
							x={circle.r}
							y={circle.r}
							r={circle.r}
							item={circle.item}
							animDelay={index}
							isTransitioning={isTransitioning}
						/>
					</div>
				);
			})}
		</div>
	);
}
