import { useState } from 'react';
import type { IconType } from 'react-icons';

type TechBadgeProps = {
	name: string;
	icon: IconType;
	color: string;
};

/**
 * TechBadge
 *
 * Displays a technology icon and name. Neutral gray by default; reveals
 * the technology's brand color on hover via a smooth CSS transition.
 */
export function TechBadge({ name, icon: Icon, color }: TechBadgeProps) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="flex flex-col items-center gap-2 p-4 rounded-xl cursor-default select-none"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<Icon
				size={36}
				style={{
					color: hovered ? color : '#94a3b8',
					transition: 'color 250ms ease',
				}}
				aria-hidden="true"
			/>
			<span
				className="text-xs font-medium tracking-wide"
				style={{
					color: hovered ? color : '#64748b',
					transition: 'color 250ms ease',
				}}
			>
				{name}
			</span>
		</div>
	);
}
