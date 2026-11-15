import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { DemoApp } from './DemoApp'

const theme = createTheme({
  palette: { primary: { main: '#164e8a' }, secondary: { main: '#b84563' } },
  shape: { borderRadius: 12 },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DemoApp />
    </ThemeProvider>
  </React.StrictMode>,
)
