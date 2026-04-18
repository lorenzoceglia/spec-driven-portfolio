import { useState } from 'react';
import type { TechItem } from '../data/techStack';

type FloatingBubbleProps = {
	x: number;
	y: number;
	r: number;
	item: TechItem;
	animDelay: number;
	isTransitioning: boolean;
	isActive?: boolean;
	onClick?: () => void;
	style?: React.CSSProperties;
};

/**
 * FloatingBubble
 *
 * A single circular tech bubble, absolutely positioned within BubblePack.
 * Direction-B hover: slate-50 + border at rest → bg-slate-900 + white icon.
 * Label inside bubble for r ≥ 30 (confidence 3–5).
 * Click fires `onClick` — BubblePack manages the portal tooltip lifecycle.
 * Floats with a staggered CSS keyframe animation.
 */
export function FloatingBubble({
	x,
	y,
	r,
	item,
	animDelay,
	isTransitioning,
	isActive: _isActive,
	onClick,
	style,
}: FloatingBubbleProps) {
	const [hovered, setHovered] = useState(false);

	const diameter = r * 2;
	// Icon size scales with the bubble radius (~80% of r) so it stays
	// proportional after the packer's mobile scale-down.
	const iconSize = Math.max(10, Math.round(r * 0.8));
	const showLabelInside = r >= 30;
	const animDuration = 5 + (animDelay % 3);

	return (
		<div
			style={{
				position: 'absolute',
				left: x - r,
				top: y - r,
				width: diameter,
				height: diameter,
				animationName: 'floatBubble',
				animationDuration: `${animDuration}s`,
				animationTimingFunction: 'ease-in-out',
				animationIterationCount: 'infinite',
				animationDelay: `${animDelay * 0.35}s`,
				animationPlayState: isTransitioning ? 'paused' : 'running',
				transition: 'transform 350ms ease, opacity 200ms ease',
				cursor: onClick ? 'pointer' : 'default',
				...style,
			}}
			onClick={(e) => {
				e.stopPropagation();
				onClick?.();
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{/* Bubble circle */}
			<div
				style={{
					width: '100%',
					height: '100%',
					borderRadius: '50%',
					backgroundColor: hovered ? '#0f172a' : '#f8fafc',
					border: hovered ? '1px solid #0f172a' : '1px solid #e2e8f0',
					transition: 'background-color 200ms ease, border-color 200ms ease',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				gap: showLabelInside ? 2 : 0,
				userSelect: 'none',
				}}
			>
				<item.icon
					size={iconSize}
					style={{
						color: hovered ? 'white' : '#94a3b8',
						transition: 'color 200ms ease',
						flexShrink: 0,
					}}
					aria-hidden="true"
				/>
				{showLabelInside && (
					<span
						style={{
							fontSize: 10,
							fontWeight: 500,
							color: hovered ? 'white' : '#64748b',
							transition: 'color 200ms ease',
							textAlign: 'center',
							lineHeight: 1.2,
							maxWidth: diameter - 8,
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
						}}
					>
						{item.name}
					</span>
				)}
			</div>
		</div>
	);
}
