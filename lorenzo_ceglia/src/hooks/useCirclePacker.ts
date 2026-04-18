import { useState, useEffect, useRef, useMemo } from 'react';
import type { TechItem } from '../data/techStack';

export type PackedCircle = {
	id: string;
	x: number;
	y: number;
	r: number;
	item: TechItem;
};

const CONFIDENCE_RADIUS: Record<number, number> = {
	5: 48,
	4: 38,
	3: 30,
	2: 23,
	1: 17,
};

const GAP = 3;

/**
 * Given two placed circles A and B, returns the (up to 2) positions where
 * a new circle of radius `r` (with gap) is exactly tangent to both.
 * Uses the circle-circle intersection formula (Apollonius-style).
 */
function findTangentCandidates(
	A: { x: number; y: number; r: number },
	B: { x: number; y: number; r: number },
	r: number,
	gap: number,
): Array<{ x: number; y: number }> {
	const R1 = A.r + r + gap;
	const R2 = B.r + r + gap;
	const dx = B.x - A.x;
	const dy = B.y - A.y;
	const d = Math.sqrt(dx * dx + dy * dy);

	if (d === 0 || d > R1 + R2 || d < Math.abs(R1 - R2)) return [];

	const a = (R1 * R1 - R2 * R2 + d * d) / (2 * d);
	const h2 = R1 * R1 - a * a;
	if (h2 < 0) return [];
	const h = Math.sqrt(h2);

	const mx = A.x + (a * dx) / d;
	const my = A.y + (a * dy) / d;

	return [
		{ x: mx + (h * dy) / d, y: my - (h * dx) / d },
		{ x: mx - (h * dy) / d, y: my + (h * dx) / d },
	];
}

/**
 * Packs circles using tangent-based placement.
 * Each new circle is placed at the position (tangent to two existing circles)
 * that is closest to the cloud centre — producing tight, organic clusters
 * rather than a visible spiral.
 */
function packCircles(items: TechItem[]): PackedCircle[] {
	// Sort largest → smallest so big bubbles claim the centre first
	const sorted = [...items].sort(
		(a, b) => (CONFIDENCE_RADIUS[b.confidence] ?? 17) - (CONFIDENCE_RADIUS[a.confidence] ?? 17),
	);

	const placed: PackedCircle[] = [];

	for (const item of sorted) {
		const r = CONFIDENCE_RADIUS[item.confidence] ?? 17;

		if (placed.length === 0) {
			placed.push({ id: item.name, x: 0, y: 0, r, item });
			continue;
		}

		// Build candidate positions
		const candidates: Array<{ x: number; y: number }> = [];

		for (let i = 0; i < placed.length; i++) {
			// Tangent to pairs: exactly touches both circles in the pair
			for (let j = i + 1; j < placed.length; j++) {
				const pts = findTangentCandidates(placed[i], placed[j], r, GAP);
				candidates.push(...pts);
			}
			// Angular samples around each existing circle
			// (covers early placements when there are few pairs, and improves coverage)
			const STEPS = 16;
			const dist = placed[i].r + r + GAP;
			for (let k = 0; k < STEPS; k++) {
				const angle = (k / STEPS) * 2 * Math.PI;
				candidates.push({
					x: placed[i].x + dist * Math.cos(angle),
					y: placed[i].y + dist * Math.sin(angle),
				});
			}
		}

		// Prefer positions closest to the cloud centre (origin)
		candidates.sort((a, b) => a.x * a.x + a.y * a.y - (b.x * b.x + b.y * b.y));

		let found = false;
		for (const candidate of candidates) {
			const valid = placed.every((p) => {
				const dx = p.x - candidate.x;
				const dy = p.y - candidate.y;
				return Math.sqrt(dx * dx + dy * dy) >= p.r + r + GAP - 0.01;
			});
			if (valid) {
				placed.push({ id: item.name, x: candidate.x, y: candidate.y, r, item });
				found = true;
				break;
			}
		}

		if (!found) {
			// Fallback: append to the right of the rightmost circle
			const rightX = Math.max(...placed.map((p) => p.x + p.r));
			placed.push({ id: item.name, x: rightX + r + GAP, y: 0, r, item });
		}
	}

	// Translate so bounding box is centred at (0, 0)
	if (placed.length === 0) return placed;

	const minX = Math.min(...placed.map((p) => p.x - p.r));
	const maxX = Math.max(...placed.map((p) => p.x + p.r));
	const minY = Math.min(...placed.map((p) => p.y - p.r));
	const maxY = Math.max(...placed.map((p) => p.y + p.r));

	const cx = (minX + maxX) / 2;
	const cy = (minY + maxY) / 2;

	return placed.map((p) => ({ ...p, x: p.x - cx, y: p.y - cy }));
}

/**
 * useCirclePacker
 *
 * Computes non-overlapping circle positions using tangent-based placement.
 * Scales the entire cloud proportionally when it exceeds the container width,
 * so the layout is always responsive. Re-packs when items or container width
 * changes. Observes container width via ResizeObserver (debounced 100ms).
 *
 * Coordinate system returned:
 *   circles are centred at (0, 0) before scaling, then shifted so the
 *   topmost bubble sits 12px from the top of the container.
 *   BubblePack positions each bubble as:
 *     left = circle.x - circle.r + cloudWidth / 2
 *     top  = circle.y - circle.r + cloudHeight / 2
 */
export function useCirclePacker(
	items: TechItem[],
	containerRef: React.RefObject<HTMLElement | null>,
): { circles: PackedCircle[]; cloudWidth: number; cloudHeight: number } {
	const [containerWidth, setContainerWidth] = useState(600);
	const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const observer = new ResizeObserver((entries) => {
			const entry = entries[0];
			if (!entry) return;
			const w = entry.contentRect.width;
			if (debounceRef.current) clearTimeout(debounceRef.current);
			debounceRef.current = setTimeout(() => setContainerWidth(w), 100);
		});

		observer.observe(el);
		setContainerWidth(el.getBoundingClientRect().width || 600);

		return () => {
			observer.disconnect();
			if (debounceRef.current) clearTimeout(debounceRef.current);
		};
	}, [containerRef]);

	const result = useMemo(() => {
		const rawCircles = packCircles(items);

		if (rawCircles.length === 0) {
			return { circles: [] as PackedCircle[], cloudWidth: containerWidth, cloudHeight: 100 };
		}

		const minX = Math.min(...rawCircles.map((p) => p.x - p.r));
		const maxX = Math.max(...rawCircles.map((p) => p.x + p.r));
		const minY = Math.min(...rawCircles.map((p) => p.y - p.r));
		const maxY = Math.max(...rawCircles.map((p) => p.y + p.r));

		const naturalW = maxX - minX;
		const naturalH = maxY - minY;

		// Scale down proportionally if cloud is wider than container.
		// 24px total breathing room (12px each side) for the float animation.
		const scale = naturalW > containerWidth - 24 ? (containerWidth - 24) / naturalW : 1;

		const circles = rawCircles.map((p) => ({
			...p,
			x: p.x * scale,
			y: p.y * scale,
			r: p.r * scale,
		}));

		return {
			circles,
			cloudWidth: containerWidth,         // always fill container for centering
			cloudHeight: naturalH * scale + 24, // 12px padding top + bottom
		};
	}, [items, containerWidth]);

	return result;
}
