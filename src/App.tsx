import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#3dba75' },
    background: { default: '#07090c', paper: '#0d1410' },
    text: { primary: '#f0ede8', secondary: '#7fc49a' },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
    h1: { fontFamily: '"Bebas Neue", sans-serif' },
    h2: { fontFamily: '"Bebas Neue", sans-serif' },
    h3: { fontFamily: '"Bebas Neue", sans-serif' },
    h4: { fontFamily: '"Bebas Neue", sans-serif' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: '"Bebas Neue", sans-serif',
          letterSpacing: '0.12em',
          fontSize: '1.05rem',
          transition: 'transform 0.1s ease, box-shadow 0.1s ease',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </ThemeProvider>
  )
}

export default App
