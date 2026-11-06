import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ROUTES } from '../constants/routes.js'
import { NAV_LINKS } from '../data/siteData.js'
import useScrolled from '../hooks/useScrolled.js'
import Icon from './Icon.jsx'

export function Logo({ light = false }) {
  return (
    <Link
      to={ROUTES.HOME}
      className={`logo ${light ? 'logo--light' : ''}`}
      aria-label="Clima Amanhã — Início"
    >
      <Icon name="globe" size={30} strokeWidth={1.4} />
      <span>
        clima
        <br />
        amanhã
      </span>
    </Link>
  )
}

export default function Header() {
  const isScrolled = useScrolled(24)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Fecha o menu mobile ao navegar para outra rota ou âncora
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  // Bloqueia o scroll do body enquanto o menu mobile estiver aberto e fecha com ESC
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const headerClassName = [
    'header',
    isScrolled && 'header--scrolled',
    isMenuOpen && 'header--open',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClassName}>
      <div className="container header__inner">
        <Logo />

        <nav className="nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) =>
            link.isHash ? (
              <Link key={link.to} to={link.to} className="nav__link">
                {link.label}
              </Link>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.end} className="nav__link">
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <button
          type="button"
          className="header__toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} size={26} />
        </button>
      </div>
    </header>
  )
}
