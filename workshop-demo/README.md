# Workshop-Referenz: Session-Katalog

Diese fertige Referenz-App ergänzt die Übungen im Repository; sie ist kein
eigenständiges npm-Projekt. Sie zeigt Komponenten, MUI, Suche, Trackfilter,
eine gemeinsame Merkliste und Fetch-Zustände, ohne die Starter-App oder die
Arbeit der Teilnehmenden zu verändern.

Nach der einmaligen Einrichtung aus der Projekt-README den Server im
Repository-Root unter Windows mit PowerShell starten:

```powershell
npm.cmd run dev
```

Auf macOS im Terminal:

```sh
npm run dev
```

Die vom Vite-Server angezeigte Adresse mit `/workshop-demo/` öffnen. Die
Starter-App bleibt unter `/` erreichbar. Der Referenzpfad ist nur für den
Entwicklungsserver vorgesehen und nicht Teil des Produktions-Builds; der Build
im Repository-Root prüft jedoch auch die TypeScript-Dateien der Referenz.
Den Server im jeweiligen Terminal mit `Ctrl+C` beenden.

Mit **Lokale Daten**, **Fetch: Erfolg**, **Fetch: Leer** und **Fetch: Fehler**
lassen sich unterschiedliche Zustände vorführen. Die leere Antwort liegt in
`public/empty-sessions.json`; die fehlende Datei liefert im Vite-Server mit
dem JSON-Accept-Header HTTP 404. Suche und Merkliste bleiben im Browser;
beim Neuladen werden sie zurückgesetzt. Weitere Moderationshinweise und der
Demo-Time-Ablauf stehen in `.demo/notes.md` und der README im Repository-Root.
Die Projekt-README beschreibt auch die VS-Code-Tasks und die Durchführung
ohne Demo Time; ein dateiverändernder Reset ist nicht erforderlich.

Die Referenz unterliegt der [MIT-Lizenz](../LICENSE) des Repositories.
