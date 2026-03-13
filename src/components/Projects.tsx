import { Box, Typography } from '@mui/material'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/loadProjects'
import ProjectSection from './ProjectSection'

export default function Projects() {
  const { ref, sx } = useScrollReveal({ direction: 'up' })

  return (
    <Box id="projects">
      {/* Section heading */}
      <Box sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 8 }, maxWidth: '1200px', mx: 'auto' }}>
        <Box ref={ref} sx={sx}>
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.45em',
              color: '#3dba75',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Work
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: { xs: '3.5rem', md: '5rem' },
              lineHeight: 0.9,
              textShadow: '4px 4px 0px #1a5c3a',
            }}
          >
            Projects
          </Typography>
          <Box sx={{ mt: 2, width: 60, height: '3px', background: '#2e8a5e' }} />
        </Box>
      </Box>

      {projects.map((project, i) => (
        <ProjectSection key={project.title} project={project} index={i} />
      ))}
    </Box>
  )
}
