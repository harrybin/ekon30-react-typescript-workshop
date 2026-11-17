# Optionale Vertiefungen

Je nach Tempo und Vorwissen:

- **AutoRest:** OpenAPI-Datei in `spec/openapi.yaml` lesen und überlegen, wie ein generierter Client die handgeschriebenen Fetch-Aufrufe ersetzt. AutoRest und ein generierter Client sind nicht enthalten; für eine praktische Generierung müssen sie zunächst eingerichtet werden.
- **Playwright:** einen Browser-Integrationstest für das Filtern der Liste entwerfen. Playwright und vorbereitete Tests sind nicht enthalten; zum Ausführen muss die Testumgebung zunächst eingerichtet werden.
- **App-Konfiguration:** API-Basis-URL über Build-Konfiguration bereitstellen; keine Secrets in ein Frontend-Bundle aufnehmen.
- **Performance:** einen konkreten Render- oder Bundle-Engpass im Browser messen, bevor Optimierungen vorgenommen werden.
- **Bundler:** Vite praktisch verwenden und die Rolle von webpack als Alternative einordnen.
