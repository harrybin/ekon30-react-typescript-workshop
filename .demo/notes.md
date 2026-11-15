# Moderationshinweise

Zeiten umfassen Vorführung, eigenständige Übung, Fragen und kurze Pausen.
Die Szenen öffnen und markieren Dateien; sie ändern keine Dateien und tippen
keinen Code automatisch. Die Referenz-App ist eine fertige Orientierung, keine
Ersatzlösung für die eigene Übung.

1. **Tooling (20 min):** npm-Skripte, `index.html`, `src/main.tsx` und
   `vite.config.ts` zeigen. App und DevTools öffnen, Breakpoint setzen,
   schmalen und breiten Viewport vergleichen. Checkpoint: Node im
   Entwicklungsprozess versus JavaScript im Browser.
2. **TypeScript (30 min):** `Session` und `ApiResult<T>` untersuchen. In der
   eigenen Vorführkopie ein Feld und einen falschen Wert ausprobieren; Fehler
   lesen und beheben, Build starten. JSON wird nicht durch Typen validiert.
3. **Komponenten/Hooks (40 min):** Ausgangs-App und Referenzkarte vergleichen;
   Props und Event erklären. Teilnehmende lagern eine Karte aus und ergänzen
   lokale Auswahl. In der Referenz ist die Merkliste bereits im Context
   umgesetzt; das ist ein Vorausblick auf Schritt 5.
4. **MUI (35 min):** AppBar, Cards, Stack und Theme zeigen. Referenz im
   schmalen/breiten Viewport prüfen; Teilnehmende ändern Layout und Theme.
5. **Context (40 min):** Suche und Trackfilter in der Referenz bedienen,
   abgeleitete Liste und `useFavorites` zeigen. Merkliste setzen und zählen.
   Lokal, abgeleitet und gemeinsam genutzten State unterscheiden.
6. **Fetch (45 min):** in der Referenz „Fetch: Erfolg“ und „Fetch: Fehler“
   wählen, Network-Tab und HTTP-Status zeigen. Suche ohne Treffer zeigt den
   leeren UI-Zustand; ein leeres JSON-Array zeigt den leeren Datenzustand.
   `Response.ok`, `unknown`, Laufzeitvalidierung und Abort erklären. Für den
   Ladezustand Netz im Browser drosseln. Die Fehler-Schaltfläche verwendet
   bewusst eine fehlende Datei; je nach Vite-Fallback kann statt HTTP 404 ein
   JSON-Parsingfehler angezeigt werden – beides ist ein sichtbarer Fehler.
7. **Optional/Abschluss (30 min):** nach Tempo AutoRest/OpenAPI, Playwright,
   Konfiguration ohne Secrets, Vite/webpack oder gemessene Performance
   besprechen. Die Checkpoints in den Übungsdateien beantworten.

Falls die Referenz nicht startet: die entsprechenden Übungsdateien und den
Referenzcode direkt im Editor zeigen und die Schritte gemeinsam entwickeln.
