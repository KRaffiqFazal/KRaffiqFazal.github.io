export interface ProjectMeta {
  title: string
  description: string
  tags: string[]
  github: string
}

export interface Project extends ProjectMeta {
  image: string | null
}
