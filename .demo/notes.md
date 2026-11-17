# Moderationshinweise

Die Szenen öffnen und markieren Dateien; sie ändern keine Dateien und tippen
keinen Code automatisch. Die Referenz-App ist eine fertige Orientierung, keine
Ersatzlösung für die eigene Übung.
Für die Einrichtung und den Serverstart unter Windows PowerShell verwenden;
die Projekt-README beschreibt auch die macOS-Alternative.

1. **Tooling:** npm-Skripte, `index.html`, `src/main.tsx` und
   `vite.config.ts` zeigen. App und DevTools öffnen, Breakpoint setzen,
   schmalen und breiten Viewport vergleichen. Checkpoint: Node im
   Entwicklungsprozess versus JavaScript im Browser.
2. **TypeScript:** `Session` und `ApiResult<T>` untersuchen. In der
   eigenen Vorführkopie ein Feld und einen falschen Wert ausprobieren; Fehler
   lesen und beheben, Build starten. JSON wird nicht durch Typen validiert.
3. **Komponenten/Hooks:** Ausgangs-App und Referenzkarte vergleichen;
   Props und Event erklären. Teilnehmende lagern eine Karte aus und ergänzen
   lokale Auswahl. In der Referenz ist die Merkliste bereits im Context
   umgesetzt; das ist ein Vorausblick auf Schritt 5.
4. **MUI:** AppBar, Cards, Stack und Theme zeigen. Referenz im
   schmalen/breiten Viewport prüfen; Teilnehmende ändern Layout und Theme.
5. **Context:** In der Referenz nach „Browser“ suchen, die gefundene Session
   merken und die Zahl in der AppBar zeigen. Suche löschen und den Trackfilter
   bedienen; abgeleitete Liste und `useFavorites` zeigen.
   Lokal, abgeleitet und gemeinsam genutzten State unterscheiden.
6. **Fetch:** Im Network-Tab „Fetch: Erfolg“, „Fetch: Leer“ und
   „Fetch: Fehler“ wählen; die Antworten und den HTTP-Status vergleichen.
   Die leere Datei liefert ein leeres Array; die fehlende Datei liefert dank
   JSON-Accept-Header einen HTTP-404-Fehler statt der Vite-HTML-Fallbackseite.
   Mit „Fetch: Erfolg“ wiederherstellen und die erhaltene Merkliste zeigen.
   `Response.ok`, `unknown`, Laufzeitvalidierung und Abort erklären. Für den
   Ladezustand Netz im Browser drosseln und danach die Drosselung ausschalten.
7. **Optional/Abschluss:** nach Tempo AutoRest/OpenAPI, Playwright,
   Konfiguration ohne Secrets, Vite/webpack oder gemessene Performance
   besprechen. Die Checkpoints in den Übungsdateien beantworten.

Falls die Referenz nicht startet: die entsprechenden Übungsdateien und den
Referenzcode direkt im Editor zeigen und die Schritte gemeinsam entwickeln.
