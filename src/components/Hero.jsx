import { useState, useEffect } from 'react'
import { Trans } from '@lingui/react/macro'

const styles = {
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: '#050d0d',
  },
  bgImage: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&h=1080&fit=crop&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.45,
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: `
      linear-gradient(180deg, rgba(5,13,13,0.7) 0%, rgba(5,13,13,0.3) 40%, rgba(5,13,13,0.6) 100%),
      radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,168,56,0.08) 0%, transparent 70%)
    `,
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '920px',
    padding: '0 24px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'rgba(232, 168, 56, 0.12)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(232, 168, 56, 0.25)',
    borderRadius: '100px',
    padding: '10px 24px',
    fontSize: '12px',
    fontWeight: 600,
    color: 'var(--color-gold)',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    marginBottom: '36px',
  },
  title: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(42px, 7.5vw, 86px)',
    fontWeight: 400,
    color: '#ffffff',
    lineHeight: 1.05,
    letterSpacing: '-2.5px',
    marginBottom: '28px',
  },
  titleAccent: {
    background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-coral) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 'clamp(16px, 2vw, 19px)',
    color: 'rgba(255, 255, 255, 0.6)',
    maxWidth: '580px',
    margin: '0 auto 52px',
    lineHeight: 1.75,
    fontWeight: 300,
  },
  buttons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-amber) 100%)',
    color: '#0c1a1a',
    padding: '18px 44px',
    borderRadius: '100px',
    fontSize: '15px',
    fontWeight: 700,
    letterSpacing: '0.5px',
    transition: 'var(--transition)',
    boxShadow: '0 4px 24px rgba(232, 168, 56, 0.35)',
  },
  secondaryBtn: {
    background: 'rgba(255, 255, 255, 0.06)',
    color: '#ffffff',
    padding: '18px 44px',
    borderRadius: '100px',
    fontSize: '15px',
    fontWeight: 500,
    letterSpacing: '0.5px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    transition: 'var(--transition)',
    backdropFilter: 'blur(8px)',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '48px',
    marginTop: '88px',
    flexWrap: 'wrap',
  },
  stat: {
    textAlign: 'center',
    padding: '0 12px',
  },
  statNumber: {
    fontFamily: 'var(--font-heading)',
    fontSize: '40px',
    fontWeight: 500,
    background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.35)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginTop: '8px',
    fontWeight: 500,
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '36px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    animation: 'bounce 2.5s ease-in-out infinite',
  },
  scrollLine: {
    width: '1px',
    height: '48px',
    background: 'linear-gradient(180deg, rgba(232,168,56,0.6) 0%, transparent 100%)',
  },
}

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.4)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section style={styles.hero}>
      <div style={{ ...styles.bgImage, transform: `scale(1.1) translateY(${offset * 0.3}px)` }} />
      <div style={styles.overlay} />

      <div style={{ ...styles.content, transform: `translateY(${offset * 0.15}px)` }}>
        <div style={styles.badge}>
          <span style={{ color: 'var(--color-gold)' }}>&#10022;</span>
          <Trans>Curated Ecological Journeys</Trans>
        </div>

        <h1 style={styles.title}>
          <Trans>Discover the World's Most{' '}
          <span style={styles.titleAccent}>Extraordinary</span>{' '}
          Places</Trans>
        </h1>

        <p style={styles.subtitle}>
          <Trans>Immerse yourself in exclusive, planet-conscious travel experiences.
          From hidden rainforest lodges to cliffside retreats — every journey
          leaves only footprints and unforgettable memories.</Trans>
        </p>

        <div style={styles.buttons}>
          <button
            style={styles.primaryBtn}
            onMouseEnter={e => {
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.boxShadow = '0 8px 32px rgba(232, 168, 56, 0.5)'
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 24px rgba(232, 168, 56, 0.35)'
            }}
          >
            <Trans comment="CTA: browse curated travel packages">Explore Experiences</Trans>
          </button>
          <button
            style={styles.secondaryBtn}
            onMouseEnter={e => {
              e.target.style.background = 'rgba(255, 255, 255, 0.12)'
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
            }}
            onMouseLeave={e => {
              e.target.style.background = 'rgba(255, 255, 255, 0.06)'
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'
            }}
          >
            <Trans>Watch Our Story</Trans>
          </button>
        </div>

        <div style={styles.stats}>
          {[
            { number: '50+', label: <Trans comment="Stat label: travel destinations count">Destinations</Trans> },
            { number: '200+', label: <Trans comment="Stat label: curated travel packages count">Experiences</Trans> },
            { number: '98%', label: <Trans>Happy Travelers</Trans> },
            { number: '0', label: <Trans comment="Stat label: net-zero carbon emissions">Carbon Footprint</Trans> },
          ].map((stat, index) => (
            <div key={index} style={styles.stat}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.scrollIndicator}>
        <div style={styles.scrollLine} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
          50% { transform: translateX(-50%) translateY(12px); opacity: 0.5; }
        }
      `}</style>
    </section>
  )
}
