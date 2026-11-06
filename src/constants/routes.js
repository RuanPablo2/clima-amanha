/**
 * Rotas internas, âncoras de seção e URLs externas centralizadas.
 * Evita strings mágicas espalhadas pelos componentes.
 */
export const ROUTES = {
  HOME: '/',
  CALOR: '/perigos-do-calor',
  EL_NINO: '/el-nino',
}

export const ANCHORS = {
  PROBLEMA: '#problema',
  APOIO: '#apoio',
  PREVENCAO: '#prevencao',
  IMPACTOS: '#impactos',
  CREDITOS: '#creditos',
}

export const LINKS = {
  HOME_APOIO: `${ROUTES.HOME}${ANCHORS.APOIO}`,
  CALOR_PREVENCAO: `${ROUTES.CALOR}${ANCHORS.PREVENCAO}`,
  EL_NINO_IMPACTOS: `${ROUTES.EL_NINO}${ANCHORS.IMPACTOS}`,
}

export const EXTERNAL_URLS = {
  INMET: 'https://portal.inmet.gov.br/',
}
