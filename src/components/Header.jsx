import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/perigos-do-calor', label: 'Perigos do calor' },
  { to: '/el-nino', label: 'El niño' },
  { to: '/#apoio', label: 'Pontos de apoio', hash: true },
]

export function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label="Clima Amanhã — Início">
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
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // fecha o menu mobile ao navegar
  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${open ? 'header--open' : ''}`}>
      <div className="container header__inner">
        <Logo />

        <nav className="nav" aria-label="Navegação principal">
          {links.map((l) =>
            l.hash ? (
              <Link key={l.to} to={l.to} className="nav__link">
                {l.label}
              </Link>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.end} className="nav__link">
                {l.label}
              </NavLink>
            ),
          )}
        </nav>

        <button
          className="header__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
      </div>
    </header>
  )
}
