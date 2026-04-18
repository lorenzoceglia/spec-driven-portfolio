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
};

export const techStack: TechItem[] = [
	// Frontend
	{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
	{ name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
	{ name: 'Angular', icon: SiAngular, color: '#DD0031', category: 'Frontend' },
	{ name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend' },
	{ name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
	{ name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093', category: 'Frontend' },
	{ name: 'Redux', icon: SiRedux, color: '#764ABC', category: 'Frontend' },
	{ name: 'Redux Saga', icon: SiReduxsaga, color: '#999999', category: 'Frontend' },
	{ name: 'jQuery', icon: SiJquery, color: '#0769AD', category: 'Frontend' },
	{ name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'Frontend' },
	{ name: 'Ionic', icon: SiIonic, color: '#3880FF', category: 'Frontend' },
	{ name: 'React Hook Form', icon: MdCode, color: '#EC5990', category: 'Frontend' },
	{ name: 'Zustand', icon: MdCode, color: '#433E38', category: 'Frontend' },
	// Backend
	{ name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
	{ name: 'Express', icon: SiExpress, color: '#000000', category: 'Backend' },
	{ name: 'PHP', icon: SiPhp, color: '#777BB4', category: 'Backend' },
	{ name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'Backend' },
	{ name: 'Hasura', icon: SiHasura, color: '#1EB4D4', category: 'Backend' },
	// Database
	{ name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database' },
	{ name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
	{ name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
	// Tools
	{ name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'Tools' },
	{ name: 'AWS', icon: FaAws, color: '#FF9900', category: 'Tools' },
	{ name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
	{ name: 'Vite', icon: SiVite, color: '#646CFF', category: 'Tools' },
	{ name: 'Vitest', icon: SiVitest, color: '#6E9F18', category: 'Tools' },
	{ name: 'ESLint', icon: SiEslint, color: '#4B32C3', category: 'Tools' },
	// AI
	{ name: 'GitHub Copilot', icon: SiGithubcopilot, color: '#000000', category: 'AI' },
	{ name: 'OpenCode', icon: MdCode, color: '#6366f1', category: 'AI' },
	{ name: 'OpenSpec', icon: MdCode, color: '#f97316', category: 'AI' },
];
