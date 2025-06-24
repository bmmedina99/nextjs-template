import type { Config } from './types'

export const configSite: Config = {
  title: 'NextKit',
  description:
    'Plantilla de inicio para proyectos con Next.js App Router, preconfigurada con TypeScript y Tailwind CSS.',
  lang: 'es',
  author: 'bmmedina99',
  url: 'https://localhost:5000',
}

export const navLinks = [
  {
    id: '0',
    title: 'Características',
    href: '#features',
  },
  {
    id: '1',
    title: 'Comenzar',
    href: '#started',
  },
]
