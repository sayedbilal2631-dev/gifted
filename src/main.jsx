import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import App from './App.jsx'

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: { fontFamily: 'Caveat, cursive', fontWeight: 700 },
    h2: { fontFamily: 'Caveat, cursive', fontWeight: 700 },
    button: { fontFamily: 'Patrick Hand, cursive', fontWeight: 700 },
  },
  palette: { primary: { main: '#d8552f' }, secondary: { main: '#8fa382' } },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
