import { Box, Typography, Button, Stack } from '@mui/material'
import pfp from '../assets/pfp.jpg'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <Box
      id="top"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 3, md: 8 },
      }}
    >
      {/* Diagonal background panel */}
      <Box
        sx={{
          position: 'absolute',
          top: 0, right: 0,
          width: { xs: '100%', md: '48%' },
          height: '100%',
          background: 'linear-gradient(160deg, #0d2e1e 0%, #071a10 100%)',
          clipPath: { xs: 'none', md: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' },
          zIndex: 0,
        }}
      />

      {/* Decorative diamond */}
      <Box sx={{ position: 'absolute', bottom: '12%', left: '6%', width: 80, height: 80, border: '2px solid #2e8a5e', transform: 'rotate(45deg)', opacity: 0.35 }} />

      {/* Decorative line */}
      <Box sx={{ position: 'absolute', top: '18%', left: 0, width: { xs: '30%', md: '22%' }, height: '3px', background: 'linear-gradient(90deg, transparent, #2e8a5e)' }} />

      {/* Main content */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          gap: { xs: 6, md: 4 },
          zIndex: 1,
        }}
      >
        {/* Text */}
        <Box sx={{ flex: 1, animation: 'slideInLeft 0.7s ease both' }}>
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.45em',
              color: '#3dba75',
              textTransform: 'uppercase',
              mb: 1.5,
              animation: 'fadeInUp 0.5s ease 0.1s both',
            }}
          >
            Portfolio
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: { xs: '4.5rem', md: '7.5rem' },
              lineHeight: 0.88,
              letterSpacing: '0.02em',
              mb: 3,
              textShadow: '5px 5px 0px #1a5c3a',
              animation: 'fadeInUp 0.6s ease 0.2s both',
            }}
          >
            Kazim<br />Raffiq<br />Fazal
          </Typography>

          <Box
            sx={{
              display: 'inline-block',
              background: '#2e8a5e',
              px: 2, py: 0.6,
              mb: 4,
              boxShadow: '4px 4px 0px #000',
              animation: 'fadeInUp 0.5s ease 0.4s both',
            }}
          >
            <Typography sx={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.35rem', letterSpacing: '0.25em' }}>
              Software Engineer
            </Typography>
          </Box>

          <SocialLinks sx={{ mb: 4, animation: 'fadeInUp 0.5s ease 0.55s both' }} />

          <Stack direction="row" spacing={2} sx={{ animation: 'fadeInUp 0.5s ease 0.7s both' }}>
            <Button
              variant="contained"
              size="large"
              href="#projects"
              sx={{
                background: '#2e8a5e',
                border: '2px solid #2e8a5e',
                boxShadow: '4px 4px 0px #000',
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.1em',
                '&:hover': {
                  background: '#1e6b45',
                  boxShadow: '2px 2px 0px #000',
                  transform: 'translate(2px, 2px)',
                },
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#3dba75',
                border: '2px solid #2e8a5e',
                boxShadow: '4px 4px 0px #2e8a5e',
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                letterSpacing: '0.1em',
                '&:hover': {
                  border: '2px solid #3dba75',
                  background: 'rgba(61, 186, 117, 0.08)',
                  boxShadow: '2px 2px 0px #2e8a5e',
                  transform: 'translate(2px, 2px)',
                },
              }}
            >
              View CV
            </Button>
          </Stack>
        </Box>

        {/* Photo */}
        <Box sx={{ position: 'relative', flexShrink: 0, animation: 'slideInRight 0.7s ease 0.3s both' }}>
          <Box sx={{ position: 'absolute', top: 14, left: 14, width: '100%', height: '100%', border: '3px solid #2e8a5e', zIndex: 0 }} />
          <Box
            component="img"
            src={pfp}
            alt="Kazim Raffiq-Fazal"
            sx={{
              display: 'block',
              width: { xs: 220, md: 300 },
              height: { xs: 220, md: 300 },
              objectFit: 'cover',
              position: 'relative',
              zIndex: 1,
              border: '3px solid #f0ede8',
              filter: 'grayscale(15%) contrast(1.05)',
            }}
          />
        </Box>
      </Box>

      {/* Bottom accent line */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent 0%, #2e8a5e 30%, #3dba75 50%, #2e8a5e 70%, transparent 100%)' }} />
    </Box>
  )
}
