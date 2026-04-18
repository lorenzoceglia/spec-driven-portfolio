import type { IconType } from 'react-icons';
import {
	SiTypescript,
	SiReact,
	SiAngular,
	SiNextdotjs,
	SiTailwindcss,
	SiStyledcomponents,
	SiRedux,
	SiReduxsaga,
	SiJquery,
	SiBootstrap,
	SiIonic,
	SiNodedotjs,
	SiExpress,
	SiPhp,
	SiGraphql,
	SiHasura,
	SiPostgresql,
	SiMysql,
	SiMongodb,
	SiDocker,
	SiGit,
	SiVite,
	SiVitest,
	SiEslint,
	SiGithubcopilot,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { MdCode } from 'react-icons/md';

export type TechItem = {
	name: string;
	icon: IconType;
	color: string;
	category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'AI';
	confidence: 1 | 2 | 3 | 4 | 5;
};

export const techStack: TechItem[] = [
	// Frontend
	{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend', confidence: 5 },
	{ name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend', confidence: 4 },
	{ name: 'Angular', icon: SiAngular, color: '#DD0031', category: 'Frontend', confidence: 4 },
	{ name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend', confidence: 4 },
	{ name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend', confidence: 3 },
	{ name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093', category: 'Frontend', confidence: 2 },
	{ name: 'Redux', icon: SiRedux, color: '#764ABC', category: 'Frontend', confidence: 3 },
	{ name: 'Redux Saga', icon: SiReduxsaga, color: '#999999', category: 'Frontend', confidence: 2 },
	{ name: 'jQuery', icon: SiJquery, color: '#0769AD', category: 'Frontend', confidence: 1 },
	{ name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'Frontend', confidence: 2 },
	{ name: 'Ionic', icon: SiIonic, color: '#3880FF', category: 'Frontend', confidence: 2 },
	{ name: 'React Hook Form', icon: MdCode, color: '#EC5990', category: 'Frontend', confidence: 2 },
	{ name: 'Zustand', icon: MdCode, color: '#433E38', category: 'Frontend', confidence: 2 },
	// Backend
	{ name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend', confidence: 4 },
	{ name: 'Express', icon: SiExpress, color: '#000000', category: 'Backend', confidence: 2 },
	{ name: 'PHP', icon: SiPhp, color: '#777BB4', category: 'Backend', confidence: 1 },
	{ name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'Backend', confidence: 3 },
	{ name: 'Hasura', icon: SiHasura, color: '#1EB4D4', category: 'Backend', confidence: 2 },
	// Database
	{ name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database', confidence: 3 },
	{ name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database', confidence: 1 },
	{ name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database', confidence: 2 },
	// Tools
	{ name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'Tools', confidence: 3 },
	{ name: 'AWS', icon: FaAws, color: '#FF9900', category: 'Tools', confidence: 4 },
	{ name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools', confidence: 3 },
	{ name: 'Vite', icon: SiVite, color: '#646CFF', category: 'Tools', confidence: 2 },
	{ name: 'Vitest', icon: SiVitest, color: '#6E9F18', category: 'Tools', confidence: 1 },
	{ name: 'ESLint', icon: SiEslint, color: '#4B32C3', category: 'Tools', confidence: 1 },
	// AI
	{ name: 'GitHub Copilot', icon: SiGithubcopilot, color: '#000000', category: 'AI', confidence: 3 },
	{ name: 'OpenCode', icon: MdCode, color: '#6366f1', category: 'AI', confidence: 2 },
	{ name: 'OpenSpec', icon: MdCode, color: '#f97316', category: 'AI', confidence: 2 },
];
