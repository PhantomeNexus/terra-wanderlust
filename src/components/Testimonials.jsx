import { useState } from 'react'
import { msg } from '@lingui/core/macro'
import { Trans, useLingui } from '@lingui/react/macro'

const testimonials = [
  {
    quote: msg`Terra Wanderlust gave us the most transformative travel experience of our lives. Waking up in a treehouse canopy in Costa Rica while howler monkeys sang us awake — pure magic.`,
    name: msg`Sarah & James`,
    role: msg({ message: `Honeymoon in Costa Rica`, comment: "Trip type and destination attribution for testimonial" }),
    rating: 5,
  },
  {
    quote: msg`As someone who's traveled to 60+ countries, I thought I'd seen it all. The Northern Lights retreat redefined what luxury eco-travel can be. Impeccable.`,
    name: msg`Marcus Chen`,
    role: msg({ message: `Solo Traveler, Iceland`, comment: "Trip type and destination attribution for testimonial" }),
    rating: 5,
  },
  {
    quote: msg`The attention to sustainability isn't performative — it's woven into every detail. And the views? I still dream about that Patagonian sunrise.`,
    name: msg`Elena Rodriguez`,
    role: msg({ message: `Family Trip, Patagonia`, comment: "Trip type and destination attribution for testimonial" }),
    rating: 5,
  },
]

const styles = {
  section: {
    padding: '140px 40px',
    background: 'var(--color-deep)',
    position: 'relative',
    overflow: 'hidden',
  },
  bgGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(232,168,56,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px',
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
  card: {
    textAlign: 'center',
    padding: '0 20px',
  },
  stars: {
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',
    marginBottom: '36px',
  },
  star: {
    color: 'var(--color-gold)',
    fontSize: '18px',
  },
  quote: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(22px, 3vw, 30px)',
    fontWeight: 400,
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: 1.55,
    fontStyle: 'italic',
    marginBottom: '44px',
  },
  author: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  authorName: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#ffffff',
    letterSpacing: '0.5px',
  },
  authorRole: {
    fontSize: '14px',
    color: 'var(--color-gold)',
    fontWeight: 500,
    opacity: 0.7,
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '52px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    border: 'none',
    transition: 'var(--transition)',
    padding: 0,
  },
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const { t } = useLingui()
  const current = testimonials[active]

  return (
    <section id="testimonials" style={styles.section}>
      <div style={styles.bgGlow} />
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}><Trans>Traveler Stories</Trans></p>
          <h2 style={styles.title}><Trans>Words From the Journey</Trans></h2>
        </div>

        <div style={styles.card}>
          <div style={styles.stars}>
            {[...Array(current.rating)].map((_, i) => (
              <span key={i} style={styles.star}>&#9733;</span>
            ))}
          </div>
          <p style={styles.quote}>&ldquo;{t(current.quote)}&rdquo;</p>
          <div style={styles.author}>
            <span style={styles.authorName}>{t(current.name)}</span>
            <span style={styles.authorRole}>{t(current.role)}</span>
          </div>
        </div>

        <div style={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              style={{
                ...styles.dot,
                background: i === active
                  ? 'var(--color-gold)'
                  : 'rgba(255,255,255,0.15)',
                width: i === active ? '24px' : '8px',
                borderRadius: i === active ? '4px' : '50%',
              }}
              onClick={() => setActive(i)}
              aria-label={t`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
