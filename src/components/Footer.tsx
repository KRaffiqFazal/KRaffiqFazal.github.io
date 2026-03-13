import { Box, Typography } from '@mui/material'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <Box
      sx={{
        borderTop: '3px solid #2e8a5e',
        py: 8,
        px: { xs: 3, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: { xs: '2rem', md: '3rem' },
          letterSpacing: '0.05em',
          textShadow: '3px 3px 0px #1a5c3a',
        }}
      >
        Thanks for visiting
      </Typography>

      <Typography
        sx={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.3em',
          color: '#3dba75',
          textTransform: 'uppercase',
        }}
      >
        Kazim Raffiq-Fazal
      </Typography>

      <SocialLinks />
    </Box>
  )
}
