import { useState } from 'react'

/**
 * Diagrama interativo do Oceano Pacífico Equatorial:
 * permite alternar entre "Condições normais" e "El Niño".
 */
export default function ElNinoDiagram() {
  const [isElNino, setIsElNino] = useState(true)

  return (
    <figure className={`diagram ${isElNino ? 'diagram--nino' : 'diagram--normal'}`}>
      <div
        className="diagram__toggle"
        role="tablist"
        aria-label="Alternar condição do Oceano Pacífico"
      >
        <button
          type="button"
          role="tab"
          aria-selected={!isElNino}
          className={!isElNino ? 'is-active' : ''}
          onClick={() => setIsElNino(false)}
        >
          condições normais
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={isElNino}
          className={isElNino ? 'is-active' : ''}
          onClick={() => setIsElNino(true)}
        >
          el niño
        </button>
      </div>

      <svg
        viewBox="0 0 800 380"
        className="diagram__svg"
        role="img"
        aria-label={
          isElNino
            ? 'Diagrama do Pacífico durante o El Niño'
            : 'Diagrama do Pacífico em condições normais'
        }
      >
        <defs>
          <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5d6a6a" />
            <stop offset="1" stopColor="#252522" />
          </linearGradient>
          <linearGradient id="warm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D9A45B" />
            <stop offset="1" stopColor="#A74732" />
          </linearGradient>
          <marker
            id="arrowHead"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10z" fill="#252522" />
          </marker>
        </defs>

        {/* Sol */}
        <circle cx="400" cy="46" r="18" fill="#D9A45B" opacity=".9" />

        {/* Oceano */}
        <rect x="0" y="180" width="800" height="200" fill="url(#ocean)" />

        {/* Água quente — Condições normais: acumulada a oeste */}
        <g className="diagram__layer diagram__layer--normal">
          <path d="M60 180 H740 V190 C560 196 330 220 60 280 Z" fill="url(#warm)" />
          <path d="M60 300 C 320 250, 560 214, 740 200" className="diagram__thermo" />
        </g>

        {/* Água quente — El Niño: espalhada até a América do Sul */}
        <g className="diagram__layer diagram__layer--nino">
          <path d="M60 180 H740 V240 C560 236 330 236 60 250 Z" fill="url(#warm)" />
          <path d="M60 275 C 320 262, 560 262, 740 262" className="diagram__thermo" />
        </g>

        {/* Continentes */}
        <path d="M0 150 C 30 140, 50 150, 70 170 L 80 380 L 0 380 Z" fill="#626347" />
        <path d="M800 110 C 770 112, 752 140, 735 172 L 728 380 L 800 380 Z" fill="#626347" />
        <text x="12" y="132" className="diagram__label">
          Austrália /
        </text>
        <text x="12" y="146" className="diagram__label">
          Indonésia
        </text>
        <text x="788" y="90" textAnchor="end" className="diagram__label">
          América do Sul
        </text>
        <text x="788" y="104" textAnchor="end" className="diagram__label">
          (Peru)
        </text>

        {/* Nuvem de chuva — desloca-se para leste no El Niño */}
        <g className="diagram__cloud">
          <path
            d="M110 112 a26 26 0 0 1 48 -14 a32 32 0 0 1 58 10 a22 22 0 0 1 4 44 h-104 a20 20 0 0 1 -6 -40z"
            fill="#EAE6DC"
            stroke="#252522"
            strokeWidth="1.5"
          />
          <path
            d="M135 162 l-6 14 M160 162 l-6 14 M185 162 l-6 14 M210 162 l-6 14"
            stroke="#252522"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Ventos */}
        <g className="diagram__layer diagram__layer--normal">
          <path
            d="M620 160 H330"
            stroke="#252522"
            strokeWidth="2.5"
            markerEnd="url(#arrowHead)"
            fill="none"
          />
          <path
            d="M520 140 H260"
            stroke="#252522"
            strokeWidth="2.5"
            markerEnd="url(#arrowHead)"
            fill="none"
          />
          <text x="470" y="128" className="diagram__label diagram__label--mono">
            ventos alísios fortes
          </text>
        </g>

        <g className="diagram__layer diagram__layer--nino">
          <path
            d="M380 160 H470"
            stroke="#252522"
            strokeWidth="2"
            markerEnd="url(#arrowHead)"
            fill="none"
            strokeDasharray="5 5"
          />
          <text x="300" y="140" className="diagram__label diagram__label--mono">
            ventos enfraquecidos
          </text>
        </g>

        {/* Legenda */}
        <g className="diagram__legend">
          <rect x="100" y="345" width="14" height="14" fill="url(#warm)" />
          <text x="122" y="356" className="diagram__label diagram__label--light">
            água quente
          </text>
          <line x1="230" y1="352" x2="262" y2="352" className="diagram__thermo" />
          <text x="270" y="356" className="diagram__label diagram__label--light">
            termoclina
          </text>
        </g>
      </svg>

      <figcaption className="diagram__caption">
        {isElNino ? (
          <>
            <strong>Durante o El Niño</strong>, os ventos alísios enfraquecem e a água
            quente se espalha pelo Pacífico até a costa da América do Sul. As chuvas
            migram junto com o calor, alterando o clima em diversas partes do mundo —
            inclusive no Brasil.
          </>
        ) : (
          <>
            <strong>Em condições normais</strong>, os ventos alísios sopram de leste
            para oeste e empurram a água quente da superfície em direção à Austrália e
            à Indonésia, onde se concentram as chuvas. Na costa do Peru, águas frias
            sobem do fundo do oceano.
          </>
        )}
      </figcaption>
    </figure>
  )
}
