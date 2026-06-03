import { useState } from 'react'
import { Trans, useLingui } from '@lingui/react/macro'

const styles = {
  section: {
    padding: '140px 40px',
    background: 'var(--color-cream)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  bgAccent: {
    position: 'absolute',
    top: '-200px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    height: '800px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(232,168,56,0.08) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '640px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
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
    color: 'var(--color-deep)',
    letterSpacing: '-1px',
    marginBottom: '20px',
  },
  desc: {
    fontSize: '17px',
    color: 'var(--color-slate)',
    lineHeight: 1.75,
    marginBottom: '48px',
  },
  form: {
    display: 'flex',
    gap: '12px',
    maxWidth: '480px',
    margin: '0 auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    flex: '1 1 280px',
    padding: '17px 24px',
    borderRadius: '100px',
    border: '2px solid var(--color-light-gray)',
    fontSize: '15px',
    fontFamily: 'var(--font-body)',
    background: 'var(--color-white)',
    outline: 'none',
    transition: 'var(--transition)',
    color: 'var(--color-charcoal)',
    minWidth: '0',
  },
  submitBtn: {
    padding: '17px 40px',
    borderRadius: '100px',
    background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-amber) 100%)',
    color: '#0c1a1a',
    fontSize: '15px',
    fontWeight: 700,
    letterSpacing: '0.5px',
    transition: 'var(--transition)',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 20px rgba(232, 168, 56, 0.3)',
  },
  note: {
    fontSize: '13px',
    color: 'var(--color-slate)',
    marginTop: '20px',
    opacity: 0.6,
  },
  success: {
    padding: '20px 36px',
    borderRadius: 'var(--radius-lg)',
    background: 'rgba(52, 211, 153, 0.1)',
    border: '1px solid rgba(52, 211, 153, 0.2)',
    color: '#065f46',
    fontSize: '16px',
    fontWeight: 500,
  },
}

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLingui()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section style={styles.section}>
      <div style={styles.bgAccent} />
      <div style={styles.container}>
        <p style={styles.label}><Trans>Start Your Journey</Trans></p>
        <h2 style={styles.title}><Trans>Ready for Something Extraordinary?</Trans></h2>
        <p style={styles.desc}>
          <Trans>
            Join our community of conscious travelers. Get early access to
            new experiences, exclusive offers, and stories from the world's
            most breathtaking destinations.
          </Trans>
        </p>

        {submitted ? (
          <div style={styles.success}>
            <Trans>Welcome aboard! Check your inbox for your first adventure guide.</Trans>
          </div>
        ) : (
          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={t`Enter your email`}
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={styles.input}
              onFocus={e => e.target.style.borderColor = 'var(--color-gold)'}
              onBlur={e => e.target.style.borderColor = 'var(--color-light-gray)'}
              required
            />
            <button
              type="submit"
              style={styles.submitBtn}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 28px rgba(232, 168, 56, 0.45)'
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 20px rgba(232, 168, 56, 0.3)'
              }}
            >
              <Trans>Get Started</Trans>
            </button>
          </form>
        )}

        <p style={styles.note}><Trans>No spam, ever. Unsubscribe anytime.</Trans></p>
      </div>
    </section>
  )
}
