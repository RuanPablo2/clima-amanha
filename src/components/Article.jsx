import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

/** Cabeçalho editorial de artigo ("Os Perigos do Calor" e "O Fenômeno El Niño"). */
export function ArticleHero({
  num,
  tag,
  time,
  title,
  accent,
  lead,
  img,
  imgAlt,
  action,
}) {
  return (
    <section className="a-hero">
      <div className="container a-hero__grid">
        <div className="a-hero__text">
          <Reveal as="p" className="a-hero__meta mono">
            <Link to={ROUTES.HOME} className="a-hero__back">
              <Icon name="arrowLeft" size={14} /> Início
            </Link>
            <span>aba {num}</span>
            <span className="tag">{tag}</span>
            <span>{time}</span>
          </Reveal>

          <Reveal as="h1" className="display display--article" delay={80}>
            {title} <em className="accent-italic">{accent}</em>
          </Reveal>

          <Reveal as="p" className="lead" delay={160}>
            {lead}
          </Reveal>

          {action && (
            <Reveal delay={220} className="a-hero__actions">
              {action}
            </Reveal>
          )}
        </div>

        <Reveal className="a-hero__media" delay={120}>
          <img src={img} alt={imgAlt} />
          <span className="a-hero__num">{num}</span>
        </Reveal>
      </div>
    </section>
  )
}

/** Título de seção numerado, estilo editorial. */
export function SectionTitle({ index, kicker, children, light = false }) {
  return (
    <Reveal className={`s-title ${light ? 's-title--light' : ''}`}>
      <p className="kicker">
        {index && <span className="s-title__index">{index}</span>} {kicker}
      </p>
      <h2 className={`h2 ${light ? 'h2--light' : ''}`}>{children}</h2>
    </Reveal>
  )
}

/** Card de navegação entre os artigos no final da página. */
export function NextArticle({ to, label, title, img }) {
  return (
    <section className="next">
      <div className="container">
        <Link
          to={to}
          className="next__card"
          style={{ backgroundImage: `url(${img})` }}
        >
          <span className="mono">{label}</span>
          <strong>{title}</strong>
          <span className="next__arrow">
            <Icon name="arrow" size={26} />
          </span>
        </Link>
      </div>
    </section>
  )
}
