import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { ROUTES } from './constants/routes.js'
import Calor from './pages/Calor.jsx'
import ElNino from './pages/ElNino.jsx'
import Home from './pages/Home.jsx'

/**
 * Gerencia o posicionamento da janela na troca de rotas:
 * - Se houver hash (#secao), rola suavemente até o elemento-alvo.
 * - Caso contrário, posiciona no topo da página.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const targetId = hash.slice(1)
      const scrollToSection = () => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }

      const frameId = requestAnimationFrame(scrollToSection)
      const timerId = setTimeout(scrollToSection, 120)

      return () => {
        cancelAnimationFrame(frameId)
        clearTimeout(timerId)
      }
    }

    window.scrollTo({ top: 0, left: 0 })
    return undefined
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CALOR} element={<Calor />} />
          <Route path={ROUTES.EL_NINO} element={<ElNino />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
