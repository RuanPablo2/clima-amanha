import IMG from './images.js'

export const REGIONAL_IMPACTS = [
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

export const ECONOMIC_COSTS = [
  {
    icon: 'leaf',
    title: 'Alimentos',
    text: 'Secas e enchentes prejudicam a produção agrícola, elevando o preço da comida.',
  },
  {
    icon: 'bolt',
    title: 'Energia elétrica',
    text: 'A redução dos níveis dos reservatórios hidrelétricos pode pressionar as tarifas de energia.',
  },
  {
    icon: 'boat',
    title: 'Logística',
    text: 'A seca nos rios amazônicos compromete a navegabilidade, encarecendo o frete e o transporte de suprimentos.',
  },
]

export const ADAPTATION_MEASURES = [
  {
    icon: 'bolt',
    title: 'Transição energética',
    text: 'Redução da dependência de combustíveis fósseis (petróleo, gás e carvão).',
  },
  {
    icon: 'tree',
    title: 'Combate ao desmatamento',
    text: 'Proteção dos biomas nativos e controle das queimadas.',
  },
  {
    icon: 'shield',
    title: 'Planos de adaptação climática',
    text: 'Investimento municipal e estadual em defesa civil, drenagem urbana, arborização e moradia segura para populações em áreas de risco.',
  },
]

export const CLIMATE_FLOW = [
  {
    icon: 'flame',
    title: 'Emissões e desmatamento',
    text: 'Queima de combustíveis fósseis e destruição dos biomas.',
  },
  {
    icon: 'droplet',
    title: 'Oceanos aquecidos',
    text: 'Os mares absorvem cerca de 90% do excesso de calor.',
  },
  {
    icon: 'globe',
    title: 'El Niño mais intenso',
    text: 'Eventos mais frequentes, longos e severos.',
  },
  {
    icon: 'rain',
    title: 'Extremos climáticos',
    text: 'Secas no Norte e Nordeste, calor no Sudeste, chuvas no Sul.',
  },
]

export const DAILY_OUTCOMES = [
  { icon: 'heart', label: 'saúde' },
  { icon: 'leaf', label: 'alimentos' },
  { icon: 'bolt', label: 'energia' },
  { icon: 'boat', label: 'logística' },
  { icon: 'fish', label: 'pesca' },
  { icon: 'wind', label: 'qualidade do ar' },
]
