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
			'Building production-grade web applications on AWS serverless infrastructure. Working closely with backend and cloud teams to ship scalable features in a fast-moving consulting environment.',
	},
	{
		name: 'Accenture Italy',
		role: 'Frontend Developer',
		period: '04/2023 – 02/2026',
		description:
			'Delivered frontend for a major European automotive client and Italian public administration systems — high-stakes products used by millions, built across large cross-functional teams.',
	},
	{
		name: 'Next Adv',
		role: 'Frontend Developer',
		period: '07/2022 – 04/2023',
		description:
			'Worked as Front End Lead across React and Next.js products, handled Node/Express backend tasks, and delivered WordPress customisations for a diverse digital agency client portfolio.',
	},
	{
		name: 'Fabless S.P.A.',
		role: 'Full Stack Developer',
		period: '05/2021 – 07/2022',
		description:
			'Core member of an in-house dev team maintaining and extending proprietary business applications, covering both frontend and backend responsibilities.',
	},
];
