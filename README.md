# vandannyhoang.com

Persönliche Homepage von **Van Danny Hoang**, Team Lead & Project Lead Software Engineering bei Stadler Rail.

**Live:** [www.vandannyhoang.com](https://www.vandannyhoang.com)

## Features

- **Hell/Dunkel-Modus**: folgt der Systemeinstellung, umschaltbar und im Browser gespeichert
- **Bento-Grid** mit animierten Kennzahlen
- **Werdegang als Bahnstrecke** mit Haltestellen, auf dem Handy einklappbar
- **Mobiles Menü**, schwebende Navigation und Scroll-Fortschrittsbalken
- **Dezente Animationen**: Scroll-Reveal, wechselnde Headline, Skill-Laufband, Lichtkegel auf Karten
- **Barrierearm**: respektiert „Bewegung reduzieren“, Tastatur- und Screenreader-tauglich

## Tech-Stack

- [React 19](https://react.dev) + [Vite 6](https://vite.dev)
- Reines CSS mit Custom Properties, keine UI-Bibliothek
- Schriften: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) und [Inter](https://fonts.google.com/specimen/Inter)
- Hosting: [Vercel](https://vercel.com)

## Projektstruktur

```
├── index.html          # Meta-Tags, Favicon, Theme-Skript
├── public/
│   ├── logo.svg        # Favicon (VDH in Space Grotesk)
│   └── apple-touch-icon.png
└── src/
    ├── content.js      # Alle Texte und Daten der Seite
    ├── App.jsx         # Aufbau der Seite und kleine Hooks
    ├── index.css       # Design: Farben, Layout, Animationen
    └── main.jsx        # Einstiegspunkt
```

## Inhalte anpassen

Alle Texte stehen in [`src/content.js`](src/content.js): Profil, Kennzahlen, Schwerpunkte, Führungsgrundsätze, Werdegang, Skills und Persönliches. Wer dort etwas ändert, muss den Code nicht anfassen.

Die Farben stehen als Variablen am Anfang von [`src/index.css`](src/index.css), einmal für den Dunkel- und einmal für den Hellmodus.

## Lokal entwickeln

Voraussetzung: [Node.js](https://nodejs.org) 18 oder neuer.

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Entwicklungsserver auf http://localhost:5173
npm run lint     # Code prüfen
npm run build    # Produktions-Build nach dist/
```

## Deployment

Jeder Push auf `main` wird von Vercel automatisch gebaut und auf [vandannyhoang.com](https://www.vandannyhoang.com) veröffentlicht.

---

© Van Danny Hoang. Inhalte und Logo sind nicht zur Weiterverwendung freigegeben.
