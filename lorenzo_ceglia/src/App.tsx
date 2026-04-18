import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { TechStackSection } from './components/TechStackSection';
import { CompaniesSection } from './components/CompaniesSection';
import { OpenSourceSection } from './components/OpenSourceSection';
import { BSideSection } from './components/BSideSection';
import { FloatingPlayer } from './components/FloatingPlayer';
import { techStack } from './data/techStack';
import { companies } from './data/companies';
import { openSourceProjects } from './data/openSource';
import { djSets } from './data/djSets';
import type { SocialLink } from './components/Footer';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const socialLinks: SocialLink[] = [
	{ icon: FaLinkedin, href: 'https://linkedin.com/in/lorenzoceglia', label: 'LinkedIn' },
	{ icon: FaInstagram, href: 'https://instagram.com/lorenzo.ceglia', label: 'Instagram' },
	{ icon: FaGithub, href: 'https://github.com/lorenzoceglia', label: 'GitHub' },
	{ icon: MdEmail, href: 'mailto:ceglia.lorenzo@gmail.com', label: 'Email' },
];

export function App() {
	const [currentSetUrl, setCurrentSetUrl] = useState<string | null>(null);
	const [isFloatingOpen, setIsFloatingOpen] = useState(false);

	// Observe the hero wrapper — show floating player when hero leaves viewport
	const [heroRef, heroVisible] = useIntersectionObserver<HTMLDivElement>({
		triggerOnce: false,
		threshold: 0,
	});
	const hasHeroBeenVisible = useRef(false);

	useEffect(() => {
		if (heroVisible) {
			hasHeroBeenVisible.current = true;
			setIsFloatingOpen(false);
		} else if (hasHeroBeenVisible.current) {
			setIsFloatingOpen(true);
		}
	}, [heroVisible]);

	const currentSet = djSets.find((s) => s.url === currentSetUrl) ?? null;

	return (
		<div className={`flex flex-col min-h-screen${isFloatingOpen ? ' pb-16' : ''}`}>
			<Header name="Lorenzo Ceglia" />

			<main className="flex-1">
				<div ref={heroRef}>
					<HeroSection
						name="Lorenzo Ceglia"
						role="Software Engineer"
						bio="Software engineer obsessed with clean UIs and open source. Also responsible for clearing the dance floor at least once a weekend."
						chips={[
							{ label: '</> Code by day' },
							{ label: '🎧 B-Side', href: '#b-side' },
						]}
					/>
				</div>
				<TechStackSection techs={techStack} />
				<CompaniesSection companies={companies} />
				<OpenSourceSection projects={openSourceProjects} />
				<BSideSection
					sets={djSets}
					currentSetUrl={currentSetUrl}
					onPlay={setCurrentSetUrl}
				/>
			</main>

			<Footer name="Lorenzo Ceglia" links={socialLinks} />

			<FloatingPlayer isOpen={isFloatingOpen} currentSet={currentSet} sets={djSets} onSetChange={setCurrentSetUrl} />
		</div>
	);
}
