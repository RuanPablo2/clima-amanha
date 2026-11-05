import { Link } from 'react-router-dom'
import { Logo } from './Header.jsx'
import IMG from '../data/images.js'

const team = [
  'Giulia Marquez Casadei',
  'Larissa Castro Romeiro Ruiz',
  'Mariane Costa',
  'Maria Rita Gomes de Oliveira',
]

export default function Footer() {
  return (
    <footer className="footer">
      <section
        id="creditos"
        className="footer__band"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(167,71,50,.94) 0%, rgba(167,71,50,.8) 50%, rgba(37,37,34,.55) 100%), url(${IMG.sunsetTree})` }}
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
            {team.map((name, i) => (
              <li key={name}>
                <span className="mono credits__n">{String(i + 1).padStart(2, '0')}</span>
                <span className="credits__name">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <Logo light />
          <nav className="footer__nav" aria-label="Rodapé">
            <Link to="/perigos-do-calor">Perigos do calor</Link>
            <Link to="/el-nino">El niño</Link>
            <Link to="/#apoio">Pontos de apoio</Link>
          </nav>
          <p className="mono footer__tag">
            por um planeta em equilíbrio <span className="footer__line" />
          </p>
        </div>
      </div>
    </footer>
  )
}
