import { useEffect } from 'react'

const BASE_TITLE = 'Clima Amanhã'

/**
 * Atualiza o título do documento (aba do navegador) de acordo com a página ativa.
 */
export default function usePageTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} — ${BASE_TITLE}`
      : `${BASE_TITLE} — O planeta está mudando`
  }, [pageTitle])
}
