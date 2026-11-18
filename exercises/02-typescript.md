# 2. TypeScript: Types, Interfaces und Generics

**Ziel:** Datenverträge für die Session-App formulieren und statisch prüfen lassen.

1. `Session` in `src/types.ts` untersuchen und um ein Feld erweitern.
2. Ein Objekt mit fehlendem oder falschem Typ ergänzen und den Compilerfehler lesen.
3. Den generischen Typ `ApiResult<T>` auf die Session-Liste anwenden.
4. Im Repository-Root den Build ausführen und Typfehler beheben:

   ```powershell
   npm.cmd run build
   ```

   Auf macOS:

   ```sh
   npm run build
   ```

**Checkpoint:** Erkläre, warum ein TypeScript-Typ JSON-Daten zur Laufzeit nicht automatisch validiert.
Die Referenz nutzt denselben `Session`-Typ und prüft dessen vorhandene Felder
in `isSession`. Wird der Vertrag um ein Pflichtfeld erweitert, muss auch die
Laufzeitprüfung in einer angepassten Referenz dieses Feld prüfen.
