export type OSProject = {
	name: string;
	description: string;
	url: string;
	language: string;
	type: 'library' | 'contribution';
	npmUrl?: string;
	stars?: number;
};

export const openSourceProjects: OSProject[] = [
	{
		name: 'react-kiosk-keyboard',
		description:
			'React virtual keyboard component for touch screen and kiosk applications. Multiple layouts, themes, and full TypeScript support.',
		url: 'https://github.com/lorenzoceglia/react-kiosk-keyboard',
		npmUrl: 'https://www.npmjs.com/package/@lorenzo.ceglia/react-kiosk-keyboard',
		language: 'TypeScript',
		type: 'library',
	},
	{
		name: 'mp3-coverify',
		description:
			'Node.js library that automatically fetches and embeds high-quality album covers into MP3 files using Spotify, iTunes, MusicBrainz, and Discogs.',
		url: 'https://github.com/lorenzoceglia/mp3-coverify',
		npmUrl: 'https://www.npmjs.com/package/mp3-coverify',
		language: 'Node.js',
		type: 'library',
	},
];
