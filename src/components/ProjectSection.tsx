import { Box, Typography, Button, Chip, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useScrollReveal } from '../hooks/useScrollReveal'
import type { Project } from '../types/project'

interface Props {
  project: Project
  index: number
}

export default function ProjectSection({ project, index }: Props) {
  const isEven = index % 2 === 0
  const imageReveal = useScrollReveal({ direction: isEven ? 'left' : 'right', delay: 0 })
  const textReveal = useScrollReveal({ direction: isEven ? 'right' : 'left', delay: 0.15 })

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 3, md: 8 },
        borderBottom: '1px solid #1a3d2b',
      }}
    >
      {/* Large background number */}
      <Typography
        sx={{
          position: 'absolute',
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: { xs: '20rem', md: '30rem' },
          lineHeight: 1,
          color: '#0d2e1e',
          right: isEven ? '-2%' : 'auto',
          left: isEven ? 'auto' : '-2%',
          top: '50%',
          transform: 'translateY(-50%)',
          userSelect: 'none',
          zIndex: 0,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </Typography>

      {/* Diagonal accent panel */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: isEven ? 0 : 'auto',
          right: isEven ? 'auto' : 0,
          width: { xs: '100%', md: '42%' },
          height: '100%',
          background: 'linear-gradient(160deg, #0d2e1e 0%, #071a10 100%)',
          clipPath: isEven
            ? { xs: 'none', md: 'polygon(0% 0%, 88% 0%, 100% 100%, 0% 100%)' }
            : { xs: 'none', md: 'polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)' },
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
          gap: { xs: 6, md: 8 },
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          zIndex: 1,
        }}
      >
        {/* Screenshot or placeholder */}
        <Box ref={imageReveal.ref} sx={{ flex: 1, position: 'relative', flexShrink: 0, ...imageReveal.sx }}>
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              left: isEven ? 12 : 'auto',
              right: isEven ? 'auto' : 12,
              width: '100%',
              height: '100%',
              border: '2px solid #2e8a5e',
              zIndex: 0,
            }}
          />
          {project.image ? (
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                display: 'block',
                width: '100%',
                maxHeight: 340,
                objectFit: 'cover',
                border: '2px solid #1a3d2b',
                position: 'relative',
                zIndex: 1,
                filter: 'grayscale(10%) contrast(1.05)',
              }}
            />
          ) : (
            <Box
              sx={{
                height: 300,
                background: 'repeating-linear-gradient(45deg, #0d2e1e, #0d2e1e 10px, #071a10 10px, #071a10 20px)',
                border: '2px solid #1a3d2b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Typography sx={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '1rem', letterSpacing: '0.2em', color: '#2e8a5e', opacity: 0.6 }}>
                Screenshot Coming Soon
              </Typography>
            </Box>
          )}
        </Box>

        {/* Text */}
        <Box ref={textReveal.ref} sx={{ flex: 1, ...textReveal.sx }}>
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.4em',
              color: '#3dba75',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            {String(index + 1).padStart(2, '0')} — Project
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: { xs: '3rem', md: '4.5rem' },
              lineHeight: 0.9,
              letterSpacing: '0.02em',
              mb: 3,
              textShadow: '4px 4px 0px #1a5c3a',
            }}
          >
            {project.title}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, maxWidth: 480 }}>
            {project.description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} mb={4}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  borderRadius: 0,
                  border: '1px solid #2e8a5e',
                  background: 'transparent',
                  color: '#3dba75',
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              />
            ))}
          </Stack>

          <Button
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              borderRadius: 0,
              color: '#3dba75',
              border: '2px solid #2e8a5e',
              boxShadow: '4px 4px 0px #000',
              px: 2,
              '&:hover': {
                background: 'rgba(61, 186, 117, 0.08)',
                border: '2px solid #3dba75',
                boxShadow: '2px 2px 0px #000',
                transform: 'translate(2px, 2px)',
              },
            }}
          >
            View on GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
