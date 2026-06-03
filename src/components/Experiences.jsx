import { useState } from 'react'
import { msg } from '@lingui/core/macro'
import { Trans, useLingui } from '@lingui/react/macro'

const experiences = [
  {
    id: 1,
    title: msg`Rainforest Canopy Walk`,
    location: msg`Costa Rica`,
    price: msg`$2,800`,
    duration: msg`5 Days`,
    tag: 'Adventure',
    desc: msg`Traverse suspended bridges above ancient cloud forests, zip-line between treetops, and sleep in luxury treehouses with panoramic jungle views.`,
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=500&fit=crop',
  },
  {
    id: 2,
    title: msg`Northern Lights Retreat`,
    location: msg`Iceland`,
    price: msg`$4,200`,
    duration: msg`7 Days`,
    tag: 'Wellness',
    desc: msg`Soak in geothermal hot springs under the aurora borealis, explore volcanic ice caves, and stay in glass-domed eco-lodges.`,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=500&fit=crop',
  },
  {
    id: 3,
    title: msg`Sahara Desert Safari`,
    location: msg`Morocco`,
    price: msg`$3,500`,
    duration: msg`6 Days`,
    tag: 'Cultural',
    desc: msg`Ride camels across golden dunes at sunset, dine under star-filled skies in luxury desert camps, and explore ancient Berber villages.`,
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&h=500&fit=crop',
  },
  {
    id: 4,
    title: msg`Coral Reef Expedition`,
    location: msg`Maldives`,
    price: msg`$5,100`,
    duration: msg`8 Days`,
    tag: 'Marine',
    desc: msg`Dive pristine reefs with marine biologists, contribute to coral restoration, and unwind in overwater villas powered by solar energy.`,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=500&fit=crop',
  },
  {
    id: 5,
    title: msg`Alpine Wilderness Trek`,
    location: msg`Patagonia`,
    price: msg`$3,900`,
    duration: msg`9 Days`,
    tag: 'Adventure',
    desc: msg`Hike through pristine glaciers and ancient forests, kayak turquoise lakes, and camp in eco-shelters with views of towering granite spires.`,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop',
  },
  {
    id: 6,
    title: msg`Sacred Temple Journey`,
    location: msg`Bali, Indonesia`,
    price: msg`$2,400`,
    duration: msg`6 Days`,
    tag: 'Spiritual',
    desc: msg`Meditate in thousand-year-old temples, practice yoga on rice terrace cliffs, and join local ceremonies in traditional Balinese compounds.`,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=500&fit=crop',
  },
]

const tagKeys = ['All', 'Adventure', 'Wellness', 'Cultural', 'Marine', 'Spiritual']

const tagLabels = {
  All: msg`All`,
  Adventure: msg`Adventure`,
  Wellness: msg`Wellness`,
  Cultural: msg({ message: `Cultural`, comment: "Experience category: cultural immersion trips" }),
  Marine: msg({ message: `Marine`, comment: "Experience category: ocean/reef trips" }),
  Spiritual: msg({ message: `Spiritual`, comment: "Experience category: meditation/temple trips" }),
}

const styles = {
  section: {
    padding: '140px 40px',
    background: 'var(--color-cream)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
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
  filters: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '60px',
    flexWrap: 'wrap',
  },
  filterBtn: {
    padding: '10px 24px',
    borderRadius: '100px',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'var(--transition)',
    border: '1px solid var(--color-light-gray)',
    background: 'var(--color-white)',
    color: 'var(--color-slate)',
  },
  filterBtnActive: {
    background: 'var(--color-deep)',
    color: 'var(--color-white)',
    border: '1px solid var(--color-deep)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
    gap: '32px',
  },
  card: {
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    background: 'var(--color-white)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition)',
  },
  cardImage: {
    height: '240px',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '24px',
    overflow: 'hidden',
  },
  cardImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  cardImageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05) 100%)',
    zIndex: 1,
  },
  cardTag: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    padding: '6px 14px',
    borderRadius: '100px',
    fontSize: '12px',
    fontWeight: 600,
    color: 'white',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    zIndex: 2,
  },
  cardLocation: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    zIndex: 2,
  },
  cardBody: {
    padding: '28px',
  },
  cardTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '22px',
    fontWeight: 500,
    color: 'var(--color-deep)',
    marginBottom: '12px',
  },
  cardDesc: {
    fontSize: '14px',
    color: 'var(--color-slate)',
    lineHeight: 1.7,
    marginBottom: '20px',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    borderTop: '1px solid var(--color-light-gray)',
  },
  cardPrice: {
    fontFamily: 'var(--font-heading)',
    fontSize: '24px',
    fontWeight: 600,
    color: 'var(--color-deep)',
  },
  cardPricePer: {
    fontSize: '13px',
    color: 'var(--color-slate)',
    fontWeight: 400,
    fontFamily: 'var(--font-body)',
  },
  cardDuration: {
    fontSize: '14px',
    color: 'var(--color-slate)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  bookBtn: {
    background: 'linear-gradient(135deg, var(--color-deep) 0%, var(--color-rich) 100%)',
    color: 'var(--color-white)',
    padding: '12px 24px',
    borderRadius: '100px',
    fontSize: '14px',
    fontWeight: 600,
    transition: 'var(--transition)',
  },
}

export default function Experiences() {
  const [activeFilter, setActiveFilter] = useState('All')
  const { t } = useLingui()

  const filtered = activeFilter === 'All'
    ? experiences
    : experiences.filter(e => e.tag === activeFilter)

  return (
    <section id="experiences" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}><Trans>Curated Journeys</Trans></p>
          <h2 style={styles.title}><Trans>Unforgettable Experiences</Trans></h2>
        </div>

        <div style={styles.filters}>
          {tagKeys.map(tag => (
            <button
              key={tag}
              style={{
                ...styles.filterBtn,
                ...(activeFilter === tag ? styles.filterBtnActive : {}),
              }}
              onClick={() => setActiveFilter(tag)}
            >
              {t(tagLabels[tag])}
            </button>
          ))}
        </div>

        <div style={styles.grid}>
          {filtered.map(exp => (
            <div
              key={exp.id}
              style={styles.card}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)'
                const img = e.currentTarget.querySelector('img')
                if (img) img.style.transform = 'scale(1.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                const img = e.currentTarget.querySelector('img')
                if (img) img.style.transform = 'scale(1)'
              }}
            >
              <div style={styles.cardImage}>
                <img src={exp.image} alt={t(exp.title)} style={styles.cardImg} loading="lazy" />
                <div style={styles.cardImageOverlay} />
                <span style={styles.cardTag}>{t(tagLabels[exp.tag])}</span>
                <span style={styles.cardLocation}>
                  &#128205; {t(exp.location)}
                </span>
              </div>
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{t(exp.title)}</h3>
                <p style={styles.cardDesc}>{t(exp.desc)}</p>
                <div style={styles.cardFooter}>
                  <div>
                    <span style={styles.cardPrice}>{t(exp.price)}</span>
                    <span style={styles.cardPricePer}><Trans> / person</Trans></span>
                  </div>
                  <span style={styles.cardDuration}>&#128337; {t(exp.duration)}</span>
                </div>
                <button
                  style={{ ...styles.bookBtn, marginTop: '20px', width: '100%' }}
                  onMouseEnter={e => e.target.style.background = 'var(--color-forest-light)'}
                  onMouseLeave={e => e.target.style.background = 'var(--color-forest)'}
                >
                  <Trans>View Details</Trans>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
