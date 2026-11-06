import { LINKS, ROUTES } from '../constants/routes.js'

export const NAV_LINKS = [
  { to: ROUTES.HOME, label: 'Início', end: true },
  { to: ROUTES.CALOR, label: 'Perigos do calor' },
  { to: ROUTES.EL_NINO, label: 'El Niño' },
  { to: LINKS.HOME_APOIO, label: 'Pontos de apoio', isHash: true },
]

export const FOOTER_LINKS = [
  { to: ROUTES.CALOR, label: 'Perigos do calor' },
  { to: ROUTES.EL_NINO, label: 'El Niño' },
  { to: LINKS.HOME_APOIO, label: 'Pontos de apoio' },
]

export const TEAM_MEMBERS = [
  'Giulia Marquez Casadei',
  'Larissa Castro Romeiro Ruiz',
  'Mariane Costa',
  'Maria Rita Gomes de Oliveira',
]
