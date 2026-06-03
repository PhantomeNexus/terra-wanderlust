import { msg } from '@lingui/core/macro'
import { Trans, useLingui } from '@lingui/react/macro'

const features = [
  {
    icon: '&#127811;',
    title: msg`Carbon Neutral`,
    desc: msg`Every trip is fully offset. We invest in reforestation and renewable energy projects at each destination.`,
    accent: 'linear-gradient(135deg, #34d399, #059669)',
  },
  {
    icon: '&#127758;',
    title: msg`Local Communities`,
    desc: msg`We partner directly with indigenous communities, ensuring your visit supports local economies and preserves culture.`,
    accent: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
  },
  {
    icon: '&#9733;',
    title: msg`Exclusive Access`,
    desc: msg`Limited group sizes and private guides give you intimate access to places most travelers never see.`,
    accent: 'linear-gradient(135deg, var(--color-gold), var(--color-amber))',
  },
  {
    icon: '&#127748;',
    title: msg`Breathtaking Views`,
    desc: msg`Hand-selected accommodations perched on cliffs, nestled in canopies, or floating on crystal waters.`,
    accent: 'linear-gradient(135deg, var(--color-coral), #ec4899)',
  },
]

const styles = {
  section: {
    padding: '140px 40px',
    background: 'var(--color-deep)',
    position: 'relative',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '80px',
  },
  label: {
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'var(--color-gold)',
    marginBottom: '16px',
  },
  title: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(34px, 4.5vw, 52px)',
    fontWeight: 400,
    color: '#ffffff',
    letterSpacing: '-1px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
  },
  card: {
    padding: '44px 32px',
    borderRadius: 'var(--radius-lg)',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    transition: 'var(--transition)',
    position: 'relative',
    overflow: 'hidden',
  },
  cardGlow: {
    position: 'absolute',
    top: '-50%',
    right: '-50%',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    opacity: 0.06,
    filter: 'blur(60px)',
    pointerEvents: 'none',
  },
  icon: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px',
    marginBottom: '24px',
  },
  cardTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '22px',
    fontWeight: 500,
    color: '#ffffff',
    marginBottom: '12px',
  },
  cardDesc: {
    fontSize: '15px',
    color: 'rgba(255, 255, 255, 0.45)',
    lineHeight: 1.75,
  },
}

export default function Features() {
  const { t } = useLingui()

  return (
    <section id="features" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}><Trans>Why Terra Wanderlust</Trans></p>
          <h2 style={styles.title}><Trans>Travel That Gives Back</Trans></h2>
        </div>

        <div style={styles.grid}>
          {features.map(f => (
            <div
              key={t(f.title)}
              style={styles.card}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
              }}
            >
              <div style={{ ...styles.cardGlow, background: f.accent }} />
              <div style={{ ...styles.icon, background: f.accent }}>
                <span dangerouslySetInnerHTML={{ __html: f.icon }} />
              </div>
              <h3 style={styles.cardTitle}>{t(f.title)}</h3>
              <p style={styles.cardDesc}>{t(f.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
