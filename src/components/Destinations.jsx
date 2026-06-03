import { msg } from '@lingui/core/macro'
import { Trans, useLingui } from '@lingui/react/macro'

const destinations = [
  { name: msg`Costa Rica`, count: msg`12 Experiences`, image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=900&h=500&fit=crop', span: 'wide' },
  { name: msg`Iceland`, count: msg`8 Experiences`, image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=500&fit=crop', span: 'normal' },
  { name: msg`Morocco`, count: msg`10 Experiences`, image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&h=500&fit=crop', span: 'normal' },
  { name: msg`Maldives`, count: msg`6 Experiences`, image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=500&fit=crop', span: 'normal' },
  { name: msg`Patagonia`, count: msg`9 Experiences`, image: 'https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&h=500&fit=crop', span: 'normal' },
  { name: msg`Bali`, count: msg`14 Experiences`, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&h=500&fit=crop', span: 'wide' },
]

const styles = {
  section: {
    padding: '140px 40px',
    background: 'var(--color-white)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  label: {
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'var(--color-gold)',
    marginBottom: '16px',
  },
  title: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(32px, 4vw, 48px)',
    fontWeight: 400,
    color: 'var(--color-deep)',
    letterSpacing: '-1px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  card: {
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    position: 'relative',
    height: '280px',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '32px',
    cursor: 'pointer',
    transition: 'var(--transition)',
  },
  cardImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  cardOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05) 100%)',
    zIndex: 1,
  },
  cardContent: {
    position: 'relative',
    zIndex: 2,
  },
  cardName: {
    fontFamily: 'var(--font-heading)',
    fontSize: '28px',
    fontWeight: 500,
    color: 'white',
    marginBottom: '4px',
  },
  cardCount: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    fontWeight: 400,
  },
  arrow: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '18px',
    zIndex: 2,
    transition: 'var(--transition)',
  },
}

export default function Destinations() {
  const { t } = useLingui()

  return (
    <section id="destinations" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}><Trans>Where We Go</Trans></p>
          <h2 style={styles.title}><Trans>Featured Destinations</Trans></h2>
        </div>

        <div style={styles.grid}>
          {destinations.map(d => (
            <div
              key={d.name.id}
              style={{
                ...styles.card,
                gridColumn: d.span === 'wide' ? 'span 2' : 'span 1',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)'
                const img = e.currentTarget.querySelector('img')
                if (img) img.style.transform = 'scale(1.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
                const img = e.currentTarget.querySelector('img')
                if (img) img.style.transform = 'scale(1)'
              }}
            >
              <img src={d.image} alt={t(d.name)} style={styles.cardImg} loading="lazy" />
              <div style={styles.cardOverlay} />
              <div style={styles.cardContent}>
                <h3 style={styles.cardName}>{t(d.name)}</h3>
                <span style={styles.cardCount}>{t(d.count)}</span>
              </div>
              <div style={styles.arrow}>&#8599;</div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            #destinations .grid-container > div { grid-column: span 1 !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
