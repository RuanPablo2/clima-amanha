import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import ElNinoDiagram from '../components/ElNinoDiagram.jsx'
import { ArticleHero, SectionTitle, NextArticle } from '../components/Article.jsx'
import IMG from '../data/images.js'

const regions = [
  {
    name: 'Norte, Nordeste e Centro-Oeste',
    short: 'N · NE · CO',
    tone: 'terracotta',
    img: IMG.crackedSoil,
    text: 'Agravamento de secas históricas, ondas de calor intenso e aumento do risco de queimadas florestais.',
    chips: [
      { icon: 'sun', label: 'seca' },
      { icon: 'thermometer', label: 'calor' },
      { icon: 'flame', label: 'queimadas' },
    ],
  },
  {
    name: 'Sudeste',
    short: 'SE',
    tone: 'amber',
    img: IMG.heatCity,
    text: 'Aumento das temperaturas, períodos de baixa umidade e elevação do risco de insegurança hídrica nos reservatórios.',
    chips: [
      { icon: 'thermometer', label: 'calor' },
      { icon: 'wind', label: 'baixa umidade' },
      { icon: 'droplet', label: 'reservatórios' },
    ],
  },
  {
    name: 'Sul',
    short: 'S',
    tone: 'olive',
    img: IMG.flood,
    text: 'Concentração de chuvas acima da média, favorecendo enchentes, alagamentos e deslizamentos de terra.',
    chips: [
      { icon: 'rain', label: 'chuvas' },
      { icon: 'droplet', label: 'enchentes' },
      { icon: 'alert', label: 'deslizamentos' },
    ],
  },
]

const costs = [
  { icon: 'leaf', title: 'Alimentos', text: 'Secas e enchentes prejudicam a produção agrícola, elevando o preço da comida.' },
  { icon: 'bolt', title: 'Energia elétrica', text: 'A redução dos níveis dos reservatórios hidrelétricos pode pressionar as tarifas de energia.' },
  { icon: 'boat', title: 'Logística', text: 'A seca nos rios amazônicos compromete a navegabilidade, encarecendo o frete e o transporte de suprimentos.' },
]

const measures = [
  { icon: 'bolt', title: 'Transição energética', text: 'Redução da dependência de combustíveis fósseis (petróleo, gás e carvão).' },
  { icon: 'tree', title: 'Combate ao desmatamento', text: 'Proteção dos biomas nativos e controle das queimadas.' },
  {
    icon: 'shield',
    title: 'Planos de adaptação climática',
    text: 'Investimento municipal e estadual em defesa civil, drenagem urbana, arborização e moradia segura para populações em áreas de risco.',
  },
]

const flow = [
  { icon: 'flame', title: 'Emissões e desmatamento', text: 'Queima de combustíveis fósseis e destruição dos biomas.' },
  { icon: 'droplet', title: 'Oceanos aquecidos', text: 'Os mares absorvem cerca de 90% do excesso de calor.' },
  { icon: 'globe', title: 'El Niño mais intenso', text: 'Eventos mais frequentes, longos e severos.' },
  { icon: 'rain', title: 'Extremos climáticos', text: 'Secas no Norte e Nordeste, calor no Sudeste, chuvas no Sul.' },
]

const outcomes = [
  { icon: 'heart', label: 'saúde' },
  { icon: 'leaf', label: 'alimentos' },
  { icon: 'bolt', label: 'energia' },
  { icon: 'boat', label: 'logística' },
  { icon: 'fish', label: 'pesca' },
  { icon: 'wind', label: 'qualidade do ar' },
]

export default function ElNino() {
  return (
    <article className="article article--nino">
      <ArticleHero
        num="02"
        tag="clima"
        time="7 min de leitura"
        title="Super El Niño:"
        accent="o que é e como ele impacta o Brasil."
        lead="O El Niño é um fenômeno climático natural caracterizado pelo aquecimento anormal das águas do Oceano Pacífico Equatorial. No entanto, a combinação entre a queima de combustíveis fósseis, o desmatamento e a crise climática global tem tornado esses eventos cada vez mais frequentes e severos."
        img={IMG.oceanWarm}
        imgAlt="Superfície do oceano Pacífico ao entardecer"
      />

      {/* ── Origem do nome + diagrama ── */}
      <section className="section origin">
        <div className="container origin__grid">
          <div>
            <SectionTitle index="01" kicker="a origem do nome">
              “O menino” que <span className="script script--terracotta">aqueceu o oceano.</span>
            </SectionTitle>
            <Reveal as="p" className="prose">
              O nome surgiu há cerca de 200 anos com pescadores peruanos que notavam o aquecimento do oceano no final do ano,
              batizando o fenômeno de <em>“o menino”</em> em referência ao Menino Jesus.
            </Reveal>
            <Reveal as="p" className="prose" delay={80}>
              Hoje, sob o efeito do aquecimento global — em que os oceanos absorvem cerca de 90% do excesso de calor gerado
              pelas emissões de gases de efeito estufa —, o fenômeno atinge proporções ainda mais extremas.
            </Reveal>
          </div>
          <Reveal className="ring-stat" delay={120}>
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle cx="60" cy="60" r="50" className="ring-stat__track" />
              <circle cx="60" cy="60" r="50" className="ring-stat__fill" pathLength="100" strokeDasharray="90 100" />
            </svg>
            <div className="ring-stat__label">
              <strong>90%</strong>
              <span className="mono">do excesso de calor vai para os oceanos</span>
            </div>
          </Reveal>
        </div>

        <div className="container">
          <Reveal>
            <ElNinoDiagram />
          </Reveal>
        </div>
      </section>

      {/* ── Regiões ── */}
      <section className="section regions">
        <div className="container">
          <SectionTitle index="02" kicker="impactos regionais">
            Como o El Niño afeta <span className="script script--amber">cada região do país.</span>
          </SectionTitle>
          <Reveal as="p" className="prose prose--wide">
            Os impactos do El Niño manifestam-se de formas distintas ao longo do território brasileiro:
          </Reveal>

          <div className="regions__grid">
            {regions.map((r, i) => (
              <Reveal key={r.short} className={`region region--${r.tone}`} delay={i * 120}>
                <div className="region__media">
                  <img src={r.img} alt="" loading="lazy" />
                  <span className="region__short">{r.short}</span>
                </div>
                <div className="region__body">
                  <h3>{r.name}</h3>
                  <p>{r.text}</p>
                  <ul className="chips">
                    {r.chips.map((c) => (
                      <li key={c.label}>
                        <Icon name={c.icon} size={14} /> {c.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impactos socioambientais ── */}
      <section id="impactos" className="section impacts">
        <div className="container">
          <SectionTitle index="03" kicker="impactos socioambientais e econômicos">
            O que está <span className="script script--terracotta">em jogo.</span>
          </SectionTitle>

          {/* 1. Queimadas */}
          <div className="impact">
            <Reveal className="impact__media">
              <img src={IMG.forestFire} alt="Incêndio florestal" loading="lazy" />
            </Reveal>
            <Reveal className="impact__text" delay={100}>
              <span className="impact__n">1</span>
              <h3>Queimadas e qualidade do ar</h3>
              <p>
                A estiagem aliada à ação humana intensifica os incêndios florestais. Em episódios recentes, a fumaça das
                queimadas no Pantanal e na Amazônia afetou a qualidade do ar em diversos estados, ultrapassando os limites
                recomendados pela OMS e afetando a saúde respiratória de populações ribeirinhas, indígenas e periféricas.
              </p>
            </Reveal>
          </div>

          {/* 2. Custo de vida */}
          <div className="impact impact--reverse">
            <Reveal className="impact__media">
              <img src={IMG.dryRiver} alt="Leito de rio seco com barcos encalhados" loading="lazy" />
            </Reveal>
            <Reveal className="impact__text" delay={100}>
              <span className="impact__n">2</span>
              <h3>Aumento no custo de vida</h3>
              <p>Eventos extremos causam impactos diretos na economia doméstica:</p>
              <ul className="cost-list">
                {costs.map((c) => (
                  <li key={c.title}>
                    <span className="cost-list__icon">
                      <Icon name={c.icon} size={20} />
                    </span>
                    <div>
                      <strong>{c.title}</strong>
                      <span>{c.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* 3. Calor e saúde */}
          <div className="impact impact--plain">
            <Reveal className="impact__text">
              <span className="impact__n">3</span>
              <h3>Calor extremo e saúde pública</h3>
              <p>
                O Brasil tem registrado um aumento expressivo nos dias sob ondas de calor — saltando de uma média de 7 dias
                anuais há poucas décadas para dezenas de dias por ano. O estresse térmico acentuado representa risco direto à
                vida, impactando principalmente idosos e grupos vulnerabilizados.
              </p>
              <Link to="/perigos-do-calor" className="link-arrow">
                entenda os perigos do calor <Icon name="arrow" size={16} />
              </Link>
            </Reveal>
            <Reveal className="heat-days" delay={120}>
              <p className="mono">dias por ano sob ondas de calor</p>
              <div className="heat-days__cols" role="img" aria-label="De 7 dias por ano para dezenas de dias por ano">
                <div className="heat-days__col">
                  <span className="heat-days__bar heat-days__bar--low">
                    <b>7</b>
                  </span>
                  <span className="mono">há poucas décadas</span>
                </div>
                <div className="heat-days__col">
                  <span className="heat-days__bar heat-days__bar--high">
                    <b>dezenas</b>
                  </span>
                  <span className="mono">hoje</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 4. Oceanos */}
          <div className="impact impact--reverse">
            <Reveal className="impact__media impact__media--stat">
              <img src={IMG.coralBleaching} alt="Corais branqueados" loading="lazy" />
              <div className="impact__badge">
                <strong>60%+</strong>
                <span className="mono">do pescado consumido no país vem da pesca artesanal</span>
              </div>
            </Reveal>
            <Reveal className="impact__text" delay={100}>
              <span className="impact__n">4</span>
              <h3>Preservação dos oceanos e a pesca</h3>
              <p>
                O excesso de calor absorvido pelos mares provoca o branqueamento de corais. Além de fragilizar a proteção
                natural da costa contra tempestades, a degradação marinha afeta a pesca artesanal, responsável por mais de 60%
                do pescado consumido no país, ameaçando a segurança alimentar e a renda de famílias costeiras.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Governança ── */}
      <section className="section governance">
        <div className="container">
          <div className="governance__head">
            <SectionTitle index="04" kicker="governança e adaptação" light>
              O papel da governança e <span className="script script--amber">ações de adaptação.</span>
            </SectionTitle>
            <Reveal className="governance__intro" delay={100}>
              <p>
                Estudos indicam que a maioria dos municípios brasileiros ainda possui baixa capacidade de adaptação a eventos
                climáticos extremos. Embora o El Niño seja um fenômeno natural, a intensidade dos seus danos à sociedade depende
                diretamente da infraestrutura e do planejamento público.
              </p>
              <p>Para conter os danos do aquecimento global e do El Niño, destacam-se como medidas essenciais:</p>
            </Reveal>
          </div>

          <div className="measures">
            {measures.map((m, i) => (
              <Reveal key={m.title} className="measure" delay={i * 120}>
                <span className="measure__n mono">0{i + 1}</span>
                <Icon name={m.icon} size={32} />
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explicação dos impactos (infográfico) ── */}
      <section className="section flow-section">
        <div className="container">
          <SectionTitle index="05" kicker="em resumo">
            Como tudo <span className="script script--terracotta">se conecta.</span>
          </SectionTitle>

          <ol className="flow">
            {flow.map((f, i) => (
              <Reveal as="li" key={f.title} className="flow__step" delay={i * 120}>
                <span className="flow__icon">
                  <Icon name={f.icon} size={26} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="outcomes" delay={200}>
            <p className="mono">impactos diretos no dia a dia:</p>
            <ul>
              {outcomes.map((o) => (
                <li key={o.label}>
                  <Icon name={o.icon} size={18} /> {o.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <NextArticle to="/perigos-do-calor" label="aba anterior · 01" title="Os perigos do calor" img={IMG.heatCity} />
    </article>
  )
}
