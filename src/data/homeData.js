import { EXTERNAL_URLS, ROUTES } from '../constants/routes.js'
import IMG from './images.js'

export const HERO_STATS = [
  {
    value: '+5,7%',
    label: 'de mortalidade a cada +1 °C em dias de calor extremo na América Latina',
  },
  {
    value: '90%',
    label: 'do excesso de calor gerado pelas emissões é absorvido pelos oceanos',
  },
  {
    value: '7 → dezenas',
    label: 'de dias por ano sob ondas de calor no Brasil',
  },
]

export const CLIMATE_CAUSES = [
  {
    img: IMG.smokestacks,
    alt: 'Chaminés industriais liberando fumaça',
    label: 'combustíveis fósseis',
  },
  {
    img: IMG.deforestation,
    alt: 'Área de floresta desmatada',
    label: 'desmatamento',
  },
  {
    img: IMG.forestFire,
    alt: 'Floresta em chamas',
    label: 'queimadas',
  },
]

export const FEATURED_ARTICLES = [
  {
    to: ROUTES.CALOR,
    num: '01',
    tag: 'saúde',
    title: 'Os perigos do calor',
    excerpt:
      'Como as altas temperaturas afetam o coração, a respiração e o corpo — e o que fazer para se proteger durante as ondas de calor.',
    img: IMG.heatCity,
    time: '6 min de leitura',
  },
  {
    to: ROUTES.EL_NINO,
    num: '02',
    tag: 'clima',
    title: 'O fenômeno El Niño',
    excerpt:
      'O que é o Super El Niño, como ele impacta cada região do Brasil e por que a crise climática deixa o fenômeno mais extremo.',
    img: IMG.oceanWarm,
    time: '7 min de leitura',
  },
]

export const EMERGENCY_CONTACTS = [
  {
    num: '193',
    title: 'Corpo de Bombeiros',
    text: 'Incêndios, queimadas, resgates, enchentes e deslizamentos.',
    icon: 'flame',
  },
  {
    num: '192',
    title: 'SAMU',
    text: 'Emergências médicas, como insolação, desmaios e mal súbito.',
    icon: 'cross',
  },
  {
    num: '199',
    title: 'Defesa Civil',
    text: 'Áreas de risco, alagamentos, abrigos e orientações.',
    icon: 'shield',
  },
  {
    num: '136',
    title: 'Disque Saúde',
    text: 'Informações e orientações do Ministério da Saúde.',
    icon: 'phone',
  },
]

export const SUPPORT_CHANNELS = [
  {
    id: 'sms-defesa-civil',
    icon: 'message',
    title: 'Alertas da Defesa Civil por SMS:',
    highlight: '40199',
    text: 'Envie o CEP da sua casa por SMS para 40199 e receba alertas gratuitos de riscos climáticos na sua região.',
  },
  {
    id: 'acolhimento',
    icon: 'users',
    title: 'Onde buscar acolhimento',
    text: 'Unidades Básicas de Saúde (UBS), abrigos da Defesa Civil municipal e os Centros de Referência de Assistência Social (CRAS) atendem as pessoas mais vulneráveis em eventos extremos.',
  },
  {
    id: 'inmet',
    icon: 'sun',
    title: 'INMET — Instituto Nacional de Meteorologia',
    text: 'Acompanhe previsões do tempo, monitoramento climático e alertas meteorológicos oficiais em todo o Brasil.',
    href: EXTERNAL_URLS.INMET,
    linkLabel: 'Acessar portal.inmet.gov.br',
  },
]
