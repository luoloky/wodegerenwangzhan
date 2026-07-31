import './ProjectCover.css'

/**
 * Project cover placeholder — premium stylized visual.
 * Each variant matches the project's theme & color.
 * 外层包 .cover-inner 供 GSAP 做 scale reveal + parallax。
 */
export default function ProjectCover({ variant = 'lihouhu', color = '#3ddc97', num = '01', image }) {
  return (
    <div className="cover-inner">
      {image ? (
        <img className="cover-image" src={image} alt={`Project cover ${num}`} loading="lazy" />
      ) : (
        <>
          {variant === 'lihouhu' && <CoverLihouhu color={color} num={num} />}
          {variant === 'forest' && <CoverForest color={color} num={num} />}
          {variant === 'conceptual' && <CoverConceptual color={color} num={num} />}
        </>
      )}
    </div>
  )
}

function CoverLihouhu({ color, num }) {
  return (
    <svg className="cover-svg" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lh-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f0608" />
          <stop offset="100%" stopColor="#1a0a0e" />
        </linearGradient>
        <linearGradient id="lh-tiger" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#0f3d24" />
        </linearGradient>
        <radialGradient id="lh-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <pattern id="lh-dots" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.08)" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#lh-bg)" />
      <rect width="1200" height="800" fill="url(#lh-dots)" />
      <circle cx="600" cy="400" r="350" fill="url(#lh-glow)" />

      {/* Stylized tiger face silhouette */}
      <g transform="translate(600, 420)">
        {/* Head */}
        <ellipse cx="0" cy="0" rx="180" ry="160" fill="url(#lh-tiger)" />
        {/* Ears */}
        <path d="M -150 -80 L -120 -180 L -60 -100 Z" fill="url(#lh-tiger)" />
        <path d="M 150 -80 L 120 -180 L 60 -100 Z" fill="url(#lh-tiger)" />
        {/* Inner ears */}
        <path d="M -135 -85 L -120 -150 L -85 -100 Z" fill="#1a0a0e" />
        <path d="M 135 -85 L 120 -150 L 85 -100 Z" fill="#1a0a0e" />
        {/* Eyes */}
        <ellipse cx="-60" cy="-10" rx="18" ry="24" fill="#f5edd6" />
        <ellipse cx="60" cy="-10" rx="18" ry="24" fill="#f5edd6" />
        <ellipse cx="-60" cy="-10" rx="8" ry="14" fill="#0a0a0a" />
        <ellipse cx="60" cy="-10" rx="8" ry="14" fill="#0a0a0a" />
        {/* Nose */}
        <path d="M -15 30 L 0 50 L 15 30 Z" fill="#1a0a0e" />
        {/* Mouth (王 character simplified) */}
        <path d="M -40 60 Q -20 80 0 70 Q 20 80 40 60" stroke="#1a0a0e" strokeWidth="3" fill="none" />
        <line x1="0" y1="50" x2="0" y2="75" stroke="#1a0a0e" strokeWidth="2" />
        {/* 王 on forehead */}
        <g stroke="#f5edd6" strokeWidth="4" strokeLinecap="square" fill="none">
          <line x1="-25" y1="-65" x2="25" y2="-65" />
          <line x1="-25" y1="-50" x2="25" y2="-50" />
          <line x1="0" y1="-70" x2="0" y2="-45" />
        </g>
        {/* Whiskers */}
        <g stroke="#f5edd6" strokeWidth="1.5" strokeLinecap="round">
          <line x1="-40" y1="40" x2="-130" y2="30" />
          <line x1="-40" y1="50" x2="-130" y2="55" />
          <line x1="40" y1="40" x2="130" y2="30" />
          <line x1="40" y1="50" x2="130" y2="55" />
        </g>
      </g>

      {/* Decorative elements */}
      <text x="60" y="80" fontFamily="JetBrains Mono" fontSize="14" fill="rgba(255,255,255,0.4)" letterSpacing="2">
        山西 · 黎城 / SHANXI LICHENG
      </text>
      <text x="60" y="740" fontFamily="JetBrains Mono" fontSize="12" fill="rgba(255,255,255,0.3)" letterSpacing="2">
        非物质文化遗产 / INTANGIBLE CULTURAL HERITAGE
      </text>
      <text x="1140" y="80" fontFamily="JetBrains Mono" fontSize="14" fill="rgba(255,255,255,0.4)" textAnchor="end" letterSpacing="2">
        {num} / 03
      </text>
      <text x="1140" y="740" fontFamily="Noto Sans SC" fontSize="80" fontWeight="900" fill="rgba(255,255,255,0.06)" textAnchor="end" letterSpacing="-4">
        黎侯虎
      </text>

      {/* Corner markers */}
      <g stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none">
        <path d="M 40 40 L 40 70 M 40 40 L 70 40" />
        <path d="M 1160 40 L 1160 70 M 1160 40 L 1130 40" />
        <path d="M 40 760 L 40 730 M 40 760 L 70 760" />
        <path d="M 1160 760 L 1160 730 M 1160 760 L 1130 760" />
      </g>
    </svg>
  )
}

function CoverForest({ color, num }) {
  return (
    <svg className="cover-svg" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="fr-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a1a12" />
          <stop offset="100%" stopColor="#020a06" />
        </linearGradient>
        <linearGradient id="fr-tree" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a4030" />
          <stop offset="100%" stopColor="#0a2018" />
        </linearGradient>
        <radialGradient id="fr-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5edd6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f5edd6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#fr-bg)" />

      {/* Moon */}
      <circle cx="900" cy="220" r="80" fill="url(#fr-moon)" />
      <circle cx="900" cy="220" r="40" fill="#f5edd6" opacity="0.9" />

      {/* Stars */}
      <g fill="#ffffff">
        {[...Array(40)].map((_, i) => {
          const x = (i * 73) % 1200
          const y = (i * 41) % 300
          const r = (i % 3) * 0.5 + 0.5
          return <circle key={i} cx={x} cy={y} r={r} opacity={0.3 + (i % 4) * 0.15} />
        })}
      </g>

      {/* Forest layers */}
      <g opacity="0.4">
        {[...Array(12)].map((_, i) => (
          <polygon
            key={i}
            points={`${i * 100 - 20},800 ${i * 100 + 50},${500 - (i % 3) * 30} ${i * 100 + 120},800`}
            fill="url(#fr-tree)"
          />
        ))}
      </g>
      <g opacity="0.7">
        {[...Array(10)].map((_, i) => (
          <polygon
            key={i}
            points={`${i * 120 + 30},800 ${i * 120 + 90},${550 - (i % 4) * 40} ${i * 120 + 150},800`}
            fill="url(#fr-tree)"
          />
        ))}
      </g>
      <g>
        {[...Array(6)].map((_, i) => (
          <polygon
            key={i}
            points={`${i * 200 + 80},800 ${i * 200 + 180},${620 - (i % 3) * 50} ${i * 200 + 280},800`}
            fill={color}
            opacity={0.6 + (i % 3) * 0.1}
          />
        ))}
      </g>

      {/* Ground */}
      <rect x="0" y="760" width="1200" height="40" fill="#020a06" />
      <line x1="0" y1="760" x2="1200" y2="760" stroke="#1a4030" strokeWidth="2" />

      {/* UI elements overlay */}
      <g>
        <rect x="60" y="60" width="180" height="36" fill="none" stroke="rgba(245,237,214,0.4)" strokeWidth="1" />
        <text x="80" y="83" fontFamily="JetBrains Mono" fontSize="12" fill="rgba(245,237,214,0.6)" letterSpacing="2">
          LEVEL 03 · NIGHT
        </text>
        <rect x="60" y="110" width="120" height="20" fill="none" stroke="rgba(245,237,214,0.3)" strokeWidth="1" />
        <rect x="60" y="110" width="80" height="20" fill="rgba(245,237,214,0.4)" />
        <text x="80" y="124" fontFamily="JetBrains Mono" fontSize="10" fill="#020a06" fontWeight="700">
          HP 80/100
        </text>
      </g>

      <text x="60" y="740" fontFamily="JetBrains Mono" fontSize="14" fill="rgba(245,237,214,0.5)" letterSpacing="2">
        UNITY · 2D · INDIE
      </text>
      <text x="1140" y="80" fontFamily="JetBrains Mono" fontSize="14" fill="rgba(245,237,214,0.5)" textAnchor="end" letterSpacing="2">
        {num} / 03
      </text>
      <text x="1140" y="740" fontFamily="Noto Sans SC" fontSize="70" fontWeight="900" fill="rgba(245,237,214,0.08)" textAnchor="end" letterSpacing="-3">
        森林小卫士
      </text>
    </svg>
  )
}

function CoverConceptual({ color, num }) {
  return (
    <svg className="cover-svg" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="cn-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0c0a1a" />
          <stop offset="100%" stopColor="#1a0e2a" />
        </linearGradient>
        <linearGradient id="cn-shape" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="cn-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#cn-bg)" />
      <circle cx="600" cy="400" r="400" fill="url(#cn-glow)" />

      {/* Abstract geometric composition */}
      <g transform="translate(600, 400)">
        {/* Large circle */}
        <circle cx="0" cy="0" r="280" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <circle cx="0" cy="0" r="220" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 6" />

        {/* Floating shapes */}
        <polygon points="0,-200 173,-100 173,100 0,200 -173,100 -173,-100" fill="none" stroke="url(#cn-shape)" strokeWidth="2" opacity="0.6" />
        <polygon points="0,-140 121,-70 121,70 0,140 -121,70 -121,-70" fill="url(#cn-shape)" opacity="0.3" />

        {/* Inner form */}
        <g transform="rotate(15)">
          <rect x="-100" y="-100" width="200" height="200" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <rect x="-60" y="-60" width="120" height="120" fill="none" stroke={color} strokeWidth="1" />
        </g>

        {/* Center dot */}
        <circle cx="0" cy="0" r="8" fill={color} />
        <circle cx="0" cy="0" r="20" fill="none" stroke={color} strokeWidth="1" />
        <circle cx="0" cy="0" r="40" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" />

        {/* Crosshair lines */}
        <line x1="-300" y1="0" x2="-50" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        <line x1="50" y1="0" x2="300" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        <line x1="0" y1="-300" x2="0" y2="-50" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        <line x1="0" y1="50" x2="0" y2="300" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      </g>

      {/* Small particles */}
      <g fill="#ffffff" opacity="0.4">
        {[...Array(30)].map((_, i) => {
          const x = (i * 137) % 1200
          const y = (i * 89) % 800
          const r = (i % 4) * 0.5 + 0.3
          return <circle key={i} cx={x} cy={y} r={r} />
        })}
      </g>

      <text x="60" y="80" fontFamily="JetBrains Mono" fontSize="14" fill="rgba(255,255,255,0.4)" letterSpacing="2">
        CONCEPTUAL · 2025
      </text>
      <text x="1140" y="80" fontFamily="JetBrains Mono" fontSize="14" fill="rgba(255,255,255,0.4)" textAnchor="end" letterSpacing="2">
        {num} / 03
      </text>
      <text x="60" y="740" fontFamily="JetBrains Mono" fontSize="12" fill="rgba(255,255,255,0.3)" letterSpacing="2">
        DIGITAL ART · CHARACTER · ENVIRONMENT
      </text>
    </svg>
  )
}
