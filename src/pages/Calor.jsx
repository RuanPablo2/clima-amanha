import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { ArticleHero, SectionTitle, NextArticle } from '../components/Article.jsx'
import IMG from '../data/images.js'

const chain = [
  {
    icon: 'droplet',
    title: 'Desidratação e volume sanguíneo',
    text: 'A perda de fluidos reduz o volume de sangue em circulação, alterando a pressão arterial.',
  },
  {
    icon: 'pulse',
    title: 'Espessamento do sangue',
    text: 'Com menos água no organismo, o sangue fica mais espesso, elevando o risco de formação de coágulos sanguíneos.',
  },
  {
    icon: 'heart',
    title: 'Sobrecarga cardíaca',
    text: 'Para dissipar o calor e manter o equilíbrio, o coração é forçado a bombear com maior rapidez.',
  },
]

const symptoms = [
  'Elevação acentuada da temperatura corporal',
  'Pele avermelhada, quente e seca (ausência de suor)',
  'Dor de cabeça intensa',
  'Náuseas, tontura e confusão mental',
  'Desmaios e perda de consciência',
]

const tips = [
  {
    icon: 'droplet',
    title: 'Hidratação constante',
    text: 'Aumente a ingestão diária de água e evite a substituição por bebidas alcoólicas, que favorecem a desidratação.',
  },
  {
    icon: 'leaf',
    title: 'Alimentação leve',
    text: 'Opte por refeições frias, de fácil digestão e fracionadas ao longo do dia.',
  },
  {
    icon: 'sun',
    title: 'Proteção solar',
    text: 'Use chapéus, óculos de sol, roupas leves/claras e aplique protetor solar regularmente.',
  },
  {
    icon: 'eye',
    title: 'Umidificação de mucosas',
    text: 'Utilize soro fisiológico nas narinas e nos olhos para conter o ressecamento.',
  },
  {
    icon: 'clock',
    title: 'Ajuste de horários para exercícios',
    text: 'Evite atividades físicas ao ar livre no período de maior radiação solar (das 11h às 17h).',
  },
  {
    icon: 'home',
    title: 'Gestão de ambientes',
    text: 'Mantenha ambientes ventilados, faça uso de umidificadores ou ar-condicionado e tome banhos em temperaturas mais baixas.',
  },
]

export default function Calor() {
  return (
    <article className="article article--calor">
      <ArticleHero
        num="01"
        tag="saúde"
        time="6 min de leitura"
        title="Calor Extremo:"
        accent="como as altas temperaturas afetam a saúde e o corpo."
        lead="As ondas de calor intenso estão se tornando mais frequentes e prolongadas devido às mudanças climáticas e a fenômenos meteorológicos extremos. A exposição contínua a altas temperaturas, combinada com o tempo seco, exige cuidados imediatos, especialmente com grupos mais vulneráveis como crianças, idosos e pessoas com comorbidades."
        img={IMG.heatCity}
        imgAlt="Rua de cidade brasileira durante uma onda de calor"
      />

      {/* ── Regulação térmica ── */}
      <section className="section thermo">
        <div className="container thermo__grid">
          <div>
            <SectionTitle index="01" kicker="o corpo sob calor">
              O desafio da regulação <span className="script script--terracotta">térmica corporal.</span>
            </SectionTitle>
            <Reveal as="p" className="prose">
              O corpo humano mantém uma temperatura interna média de cerca de 36 °C. Quando exposto ao calor excessivo, o
              organismo aciona mecanismos de adaptação fisiológica para tentar resfriar a estrutura corporal. A principal e
              primeira reação do organismo é o <mark>aumento do suor</mark>.
            </Reveal>
          </div>

          <Reveal className="thermo__gauge" delay={120}>
            <div className="gauge">
              <span className="gauge__value">36</span>
              <span className="gauge__unit">°C</span>
            </div>
            <p className="mono">temperatura interna média do corpo humano</p>
          </Reveal>
        </div>

        <div className="container">
          <Reveal as="p" className="chain__intro">
            Contudo, a eliminação excessiva de suor sem a reposição adequada de líquidos desencadeia uma série de{' '}
            <strong>efeitos em cadeia:</strong>
          </Reveal>
          <ol className="chain">
            {chain.map((c, i) => (
              <Reveal as="li" key={c.title} className="chain__step" delay={i * 120}>
                <span className="chain__n mono">0{i + 1}</span>
                <Icon name={c.icon} size={30} className="chain__icon" />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Impactos na saúde ── */}
      <section className="section health">
        <div className="container">
          <SectionTitle index="02" kicker="impactos na saúde">
            Do coração aos <span className="script script--amber">estágios críticos.</span>
          </SectionTitle>

          <div className="health__grid">
            <Reveal className="info-card info-card--dark">
              <Icon name="heart" size={34} className="info-card__icon" />
              <p className="kicker kicker--amber">sistema cardiovascular</p>
              <p>
                Pessoas que possuem condições pré-existentes — como <strong>hipertensão, insuficiência cardíaca ou doença
                coronariana</strong> — enfrentam risco elevado. O esforço adicional exigido do músculo cardíaco durante dias
                quentes pode atuar como gatilho para quadros graves, como arritmias e ataques cardíacos.
              </p>
            </Reveal>

            <Reveal className="info-card info-card--terracotta" delay={120}>
              <Icon name="thermometer" size={34} className="info-card__icon" />
              <p className="kicker kicker--light">quadro de insolação</p>
              <p>
                A exposição prolongada ao sol sob altas temperaturas pode levar à insolação, uma condição grave que exige
                atenção imediata. Os sintomas incluem:
              </p>
              <ul className="checklist">
                {symptoms.map((s) => (
                  <li key={s}>
                    <Icon name="alert" size={16} /> {s}
                  </li>
                ))}
              </ul>
              <a href="tel:192" className="btn btn--sand btn--sm">
                <Icon name="phone" size={14} /> em caso de suspeita, ligue 192
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Respiratório e vetores ── */}
      <section className="section respiratory">
        <div className="container">
          <SectionTitle index="03" kicker="riscos respiratórios e doenças de transmissão">
            O ar seco, os vetores e <span className="script script--terracotta">o desequilíbrio.</span>
          </SectionTitle>

          <div className="split-cards">
            <Reveal className="split-card">
              <span className="split-card__icon">
                <Icon name="wind" size={28} />
              </span>
              <h3>O efeito do ar seco e poluído</h3>
              <p>
                A combinação de calor e baixa umidade resseca as mucosas do nariz e da boca, comprometendo a barreira natural
                de defesa do sistema respiratório. Esse cenário favorece o surgimento de sangramentos nasais, tosse, sensação
                de falta de ar e a exacerbação de crises asmáticas.
              </p>
            </Reveal>
            <Reveal className="split-card" delay={120}>
              <span className="split-card__icon split-card__icon--olive">
                <Icon name="bug" size={28} />
              </span>
              <h3>Mudanças climáticas e doenças de vetores</h3>
              <p>
                Especialistas em infectologia alertam que a alteração do clima afeta a distribuição de vetores de doenças
                infectocontagiosas. A expansão geográfica de doenças como a <strong>dengue</strong> para regiões e países onde
                o vírus não era comum é um reflexo direto do desequilíbrio térmico global.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Estatística ── */}
      <section className="big-stat">
        <div className="container big-stat__grid">
          <Reveal className="big-stat__number">
            <span className="mono">+1 °C</span>
            <strong>+5,7%</strong>
            <span className="mono">de mortalidade</span>
          </Reveal>
          <Reveal className="big-stat__text" delay={120}>
            <p className="kicker kicker--light">estatísticas de mortalidade</p>
            <p>
              Estudos focados na América Latina apontam uma relação direta entre temperaturas extremas e o aumento no número
              de mortes. Dados da pesquisa indicam que, em dias com temperaturas excessivamente elevadas, a elevação de apenas
              1 °C na média térmica diária está associada a um aumento de <strong>5,7% na mortalidade</strong>, principalmente
              relacionada a complicações cardiovasculares e respiratórias em populações fragilizadas.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Prevenção ── */}
      <section id="prevencao" className="section prevention">
        <div className="container">
          <SectionTitle index="04" kicker="recomendações de prevenção">
            Como se proteger <span className="script script--olive">no dia a dia.</span>
          </SectionTitle>
          <Reveal as="p" className="prose prose--wide">
            Para minimizar os impactos das temperaturas elevadas no cotidiano, recomenda-se adotar os seguintes cuidados de
            proteção:
          </Reveal>

          <div className="tips">
            {tips.map((t, i) => (
              <Reveal key={t.title} className="tip" delay={(i % 3) * 100}>
                <span className="tip__n mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="tip__icon">
                  <Icon name={t.icon} size={26} />
                </span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NextArticle to="/el-nino" label="próxima aba · 02" title="O fenômeno El Niño" img={IMG.oceanWarm} />
    </article>
  )
}
