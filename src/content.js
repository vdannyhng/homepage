// Alle Texte der Seite an einem Ort – hier anpassen, der Rest passt sich an.

export const profile = {
	name: 'Van Danny Hoang',
	role: 'Team Lead & Project Lead Software Engineering',
	company: 'Stadler Rail',
	origin: '🇨🇭 / 🇻🇳',
	location: 'Amriswil, Thurgau',
	now: 'SDLC-Transformation bei Stadler',
	// Wechselnde Wörter in der Headline
	rotating: ['Teams', 'Prozesse', 'Qualität', 'Software'],
	tagline: 'Ich führe ein Team von 16 Leuten und baue mit ihnen Software, auf die man sich auf der Schiene verlassen kann.',
	intro:
		'Ich verbinde technische Tiefe mit Freude an der Entwicklung von Menschen. Bei Stadler leite ich das Software-Engineering-Team für Diagnose- und Netzwerksysteme und verantworte die Einführung eines unternehmensweiten Software Development Lifecycle. Mein Ziel: ein Umfeld, in dem das Team wächst, Verantwortung übernimmt und technische Exzellenz erreicht.',
	email: 'me@vandannyhoang.com',
	linkedin: 'https://www.linkedin.com/in/vandannyhoang/',
	github: 'https://github.com/vdannyhng',
};

export const stats = [
	{ value: 16, suffix: '', label: 'Menschen im Team' },
	{ value: 10, suffix: '+', label: 'Fahrzeugprojekte mit Diagnose-Verantwortung' },
	{ value: 3, suffix: '+', label: 'Jahre bei Stadler Rail' },
];

// Projekte und Themen, die ich vorantreibe.
export const focus = [
	{
		icon: '🔄',
		title: 'SDLC-Blueprint',
		text: 'Projektleitung für die Definition und unternehmensweite Etablierung eines SDLC-Blueprints. Die Grundlage für standardisierte, harmonisierte Entwicklungsprozesse mit Fokus auf Qualität, Security und Compliance.',
		tags: ['Projektleitung', 'Prozesse', 'Standardisierung'],
	},
	{
		icon: '🛡️',
		title: 'Intrusion Detection System',
		text: 'Projektleitung der IDS-Evaluation zur Überwachung industrieller Netzwerke: OT-Schnittstellen und Anomalieerkennung. Mit viel bereichsübergreifender Abstimmung für eine nachhaltige Entscheidung.',
		tags: ['Cybersecurity', 'OT-Netzwerke', 'Evaluation'],
	},
	{
		icon: '🚆',
		title: 'Diagnose für Fahrzeugprojekte',
		text: 'Diagnose-Verantwortung für über zehn Fahrzeugprojekte: von Konzeption und Architektur über Testplanung bis zur Abstimmung mit Kunden und Lieferanten. Dazu die Wissensdatenbank der Softwareabteilung.',
		tags: ['Diagnose', 'Architektur', 'Systemintegration'],
	},
];

export const principles = [
	{
		icon: '🧭',
		title: 'Klare Strukturen',
		text: 'Klare Strukturen, gezieltes Coaching und verlässlicher Wissenstransfer sind für mich die Basis für Motivation, Erfolg und Teamgeist.',
	},
	{
		icon: '🤝',
		title: 'Vertrauen & Offenheit',
		text: 'Ich gestalte ein Umfeld, in dem das Team wachsen und Verantwortung übernehmen kann und Fehler gemeinsam gelöst werden.',
	},
	{
		icon: '🎯',
		title: 'Komplexes einfach machen',
		text: 'Aus komplexen Themen klare Ziele, pragmatische Abläufe und nachvollziehbare Entscheidungen machen. Das habe ich bei SDLC und IDS gelernt.',
	},
	{
		icon: '🛠️',
		title: 'Technische Tiefe',
		text: 'Als zertifizierter Softwarearchitekt kann ich technisch mitreden, unterstützen und Hindernisse aus dem Weg räumen.',
	},
];

// Stationen des Werdegangs – neueste zuerst. type: 'Beruf' | 'Bildung' | 'Zertifikat'
export const journey = [
	{
		when: 'Seit Mai 2026',
		type: 'Beruf',
		title: 'Team Lead & Project Lead Software Engineering',
		place: 'Stadler Rail · Bussnang',
		text: 'Fachliche und personelle Führung von 16 Mitarbeitenden im Bereich Diagnose- und Netzwerksysteme. Projektleitung SDLC und Förderung von Engineering Excellence durch Standards, Wissensaufbau und kontinuierliche Verbesserung.',
		current: true,
	},
	{
		when: '2025',
		type: 'Zertifikat',
		title: 'iSAQB® Certified Professional for Software Architecture',
		place: 'Foundation Level (CPSA-F)',
		text: 'Zertifizierung in Softwarearchitektur als Fundament für gute technische Entscheidungen.',
	},
	{
		when: 'Okt. 2023 – Mai 2026',
		type: 'Beruf',
		title: 'Softwareentwickler & -architekt Diagnosesysteme',
		place: 'Stadler Rail · Bussnang',
		text: 'Diagnose-Verantwortlicher für über zehn Fahrzeugprojekte, Leitung SDLC-Blueprint und IDS-Evaluation. Fachliche Führung von Praktikanten und neuen Mitarbeitenden, von der Einarbeitung bis zur Weiterentwicklung.',
	},
	{
		when: '2021 – 2023',
		type: 'Bildung',
		title: 'Masterstudium Technische Informatik',
		place: 'Hochschule München',
		text: 'Schwerpunkte Robotik, Machine Learning und autonome Systeme.',
	},
	{
		when: '2019',
		type: 'Beruf',
		title: 'Praktikant Elektroplanung',
		place: 'ZF Friedrichshafen AG',
		text: 'Stromlaufpläne in EPlan und Entwicklung eines Tools zur Konvertierung bestehender EPlan-5-Projekte.',
	},
	{
		when: '2018 – 2019',
		type: 'Beruf',
		title: 'Tutor Regelungstechnik',
		place: 'Hochschule München',
		text: 'Betreuung von Studierenden, Abnahme von Laborversuchen und Leitung von Übungsstunden. Meine erste Erfahrung darin, Wissen weiterzugeben.',
	},
	{
		when: '2017 – 2021',
		type: 'Bildung',
		title: 'B.Eng. Elektrotechnik und Informationstechnik',
		place: 'Hochschule München',
		text: 'Spezialisierung auf Automatisierungstechnik, technische Informatik und hardwarenahe Softwareentwicklung.',
	},
	{
		when: '2013 – 2023',
		type: 'Beruf',
		title: 'Techniker',
		place: 'Elektro Van Du · Familienbetrieb, Lindau',
		text: 'Elektroinstallationen und Smart-Home-Lösungen im Betrieb meines Vaters. Dazu Auftragsabwicklung, Kundenkontakt und die Mitarbeit bei der Auswahl neuer Mitarbeitender.',
	},
];

export const skills = [
	{
		group: 'Leadership',
		items: ['Führung & Coaching', 'Einarbeitung & Mentoring', 'Projektleitung', 'Stakeholder-Kommunikation', 'Wissensvermittlung', 'Recruiting'],
	},
	{
		group: 'Engineering',
		items: ['Softwarearchitektur (CPSA-F)', 'SDLC', 'Cybersecurity / IDS', 'Diagnosesysteme', 'Testing', 'Technische Dokumentation'],
	},
	{
		group: 'Tech',
		items: ['Java', 'Python', 'C / C++', 'VBA', 'JavaScript / React', 'Linux', 'ROS', 'Git', 'CI/CD', 'TensorFlow / Keras'],
	},
];

// Persönliches – abseits vom Job.
export const personal = [
	{
		icon: '🗣️',
		title: 'Sprachen',
		items: ['Deutsch (Muttersprache)', 'Vietnamesisch (Muttersprache)', 'Englisch (fliessend)', 'Latein (Latinum)'],
	},
	{
		icon: '🎾',
		title: 'Ausgleich',
		items: ['Tennis', 'Squash', 'Basketball', 'Kraftsport', 'Klavier'],
	},
	{
		icon: '🔧',
		title: 'Heimprojekte',
		items: ['Pflanzenbewässerung (ESP32)', 'Smart Mirror (Raspberry Pi)', 'Reaktives Lichtsystem (Arduino)'],
	},
];
