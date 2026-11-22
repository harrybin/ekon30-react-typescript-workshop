# EKON 30 Workshop: Moderne Web-Applikationen mit React und Material-UI

Ein geführter Workshop für Entwickler:innen, insbesondere aus der Desktopentwicklung. Das Starterprojekt ist ein kleiner Session-Katalog, den wir schrittweise mit TypeScript, React, Material UI, REST-Daten und Browser-Werkzeugen erweitern.

## Voraussetzungen

- Windows mit PowerShell (macOS ist ebenfalls möglich)
- [Node.js](https://nodejs.org/) 24 oder neuer mit npm
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)
- aktueller Browser mit Developer Tools, z. B. Edge oder Chrome

Nach der Installation VS Code gegebenenfalls neu öffnen. Im PowerShell-Terminal
prüfen:

```powershell
node --version
npm.cmd --version
git --version
```

Auf macOS im Terminal dieselben Prüfungen mit `npm` statt `npm.cmd` ausführen.

## Entwicklungscontainer (VS Code)

Alternativ stellt `.devcontainer/devcontainer.json` eine Linux-Umgebung mit
Node.js 24, npm und Git bereit. Die Projektabhängigkeiten werden beim Erstellen
des Containers mit `npm ci` aus dem vorhandenen `package-lock.json` installiert.
Die Demo-Time-Erweiterung wird in VS Code im Container eingerichtet.

Auf dem Host werden VS Code mit der Erweiterung
[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
und eine laufende Docker-Umgebung benötigt (z. B. Docker Desktop; unter Windows
mit aktiviertem WSL 2- oder Hyper-V-Backend). Node.js und Git müssen auf dem
Host nicht installiert sein. Repository-Dateien und Browser bleiben auf dem
Host verfügbar.

Repository in VS Code öffnen und über die Befehlspalette **Dev Containers:
Reopen in Container** auswählen. Im Container-Terminal den Vite-Server so
starten, dass die Portweiterleitung ihn erreicht:

```sh
npm run dev -- --host 0.0.0.0
```

Port 5173 wird an den Host weitergeleitet und im Browser geöffnet. Falls der
Port auf dem Host bereits belegt ist, die von VS Code angezeigte lokale Adresse
verwenden. Die Starter-App ist unter `/` erreichbar, die Referenzdemo unter
`/workshop-demo/`. Den Server im Terminal mit `Ctrl+C` beenden. Build und
Übungen verwenden dieselben Projektbefehle wie auf dem Host, zum Beispiel
`npm run build`.

## VS-Code-Tasks und Vorführung ohne Demo Time

Das Repository als Ordner in VS Code öffnen. Über **Terminal: Run Task**
in der Befehlspalette stehen folgende Tasks bereit:

| Task | Zweck |
| --- | --- |
| `Workshop: Node-Version`, `Workshop: npm-Version`, `Workshop: Git-Version` | Voraussetzungen prüfen |
| `Workshop: Einrichten` | Einmalig Abhängigkeiten aus dem Lockfile mit `npm ci` installieren |
| `Workshop: Dev-Server` | Starter-App und Referenz lokal starten |
| `Workshop: Dev-Server im Container` | Server mit Portweiterleitung im Entwicklungscontainer starten |
| `Workshop: Build` | TypeScript prüfen und Starter-App bauen |

Für eine frische lokale Kopie reicht **Workshop: Einrichten** als einmaliger
Init-Schritt; anschließend **Workshop: Dev-Server** starten und die im
Terminal angezeigte Adresse im Browser öffnen. `npm ci` ersetzt dabei das
generierte Verzeichnis `node_modules`, aber keine Übungsdateien. Im Container
entfällt der Init-Task, da der Container die Abhängigkeiten beim Erstellen
installiert. Den laufenden Server über **Terminal: Terminate Task** beenden.

Für die Vorführung ist Demo Time optional: Die Abschnitte in
`.demo/talk-plan.md` und die konkreten Schritte in `.demo/notes.md` führen
in derselben Reihenfolge durch die Übungen. Die dort genannten Dateien im
Explorer öffnen; Starter-App unter `/` und Referenz unter `/workshop-demo/`
zeigen. Für den TypeScript-Schritt den Build-Task ausführen.

Für eine Wiederholung die Referenzseite im Browser neu laden: Suche, Filter
und Merkliste werden dabei zurückgesetzt. Dafür gibt es keinen Shell-Befehl
und keinen Reset-Task, der Dateien verändert. Selbst geschriebene Änderungen
in einer eigenen Vorführkopie sichern und dort bei Bedarf bewusst
zurücksetzen; Teilnehmendenarbeit wird nicht automatisch zurückgesetzt.

## Start unter Windows

Im PowerShell-Terminal im gewünschten übergeordneten Ordner:

```powershell
git clone https://github.com/harrybin/ekon30-react-typescript-workshop.git
cd ekon30-react-typescript-workshop
npm.cmd ci
npm.cmd run dev
```

`npm.cmd` verwendet unter PowerShell den Windows-Launcher und umgeht eine
mögliche Sperre für `npm.ps1`. Die lokale Adresse wird von Vite im Terminal
ausgegeben; dort die Starter-App im Browser öffnen. Den Server mit `Ctrl+C`
im Terminal beenden. Für einen Produktions-Build im Repository-Root:

```powershell
npm.cmd run build
```

### Alternative: macOS

Im Terminal im gewünschten übergeordneten Ordner:

```sh
git clone https://github.com/harrybin/ekon30-react-typescript-workshop.git
cd ekon30-react-typescript-workshop
npm ci
npm run dev
```

Der Server wird mit `Ctrl+C` beendet. Für den Build im Repository-Root:

```sh
npm run build
```

Hinweise für Coding Agents stehen in `AGENTS.md`.

## Demo Time für den Workshop

Die VS-Code-Erweiterung [Demo Time](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-demo-time)
installieren und dieses Repository als Workspace öffnen. Im Demo-Time-Bereich
den Act **React-Workshop: Session-Katalog** öffnen und die sieben Szenen
der Reihe nach ausführen; die Buchsymbole öffnen die Moderationshinweise.
Der Ablauf und die Checkpoints stehen in `.demo/talk-plan.md` und
`.demo/notes.md`.

Die Szenen öffnen und markieren Dateien, schreiben aber keine Übungslösungen
und starten keine Befehle. Für Live-Coding eine **eigene Vorführkopie** nutzen,
nicht die Arbeitskopien der Teilnehmenden. Für Wiederholungen genügt es, die
Szenen erneut zu starten und die Referenz im Browser neu zu laden; selbst
geschriebene Änderungen in der Vorführkopie zuvor sichern und nur dort
bewusst zurücksetzen. Es gibt keinen automatischen Git-Reset.

Nach dem oben beschriebenen Start die vom Server ausgegebene Adresse mit dem
Pfad `/workshop-demo/` öffnen. Das ist eine getrennte, bereits fertige
Referenz-App zum Vergleichen und Vorführen, kein automatisch aufgebauter
Zwischenstand. Auswahl und Filter leben nur im Browser; die Fetch-Schaltflächen
demonstrieren Erfolg, leere Daten und Fehler. Die reguläre Starter-App unter `/` bleibt
unverändert. Der Demo-Pfad ist für den Vite-Entwicklungsserver vorgesehen,
nicht Bestandteil des Produktions-Builds. Weitere Hinweise stehen in
`workshop-demo/README.md`.

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
workshop-demo/        separate Referenz-App für die Vorführung
spec/openapi.yaml     OpenAPI-Einstieg für AutoRest
```

Das Projekt ist ein Übungsstarter, kein fertiges Produktionssystem. TypeScript-Typen validieren externe JSON-Daten nicht zur Laufzeit. Frontend-Konfiguration enthält keine Geheimnisse.

## Lizenz

Das Repository einschließlich der Referenzdemo steht unter der [MIT-Lizenz](LICENSE).
