# EKON 30 Workshop: Moderne Web-Applikationen mit React und Material-UI

Ein vierstündiger, geführter Workshop für Entwickler:innen, insbesondere aus der Desktopentwicklung. Das Starterprojekt ist ein kleiner Session-Katalog, den wir schrittweise mit TypeScript, React, Material UI, REST-Daten und Browser-Werkzeugen erweitern.

## Voraussetzungen

- Node.js 24 oder neuer und npm
- Git
- VS Code
- aktueller Browser mit Developer Tools

## Start

```bash
git clone https://github.com/harrybin/ekon30-react-typescript-workshop.git
cd ekon30-react-typescript-workshop
npm install
npm run dev
```

Die lokale Adresse wird von Vite im Terminal ausgegeben. Für einen Produktions-Build:

```bash
npm run build
```

## Demo Time für den Workshop

Die VS-Code-Erweiterung [Demo Time](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-demo-time)
installieren und dieses Repository als Workspace öffnen. Im Demo-Time-Bereich
den Act **React-Workshop: Session-Katalog** öffnen und die sieben Szenen
der Reihe nach ausführen; die Buchsymbole öffnen die Moderationshinweise.
Der Zeitplan und die Checkpoints stehen in `.demo/talk-plan.md` und
`.demo/notes.md`.

Die Szenen öffnen und markieren Dateien, schreiben aber keine Übungslösungen
und starten keine Befehle. Für Live-Coding eine **eigene Vorführkopie** nutzen,
nicht die Arbeitskopien der Teilnehmenden. Für Wiederholungen genügt es, die
Szenen erneut zu starten und die Referenz im Browser neu zu laden; selbst
geschriebene Änderungen in der Vorführkopie zuvor sichern und nur dort
bewusst zurücksetzen. Es gibt keinen automatischen Git-Reset.

Nach `npm install` und `npm run dev` die vom Server ausgegebene Adresse mit
dem Pfad `/workshop-demo/` öffnen. Das ist eine getrennte, bereits fertige
Referenz-App zum Vergleichen und Vorführen, kein automatisch aufgebauter
Zwischenstand. Auswahl und Filter leben nur im Browser; die Fetch-Schaltflächen
demonstrieren Erfolg und Fehler. Die reguläre Starter-App unter `/` bleibt
unverändert. Der Demo-Pfad ist für den Vite-Entwicklungsserver vorgesehen,
nicht Bestandteil des Produktions-Builds.

## Übungsreihenfolge

1. `exercises/01-tooling.md` - Node.js, npm, Vite, VS Code und Browser-Debugging
2. `exercises/02-typescript.md` - Types, Interfaces, Generics und Datenverträge
3. `exercises/03-components-hooks.md` - Props, Events, funktionale Komponenten und Hooks
4. `exercises/04-material-ui.md` - MUI-Komponenten, Theme, Layout und CSS
5. `exercises/05-context.md` - State, Hooks und React Context
6. `exercises/06-fetch.md` - REST-Daten, Fetch API und Fehlerzustände
7. `exercises/optional.md` - AutoRest, Playwright, App-Konfiguration und Performance

## Struktur

```text
src/                  React-Anwendung und typisierte Beispieldaten
public/sessions.json  Beispielantwort für Fetch-Übungen
exercises/            geführte Aufgaben und optionale Vertiefungen
spec/openapi.yaml     OpenAPI-Einstieg für AutoRest
```

Das Projekt ist ein Übungsstarter, kein fertiges Produktionssystem. TypeScript-Typen validieren externe JSON-Daten nicht zur Laufzeit. Frontend-Konfiguration enthält keine Geheimnisse.
