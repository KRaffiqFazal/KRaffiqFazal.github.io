import type { Project, ProjectMeta } from '../types/project'

const metaFiles = import.meta.glob('./projects/*/meta.json', { eager: true })
const imageFiles = import.meta.glob('./projects/*/*.{png,jpg,jpeg,webp}', { eager: true })

export const projects: Project[] = Object.entries(metaFiles)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([metaPath, mod]) => {
    const meta = (mod as { default: ProjectMeta }).default
    const folder = metaPath.replace('/meta.json', '')
    const imageEntry = Object.entries(imageFiles).find(([p]) => p.startsWith(folder))
    const image = imageEntry ? (imageEntry[1] as { default: string }).default : null
    return { ...meta, image }
  })
