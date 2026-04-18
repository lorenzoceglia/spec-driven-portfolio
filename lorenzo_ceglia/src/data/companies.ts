export type Company = {
	name: string;
	role: string;
	period: string;
	description: string;
	url?: string;
};

export const companies: Company[] = [
	{
		name: 'SparkFabrik',
		role: 'Frontend Developer',
		period: '2026 – Present',
		description:
			'Frontend development with AWS serverless infrastructure (Lambda, AppSync). Building scalable cloud-native web applications.',
	},
	{
		name: 'Accenture Italy',
		role: 'Frontend Developer',
		period: '04/2023 – 02/2026',
		description:
			'Major automotive client and Italian public administration apps. Stack: TypeScript 5, React 18, Angular 17, Tailwind, Redux, Docker, Zustand.',
	},
	{
		name: 'Next Adv',
		role: 'Frontend Developer',
		period: '07/2022 – 04/2023',
		description:
			'Front End Lead for React/Next.js apps, Node/Express backend tasks, WordPress PHP customisation. Stack: PostgreSQL, GraphQL, Hasura, React, Next.js 12, Angular 11, Ionic 6, Node.js, Express.',
	},
	{
		name: 'Fabless S.P.A.',
		role: 'Full Stack Developer',
		period: '05/2021 – 07/2022',
		description:
			'Internal dev team, maintenance and evolutionary implementations on proprietary apps. Stack: PHP 7, Bootstrap, CakePHP, MySQL, MongoDB, jQuery, React.',
	},
	{
		name: 'DMXLAB',
		role: 'Full Stack Developer',
		period: '01/2021 – 03/2021',
		description: 'Management software development. Stack: CakePHP, jQuery.',
	},
];
