import { createContext, useContext, useEffect, useState } from 'react'
import { Alert, AppBar, Box, Button, Card, CardContent, Chip, Container, MenuItem, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { sessions as starterSessions } from '../src/data/sessions'
import type { Session } from '../src/types'

type Favorites = { ids: string[]; toggle: (id: string) => void }
const FavoritesContext = createContext<Favorites | null>(null)

function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('FavoritesContext benötigt einen Provider')
  return context
}

function SessionCard({ session }: { session: Session }) {
  const { ids, toggle } = useFavorites()
  const selected = ids.includes(session.id)
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1} alignItems="flex-start">
          <Chip label={session.track} color="primary" variant="outlined" size="small" />
          <Typography variant="h6" component="h3">{session.title}</Typography>
          <Typography color="text.secondary">{session.speaker}</Typography>
          <Button aria-pressed={selected} onClick={() => toggle(session.id)}>
            {selected ? 'Aus Merkliste entfernen' : 'Merken'}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; sessions: Session[] }

function isSession(value: unknown): value is Session {
  if (typeof value !== 'object' || value === null) return false
  const item = value as Record<string, unknown>
  return ['id', 'title', 'speaker', 'track', 'startsAt'].every((key) => typeof item[key] === 'string')
}

function SessionCatalog({ source }: { source: string | null }) {
  const [query, setQuery] = useState('')
  const [track, setTrack] = useState('')
  const [load, setLoad] = useState<LoadState>({ status: 'loading' })

  useEffect(() => {
    if (!source) return
    const url = source
    const controller = new AbortController()
    async function loadSessions() {
      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data: unknown = await response.json()
        if (!Array.isArray(data) || !data.every(isSession)) throw new Error('Ungültige Session-Daten')
        setLoad({ status: 'success', sessions: data })
      } catch (error) {
        if (!controller.signal.aborted) {
          setLoad({ status: 'error', message: error instanceof Error ? error.message : String(error) })
        }
      }
    }
    void loadSessions()
    return () => controller.abort()
  }, [source])

  const current: LoadState = source ? load : { status: 'success', sessions: starterSessions }
  if (current.status === 'loading') return <Typography>Lade Sessions …</Typography>
  if (current.status === 'error') return <Alert severity="error">{current.message}</Alert>

  const tracks = [...new Set(current.sessions.map((session) => session.track))]
  const visible = current.sessions.filter((session) =>
    session.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) && (!track || session.track === track),
  )
  return (
    <Stack spacing={2}>
      <TextField label="Suche" value={query} onChange={(event) => setQuery(event.target.value)} />
      <TextField select label="Track" value={track} onChange={(event) => setTrack(event.target.value)}>
        <MenuItem value="">Alle Tracks</MenuItem>
        {tracks.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
      </TextField>
      {visible.length === 0 && <Typography>Keine Sessions gefunden.</Typography>}
      {visible.map((session) => <SessionCard key={session.id} session={session} />)}
    </Stack>
  )
}

export function DemoApp() {
  const [ids, setIds] = useState<string[]>([])
  const [source, setSource] = useState<string | null>(null)
  const toggle = (id: string) => setIds((previous) =>
    previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id],
  )

  return (
    <FavoritesContext.Provider value={{ ids, toggle }}>
      <AppBar position="static"><Toolbar><Typography variant="h6">Workshop-Referenz · Merkliste: {ids.length}</Typography></Toolbar></AppBar>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Stack spacing={2}>
          <Typography variant="h4" component="h1">Session-Katalog</Typography>
          <Typography>Referenzlösung zur Vorführung – die Übungen bleiben unverändert.</Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
            <Button onClick={() => setSource(null)}>Lokale Daten</Button>
            <Button onClick={() => setSource('/sessions.json')}>Fetch: Erfolg</Button>
            <Button onClick={() => setSource('/fehlende-sessions.json')}>Fetch: Fehler</Button>
          </Stack>
          <Box><SessionCatalog key={source ?? 'local'} source={source} /></Box>
        </Stack>
      </Container>
    </FavoritesContext.Provider>
  )
}
