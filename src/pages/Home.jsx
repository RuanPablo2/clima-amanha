import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { ANCHORS, LINKS, ROUTES } from '../constants/routes.js'
import {
  CLIMATE_CAUSES,
  EMERGENCY_CONTACTS,
  FEATURED_ARTICLES,
  HERO_STATS,
  SUPPORT_CHANNELS,
} from '../data/homeData.js'
import IMG from '../data/images.js'
import usePageTitle from '../hooks/usePageTitle.js'

export default function Home() {
  usePageTitle()

  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <Reveal as="p" className="eyebrow">
              mudanças climáticas · um guia para entender e agir
            </Reveal>

            <Reveal as="h1" className="display" delay={80}>
              O planeta
              <br />
              está mudando.
              <br />
              <em className="accent-italic">
                E nós também.
                <svg
                  className="underline-stroke"
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 9 C 80 2, 200 2, 298 7" />
                </svg>
              </em>
            </Reveal>

            <Reveal as="p" className="lead" delay={160}>
              O aquecimento global já é uma realidade. Entenda o problema, descubra
              formas de prevenção e saiba como proteger sua saúde e sua comunidade.
            </Reveal>

            <Reveal delay={240} className="hero__actions">
              <a href={ANCHORS.PROBLEMA} className="btn btn--dark">
                Explorar o site <Icon name="arrowDown" size={16} />
              </a>
              <Link to={LINKS.CALOR_PREVENCAO} className="btn btn--terracotta">
                <Icon name="shield" size={16} /> Como se proteger no dia a dia{' '}
                <Icon name="arrow" size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="hero__art" aria-hidden="true">
            <span className="blob blob--terracotta" />
            <span className="blob blob--amber" />
            <span className="hero__orbit" />
            <img className="hero__earth" src={IMG.heroEarth} alt="" />
            <img className="hero__plant" src={IMG.plantSprout} alt="" />
            <span className="hero__note script">
              o futuro
              <br />
              depende de nós
            </span>
            <Icon name="sparkle" size={34} strokeWidth={1.2} className="hero__spark" />
          </div>
        </div>
      </section>

      {/* ───────────── FAIXA DE DADOS ───────────── */}
      <section className="stats">
        <div
          className="stats__soil"
          style={{ backgroundImage: `url(${IMG.crackedSoil})` }}
        />
        <div className="stats__list">
          {HERO_STATS.map((stat, index) => (
            <Reveal key={stat.value} className="stat" delay={index * 100}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
          <Link
            to={ROUTES.CALOR}
            className="stats__more"
            aria-label="Ver mais dados sobre os perigos do calor"
          >
            <Icon name="arrow" size={20} />
          </Link>
        </div>
      </section>

      {/* ───────────── CAUSAS ───────────── */}
      <section id="problema" className="section causes">
        <div className="container">
          <div className="causes__main">
            <Reveal className="causes__text">
              <p className="kicker">as principais causas</p>
              <h2 className="h2">
                O que está
                <br />
                por trás dessa
                <br />
                <span className="script script--terracotta">crise?</span>
              </h2>
              <p>
                Da queima de combustíveis fósseis ao desmatamento, entenda os fatores
                que aceleram o aquecimento global — e tornam fenômenos como o El Niño
                cada vez mais frequentes e severos.
              </p>
              <Link to={ROUTES.EL_NINO} className="link-arrow">
                conheça as causas <Icon name="arrow" size={16} />
              </Link>
            </Reveal>

            <div className="collage">
              {CLIMATE_CAUSES.map((cause, index) => (
                <Reveal
                  key={cause.label}
                  className={`collage__item collage__item--${index + 1}`}
                  delay={index * 120}
                >
                  <img src={cause.img} alt={cause.alt} loading="lazy" />
                  <span className="collage__label mono">{cause.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── ARTIGOS / ABAS ───────────── */}
      <section className="section articles">
        <div className="container">
          <Reveal className="section-head">
            <p className="kicker">aprofunde-se</p>
            <h2 className="h2">
              Entenda os temas <span className="script script--terracotta">de perto.</span>
            </h2>
          </Reveal>

          <div className="articles__grid">
            {FEATURED_ARTICLES.map((article, index) => (
              <Reveal key={article.to} delay={index * 120}>
                <Link to={article.to} className="article-card">
                  <div className="article-card__media">
                    <img src={article.img} alt="" loading="lazy" />
                    <span className="article-card__num">{article.num}</span>
                  </div>
                  <div className="article-card__body">
                    <p className="mono article-card__meta">
                      <span className="tag">{article.tag}</span> {article.time}
                    </p>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <span className="link-arrow">
                      ler artigo <Icon name="arrow" size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PONTOS DE APOIO ───────────── */}
      <section id="apoio" className="section support">
        <div className="container">
          <Reveal className="section-head section-head--light">
            <p className="kicker kicker--amber">pontos de apoio</p>
            <h2 className="h2 h2--light">
              Em caso de emergência, <span className="script script--amber">ligue.</span>
            </h2>
            <p>
              Ondas de calor, queimadas, enchentes e deslizamentos exigem resposta
              rápida. Salve estes números — as ligações são gratuitas e funcionam em
              todo o Brasil.
            </p>
          </Reveal>

          <div className="support__grid">
            {EMERGENCY_CONTACTS.map((contact, index) => (
              <Reveal key={contact.num} className="support-card" delay={index * 90}>
                <Icon name={contact.icon} size={26} className="support-card__icon" />
                <a href={`tel:${contact.num}`} className="support-card__num">
                  {contact.num}
                </a>
                <h3>{contact.title}</h3>
                <p>{contact.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="support__extra">
            {SUPPORT_CHANNELS.map((channel, index) => (
              <Reveal
                key={channel.id}
                className="support-wide"
                delay={index * 100}
              >
                <div className="support-wide__top">
                  <Icon name={channel.icon} size={28} />
                  <h3>
                    {channel.title}{' '}
                    {channel.highlight && (
                      <span className="mono amber">{channel.highlight}</span>
                    )}
                  </h3>
                </div>
                <p>{channel.text}</p>
                {channel.href && (
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="support-wide__link mono"
                  >
                    {channel.linkLabel} <Icon name="external" size={15} />
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
