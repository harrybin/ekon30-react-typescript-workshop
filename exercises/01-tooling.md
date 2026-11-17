# 1. Tooling und Browser-App

**Ziel:** Entwicklungswerkzeuge von der später ausgelieferten Browser-Anwendung unterscheiden.

1. Node.js 24 oder neuer und npm im PowerShell-Terminal prüfen:

   ```powershell
   node --version
   npm.cmd --version
   ```

2. Den Server wie in der Projekt-README beschrieben starten. Unter macOS
   `npm` statt `npm.cmd` verwenden.
3. `index.html`, `src/main.tsx`, `vite.config.ts` und npm-Skripte untersuchen.
4. Browser-Konsole und Debugger in VS Code öffnen; einen Breakpoint in `App.tsx` setzen.
5. Die Seite mit schmalem und breitem Viewport vergleichen.

**Checkpoint:** Erkläre, wofür Node.js im Entwicklungsablauf da ist und was tatsächlich im Browser ausgeführt wird.
