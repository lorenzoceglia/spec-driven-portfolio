export type OSProject = {
	name: string;
	description: string;
	url: string;
	language: string;
	type: 'library' | 'contribution';
	npmUrl?: string;
	stars?: number;
	platform?: 'github' | 'gitlab';
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
	{
		name: 'company-playbook',
		description:
			"Fixed a flex layout bug causing the page body to not fill the viewport height on SparkFabrik's engineering playbook website.",
		url: 'https://github.com/sparkfabrik/company-playbook/pull/297',
		language: 'CSS',
		type: 'contribution',
	},
	{
		name: 'plugin-rest-cache',
		description:
			'Fixed broken JSON objects in two documentation examples of the Strapi REST cache plugin, preventing misconfiguration for users following the setup guide.',
		url: 'https://github.com/strapi-community/plugin-rest-cache/pull/56',
		language: 'Docs',
		type: 'contribution',
	},
	{
		name: 'react-hook-form',
		description:
			'Refined the Italian README translation across the official docs of one of the most widely used React form libraries (44k+ ⭐), improving clarity and natural phrasing for Italian-speaking developers.',
		url: 'https://github.com/react-hook-form/react-hook-form/pull/13321',
		language: 'Docs',
		type: 'contribution',
	},
	{
		name: 'ryujinx',
		description:
			'Contributed the Italian language translation to Ryujinx, a popular open-source Nintendo Switch emulator, making it accessible to Italian-speaking users.',
		url: 'https://git.ryujinx.app/ryubing/ryujinx/-/merge_requests/148',
		language: 'i18n',
		type: 'contribution',
		platform: 'gitlab',
	},
];
