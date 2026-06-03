import { useState, useEffect } from 'react'
import { Trans, useLingui } from '@lingui/react/macro'
import { msg } from '@lingui/core/macro'

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'var(--transition)',
    padding: '0 48px',
  },
  navScrolled: {
    background: 'rgba(12, 26, 26, 0.92)',
    backdropFilter: 'blur(24px)',
    boxShadow: '0 1px 0 rgba(255,255,255,0.06)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
  },
  logo: {
    fontFamily: 'var(--font-heading)',
    fontSize: '22px',
    fontWeight: 600,
    color: '#ffffff',
    letterSpacing: '-0.3px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-amber) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0c1a1a',
    fontSize: '18px',
    fontWeight: 700,
  },
  links: {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
  },
  link: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.55)',
    transition: 'var(--transition)',
    letterSpacing: '0.3px',
  },
  cta: {
    background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-amber) 100%)',
    color: '#0c1a1a',
    padding: '11px 28px',
    borderRadius: '100px',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.5px',
    transition: 'var(--transition)',
    boxShadow: '0 2px 12px rgba(232, 168, 56, 0.25)',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    padding: '8px',
  },
  hamburgerLine: {
    width: '22px',
    height: '2px',
    background: '#ffffff',
    borderRadius: '2px',
    transition: 'var(--transition)',
  },
  mobileMenu: {
    position: 'fixed',
    top: '80px',
    left: 0,
    right: 0,
    background: 'rgba(12, 26, 26, 0.97)',
    backdropFilter: 'blur(24px)',
    padding: '24px 48px 36px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: 'var(--shadow-lg)',
  },
}

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { t } = useLingui()

  const navLinks = [
    { label: msg({ message: `Experiences`, comment: "Nav link: curated travel packages section" }), href: '#experiences' },
    { label: msg({ message: `Destinations`, comment: "Nav link: travel destinations section" }), href: '#destinations' },
    { label: msg({ message: `About`, comment: "Nav link: about us section" }), href: '#features' },
    { label: msg({ message: `Stories`, comment: "Nav link: traveler testimonials section" }), href: '#testimonials' },
  ]

  return (
    <>
      <nav style={{
        ...styles.nav,
        ...(scrolled ? styles.navScrolled : {}),
      }}>
        <div style={styles.container}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>T</div>
            <Trans>Terra Wanderlust</Trans>
          </div>

          <div style={{
            ...styles.links,
            '@media (maxWidth: 768px)': { display: 'none' },
          }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={styles.link}
                onMouseEnter={e => e.target.style.color = '#ffffff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255, 255, 255, 0.55)'}
              >
                {t(link.label)}
              </a>
            ))}
            <button
              style={styles.cta}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 20px rgba(232, 168, 56, 0.4)'
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 2px 12px rgba(232, 168, 56, 0.25)'
              }}
            >
              <Trans comment="CTA: reserve a travel experience">Book Now</Trans>
            </button>
          </div>

          <button
            style={{ ...styles.hamburger }}
            className="mobile-nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t`Toggle menu`}
          >
            <span style={styles.hamburgerLine} />
            <span style={styles.hamburgerLine} />
            <span style={styles.hamburgerLine} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={styles.mobileMenu} className="mobile-menu">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{ ...styles.link, fontSize: '18px' }}
              onClick={() => setMenuOpen(false)}
            >
              {t(link.label)}
            </a>
          ))}
          <button style={{ ...styles.cta, textAlign: 'center' }}><Trans comment="CTA: reserve a travel experience">Book Now</Trans></button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-nav-toggle { display: flex !important; }
          nav > div > div:nth-child(2) { display: none !important; }
        }
      `}</style>
    </>
  )
}
