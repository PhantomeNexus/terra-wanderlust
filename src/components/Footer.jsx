import { Trans } from '@lingui/react/macro'

const styles = {
  footer: {
    padding: '80px 48px 48px',
    background: '#050d0d',
    color: 'rgba(255,255,255,0.5)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '48px',
    marginBottom: '64px',
  },
  brand: {
    maxWidth: '280px',
  },
  logo: {
    fontFamily: 'var(--font-heading)',
    fontSize: '20px',
    fontWeight: 600,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  logoIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, var(--color-gold), var(--color-amber))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 700,
    color: '#0c1a1a',
  },
  brandDesc: {
    fontSize: '14px',
    lineHeight: 1.7,
    color: 'rgba(255,255,255,0.4)',
  },
  colTitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  link: {
    display: 'block',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.35)',
    marginBottom: '12px',
    transition: 'var(--transition)',
  },
  divider: {
    height: '1px',
    background: 'rgba(255,255,255,0.06)',
    marginBottom: '32px',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  copyright: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.25)',
  },
  socials: {
    display: 'flex',
    gap: '12px',
  },
  social: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.4)',
    transition: 'var(--transition)',
    border: 'none',
    cursor: 'pointer',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(52, 211, 153, 0.08)',
    border: '1px solid rgba(52, 211, 153, 0.15)',
    padding: '8px 16px',
    borderRadius: '100px',
    fontSize: '12px',
    color: '#34d399',
    letterSpacing: '0.5px',
    marginTop: '20px',
    fontWeight: 500,
  },
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.brand}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>T</div>
              Terra Wanderlust
            </div>
            <p style={styles.brandDesc}>
              <Trans>
                Redefining luxury travel through ecological consciousness.
                Every journey we craft leaves the world a little better.
              </Trans>
            </p>
            <div style={styles.badge}>
              &#10003; <Trans>B Corp Certified</Trans>
            </div>
          </div>

          <div>
            <h4 style={styles.colTitle}><Trans>Experiences</Trans></h4>
            {[<Trans>Adventure</Trans>, <Trans>Wellness</Trans>, <Trans>Cultural</Trans>, <Trans>Marine</Trans>, <Trans>Spiritual</Trans>, <Trans>Wildlife</Trans>].map((item, i) => (
              <a
                key={i}
                href="#experiences"
                style={styles.link}
                onMouseEnter={e => e.target.style.color = 'var(--color-gold)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
              >
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4 style={styles.colTitle}><Trans>Destinations</Trans></h4>
            {[<Trans>Costa Rica</Trans>, <Trans>Iceland</Trans>, <Trans>Morocco</Trans>, <Trans>Maldives</Trans>, <Trans>Patagonia</Trans>, <Trans>Bali</Trans>].map((item, i) => (
              <a
                key={i}
                href="#destinations"
                style={styles.link}
                onMouseEnter={e => e.target.style.color = 'var(--color-gold)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
              >
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4 style={styles.colTitle}><Trans>Company</Trans></h4>
            {[<Trans>Our Story</Trans>, <Trans>Sustainability</Trans>, <Trans>Careers</Trans>, <Trans>Press</Trans>, <Trans>Partners</Trans>, <Trans>Contact</Trans>].map((item, i) => (
              <a
                key={i}
                href="#"
                style={styles.link}
                onMouseEnter={e => e.target.style.color = 'var(--color-gold)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div style={styles.divider} />

        <div style={styles.bottom}>
          <span style={styles.copyright}>
            <Trans>&copy; 2026 Terra Wanderlust. All rights reserved.</Trans>
          </span>
          <div style={styles.socials}>
            {['&#9993;', '&#128247;', '&#127908;', '&#128038;'].map((icon, i) => (
              <button
                key={i}
                style={styles.social}
                onMouseEnter={e => {
                  e.target.style.background = 'var(--color-gold)'
                  e.target.style.color = '#0c1a1a'
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'rgba(255,255,255,0.05)'
                  e.target.style.color = 'rgba(255,255,255,0.4)'
                }}
                dangerouslySetInnerHTML={{ __html: icon }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
