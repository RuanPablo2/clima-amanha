import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import IMG from '../data/images.js'

const stats = [
  { value: '+5,7%', label: 'de mortalidade a cada +1 °C em dias de calor extremo na América Latina' },
  { value: '90%', label: 'do excesso de calor gerado pelas emissões é absorvido pelos oceanos' },
  { value: '7 → dezenas', label: 'de dias por ano sob ondas de calor no Brasil' },
]

const causes = [
  { img: IMG.smokestacks, alt: 'Chaminés industriais liberando fumaça', label: 'combustíveis fósseis' },
  { img: IMG.deforestation, alt: 'Área de floresta desmatada', label: 'desmatamento' },
  { img: IMG.forestFire, alt: 'Floresta em chamas', label: 'queimadas' },
]

const articles = [
  {
    to: '/perigos-do-calor',
    num: '01',
    tag: 'saúde',
    title: 'Os perigos do calor',
    excerpt:
      'Como as altas temperaturas afetam o coração, a respiração e o corpo — e o que fazer para se proteger durante as ondas de calor.',
    img: IMG.heatCity,
    time: '6 min de leitura',
  },
  {
    to: '/el-nino',
    num: '02',
    tag: 'clima',
    title: 'O fenômeno El Niño',
    excerpt:
      'O que é o Super El Niño, como ele impacta cada região do Brasil e por que a crise climática deixa o fenômeno mais extremo.',
    img: IMG.oceanWarm,
    time: '7 min de leitura',
  },
]

const support = [
  { num: '193', title: 'Corpo de Bombeiros', text: 'Incêndios, queimadas, resgates, enchentes e deslizamentos.', icon: 'flame' },
  { num: '192', title: 'SAMU', text: 'Emergências médicas, como insolação, desmaios e mal súbito.', icon: 'cross' },
  { num: '199', title: 'Defesa Civil', text: 'Áreas de risco, alagamentos, abrigos e orientações.', icon: 'shield' },
  { num: '136', title: 'Disque Saúde', text: 'Informações e orientações do Ministério da Saúde.', icon: 'phone' },
]

export default function Home() {
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
                <svg className="underline-stroke" viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 9 C 80 2, 200 2, 298 7" />
                </svg>
              </em>
            </Reveal>
            <Reveal as="p" className="lead" delay={160}>
              O aquecimento global já é uma realidade. Entenda o problema, descubra soluções e faça parte da mudança.
            </Reveal>
            <Reveal delay={240} className="hero__actions">
              <a href="#problema" className="btn btn--dark">
                Explorar o site <Icon name="arrowDown" size={16} />
              </a>
              <a href="#apoio" className="btn btn--ghost">
                Pontos de apoio
              </a>
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
        <div className="stats__soil" style={{ backgroundImage: `url(${IMG.crackedSoil})` }} />
        <div className="stats__list">
          {stats.map((s, i) => (
            <Reveal key={s.value} className="stat" delay={i * 100}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
          <Link to="/perigos-do-calor" className="stats__more" aria-label="Ver mais dados">
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
                Da queima de combustíveis fósseis ao desmatamento, entenda os fatores que aceleram o aquecimento global — e
                tornam fenômenos como o El Niño cada vez mais frequentes e severos.
              </p>
              <Link to="/el-nino" className="link-arrow">
                conheça as causas <Icon name="arrow" size={16} />
              </Link>
            </Reveal>

            <div className="collage">
              {causes.map((c, i) => (
                <Reveal key={c.label} className={`collage__item collage__item--${i + 1}`} delay={i * 120}>
                  <img src={c.img} alt={c.alt} loading="lazy" />
                  <span className="collage__label mono">{c.label}</span>
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
            {articles.map((a, i) => (
              <Reveal key={a.to} delay={i * 120}>
                <Link to={a.to} className="article-card">
                  <div className="article-card__media">
                    <img src={a.img} alt="" loading="lazy" />
                    <span className="article-card__num">{a.num}</span>
                  </div>
                  <div className="article-card__body">
                    <p className="mono article-card__meta">
                      <span className="tag">{a.tag}</span> {a.time}
                    </p>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
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
              Ondas de calor, queimadas, enchentes e deslizamentos exigem resposta rápida. Salve estes números — as ligações
              são gratuitas e funcionam em todo o Brasil.
            </p>
          </Reveal>

          <div className="support__grid">
            {support.map((s, i) => (
              <Reveal key={s.num} className="support-card" delay={i * 90}>
                <Icon name={s.icon} size={26} className="support-card__icon" />
                <a href={`tel:${s.num}`} className="support-card__num">
                  {s.num}
                </a>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="support__extra">
            <Reveal className="support-wide">
              <Icon name="message" size={30} />
              <div>
                <h3>
                  Alertas da Defesa Civil por SMS: <span className="mono amber">40199</span>
                </h3>
                <p>Envie o CEP da sua casa por SMS para 40199 e receba alertas gratuitos de riscos climáticos na sua região.</p>
              </div>
            </Reveal>
            <Reveal className="support-wide" delay={100}>
              <Icon name="users" size={30} />
              <div>
                <h3>Onde buscar acolhimento</h3>
                <p>
                  Unidades Básicas de Saúde (UBS), abrigos da Defesa Civil municipal e os Centros de Referência de Assistência
                  Social (CRAS) atendem as pessoas mais vulneráveis em eventos extremos.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
