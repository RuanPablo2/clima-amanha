import { Link } from 'react-router-dom'
import IMG from '../data/images.js'
import { FOOTER_LINKS, TEAM_MEMBERS } from '../data/siteData.js'
import { Logo } from './Header.jsx'

const BAND_BACKGROUND = `linear-gradient(90deg, rgba(167, 71, 50, 0.94) 0%, rgba(167, 71, 50, 0.8) 50%, rgba(37, 37, 34, 0.55) 100%), url(${IMG.sunsetTree})`

export default function Footer() {
  return (
    <footer className="footer">
      <section
        id="creditos"
        className="footer__band"
        style={{ backgroundImage: BAND_BACKGROUND }}
      >
        <div className="container credits">
          <div className="credits__head">
            <p className="kicker kicker--light">créditos</p>
            <h2 className="credits__title">
              Projeto desenvolvido
              <br />
              <span className="script">por:</span>
            </h2>
          </div>

          <ul className="credits__list">
            {TEAM_MEMBERS.map((memberName, index) => (
              <li key={memberName}>
                <span className="mono credits__n">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="credits__name">{memberName}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <Logo light />

          <nav className="footer__nav" aria-label="Links do rodapé">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="mono footer__tag">
            por um planeta em equilíbrio <span className="footer__line" />
          </p>
        </div>
      </div>
    </footer>
  )
}
