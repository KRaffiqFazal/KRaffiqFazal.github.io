import { Box, Button } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const buttonSx = {
  fontFamily: '"Outfit", sans-serif',
  fontWeight: 600,
  fontSize: '0.8rem',
  letterSpacing: '0.08em',
  borderRadius: 0,
  color: '#3dba75',
  border: '2px solid #2e8a5e',
  px: 1.5,
  '&:hover': { background: 'rgba(61, 186, 117, 0.08)', border: '2px solid #3dba75' },
}

export default function SocialLinks({ sx }: { sx?: object }) {
  return (
    <Box sx={{ display: 'flex', gap: 2, ...sx }}>
      <Button
        href="https://www.linkedin.com/in/kazim-raffiq-fazal-0456b824a/"
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<LinkedInIcon />}
        sx={buttonSx}
      >
        LinkedIn
      </Button>
      <Button
        href="https://github.com/KRaffiqFazal"
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<GitHubIcon />}
        sx={buttonSx}
      >
        GitHub
      </Button>
    </Box>
  )
}
