import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useScrolled } from '../hooks/useScrolled'

const iconButtonSx = {
  color: '#3dba75',
  borderRadius: 0,
  p: '6px',
  '&:hover': {
    background: 'rgba(61, 186, 117, 0.08)',
  },
}

export default function Navbar() {
  const scrolled = useScrolled()

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: '#07090cee',
        backdropFilter: 'blur(8px)',
        borderBottom: '3px solid #2e8a5e',
        transform: scrolled ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.35s ease',
      }}
    >
      <Toolbar sx={{ maxWidth: '1200px', width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Typography
          component="a"
          href="#top"
          sx={{
            flexGrow: 1,
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: '1.7rem',
            letterSpacing: '0.12em',
            color: '#f0ede8',
            textDecoration: 'none',
            '& span': { color: '#3dba75' },
          }}
        >
          Kazim <span>Raffiq-Fazal</span>
        </Typography>

        <Button
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          sx={{
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: '0.85rem',
            letterSpacing: '0.12em',
            borderRadius: 0,
            color: '#3dba75',
            border: '2px solid #2e8a5e',
            boxShadow: '3px 3px 0px #2e8a5e',
            mr: 4,
            '&:hover': {
              border: '2px solid #3dba75',
              background: 'rgba(61, 186, 117, 0.08)',
              boxShadow: '1px 1px 0px #3dba75',
              transform: 'translate(2px, 2px)',
            },
          }}
        >
          View CV
        </Button>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            href="https://www.linkedin.com/in/kazim-raffiq-fazal-0456b824a/"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconButtonSx}
          >
            <LinkedInIcon sx={{ fontSize: '1.8rem' }} />
          </IconButton>
          <IconButton
            href="https://github.com/KRaffiqFazal"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconButtonSx}
          >
            <GitHubIcon sx={{ fontSize: '1.8rem' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
