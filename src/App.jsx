import { useEffect, useRef, useState } from 'react';
import { profile, stats, focus, principles, journey, skills, personal } from './content.js';

// Fades elements with the "reveal" class in once they scroll into view.
function useReveal() {
	useEffect(() => {
		const els = document.querySelectorAll('.reveal');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15 }
		);
		els.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);
}

// Light/dark theme, remembered per browser; falls back to the system setting.
function useTheme() {
	const [theme, setTheme] = useState(() => {
		try {
			return localStorage.getItem('theme');
		} catch {
			return null;
		}
	});

	useEffect(() => {
		if (theme) document.documentElement.dataset.theme = theme;
		try {
			if (theme) localStorage.setItem('theme', theme);
		} catch {
			// storage blocked – theme just won't be remembered
		}
	}, [theme]);

	const toggle = () => {
		const current = theme ?? (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
		setTheme(current === 'dark' ? 'light' : 'dark');
	};
	return toggle;
}

// Counts from 0 to `to` once the number becomes visible.
function CountUp({ to }) {
	const ref = useRef(null);
	const [value, setValue] = useState(0);

	useEffect(() => {
		const el = ref.current;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			observer.disconnect();
			const start = performance.now();
			const duration = 1200;
			const tick = (now) => {
				const t = Math.min((now - start) / duration, 1);
				setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
				if (t < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [to]);

	return <span ref={ref}>{value}</span>;
}

// Cycles through words with a slide animation.
function RotatingWord({ words }) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
		return () => clearInterval(id);
	}, [words.length]);

	return (
		<span className="rotator">
			<span key={index} className="rotator-word accent">{words[index]}</span>
		</span>
	);
}

// Moves the spotlight on cards to follow the cursor.
function trackSpotlight(e) {
	const card = e.target.closest('.spot');
	if (!card) return;
	const rect = card.getBoundingClientRect();
	card.style.setProperty('--x', `${e.clientX - rect.left}px`);
	card.style.setProperty('--y', `${e.clientY - rect.top}px`);
}

function App() {
	useReveal();
	const toggleTheme = useTheme();
	const initials = profile.name.split(' ').map((p) => p[0]).join('');
	const tech = skills.flatMap((g) => g.items);

	return (
		<div onPointerMove={trackSpotlight}>
			<div className="progress" aria-hidden="true" />

			<nav className="nav">
				<a href="#top" className="nav-logo">{initials}</a>
				<div className="nav-links">
					<a href="#projekte">Projekte</a>
					<a href="#fuehrung">Führung</a>
					<a href="#werdegang">Werdegang</a>
				</div>
				<button className="theme-toggle" onClick={toggleTheme} aria-label="Hell/Dunkel umschalten">
					<span className="icon-sun">☀︎</span>
					<span className="icon-moon">☾</span>
				</button>
				<a href="#kontakt" className="nav-cta">Kontakt</a>
			</nav>

			<header id="top" className="hero">
				<div className="aurora" aria-hidden="true">
					<span />
					<span />
					<span />
				</div>
				<div className="container">
					<p className="eyebrow reveal">
						<span className="pulse" /> Aktuell: {profile.now}
					</p>
					<h1 className="reveal">
						{profile.name}
						<span className="h1-sub">
							baut <RotatingWord words={profile.rotating} />
						</span>
					</h1>
					<p className="tagline reveal">{profile.tagline}</p>
					<div className="hero-actions reveal">
						<a href="#kontakt" className="btn btn-primary">Lass uns sprechen →</a>
						<a href={profile.linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">LinkedIn ↗</a>
					</div>
				</div>
				<div className="rail" aria-hidden="true">
					<div className="rail-train" />
				</div>
			</header>

			<main>
				<section className="container bento">
					<div className="tile tile-about spot reveal">
						<p className="tile-kicker">Über mich</p>
						<p className="tile-text">{profile.intro}</p>
						<p className="tile-muted">{profile.role} · {profile.company}</p>
					</div>
					{stats.map((s) => (
						<div key={s.label} className="tile tile-stat spot reveal">
							<div className="stat-value">
								<CountUp to={s.value} />{s.suffix}
							</div>
							<div className="stat-label">{s.label}</div>
						</div>
					))}
					<div className="tile tile-place spot reveal">
						<p className="tile-kicker">Basis</p>
						<p className="tile-big">{profile.location}</p>
						<p className="tile-muted">Wurzeln: {profile.origin}</p>
					</div>
				</section>

				<div className="marquee" aria-label="Skills">
					<div className="marquee-track">
						{[...tech, ...tech].map((t, i) => (
							<span key={i} aria-hidden={i >= tech.length}>{t}</span>
						))}
					</div>
				</div>

				<section id="projekte" className="container section">
					<p className="section-kicker reveal">01 · Was ich bewege</p>
					<h2 className="reveal">Aktuelle Schwerpunkte</h2>
					<div className="grid-3">
						{focus.map((f, i) => (
							<article key={f.title} className="card spot reveal" style={{ transitionDelay: `${i * 80}ms` }}>
								<div className="card-icon">{f.icon}</div>
								<h3>{f.title}</h3>
								<p>{f.text}</p>
								<ul className="tags">
									{f.tags.map((t) => <li key={t}>{t}</li>)}
								</ul>
							</article>
						))}
					</div>
				</section>

				<section id="fuehrung" className="container section">
					<p className="section-kicker reveal">02 · Führung</p>
					<h2 className="reveal">Wie ich führe</h2>
					<div className="grid-2">
						{principles.map((p, i) => (
							<article key={p.title} className="card spot reveal" style={{ transitionDelay: `${i * 80}ms` }}>
								<span className="card-num">0{i + 1}</span>
								<div className="card-icon">{p.icon}</div>
								<h3>{p.title}</h3>
								<p>{p.text}</p>
							</article>
						))}
					</div>
				</section>

				<section id="werdegang" className="container section">
					<p className="section-kicker reveal">03 · Werdegang</p>
					<h2 className="reveal">Meine Strecke</h2>
					<ol className="timeline">
						{journey.map((j) => (
							<li key={j.title} className={`stop reveal${j.current ? ' current' : ''}`}>
								<span className="stop-dot" />
								<span className="stop-when">
									{j.when}
									<span className={`stop-type type-${j.type.toLowerCase()}`}>{j.type}</span>
								</span>
								<h3>{j.title}</h3>
								<p className="stop-place">{j.place}</p>
								<p>{j.text}</p>
							</li>
						))}
					</ol>
				</section>

				<section id="skills" className="container section">
					<p className="section-kicker reveal">04 · Skills</p>
					<h2 className="reveal">Werkzeugkasten</h2>
					<div className="grid-3">
						{skills.map((g) => (
							<div key={g.group} className="card spot reveal">
								<h3>{g.group}</h3>
								<ul className="chips">
									{g.items.map((item) => <li key={item}>{item}</li>)}
								</ul>
							</div>
						))}
					</div>
				</section>

				<section id="persoenlich" className="container section">
					<p className="section-kicker reveal">05 · Persönlich</p>
					<h2 className="reveal">Abseits vom Job</h2>
					<div className="grid-3">
						{personal.map((p) => (
							<div key={p.title} className="card spot reveal">
								<div className="card-icon">{p.icon}</div>
								<h3>{p.title}</h3>
								<ul className="chips">
									{p.items.map((item) => <li key={item}>{item}</li>)}
								</ul>
							</div>
						))}
					</div>
				</section>

				<section id="kontakt" className="container section">
					<div className="contact reveal">
						<p className="section-kicker">06 · Kontakt</p>
						<h2>Nächster Halt: ein gutes Gespräch.</h2>
						<p>Ob Austausch über Führung, Engineering oder einfach ein Kaffee – ich freue mich über deine Nachricht.</p>
						<a href={`mailto:${profile.email}`} className="contact-mail">{profile.email}</a>
						<div className="hero-actions">
							<a href={profile.linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">LinkedIn ↗</a>
							<a href={profile.github} className="btn btn-ghost" target="_blank" rel="noreferrer">GitHub ↗</a>
						</div>
					</div>
				</section>
			</main>

			<footer className="footer container">
				<p>© {new Date().getFullYear()} {profile.name}</p>
				<p>Gebaut mit React &amp; Kaffee.</p>
			</footer>
		</div>
	);
}

export default App;
