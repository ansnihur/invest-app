import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './HeroSection.module.scss'
import mapSvg from '../../assets/icons/map.svg'
import markerIcon from '../../assets/icons/star.svg'

const HeroSection = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => {
      const offset = window.scrollY / 5
      const wrapper = document.querySelector(`.${styles.mapWrapper}`)
      if (wrapper) wrapper.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = id => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else if (id === 'projects') navigate('/projects')
  }

  const markers = [
    { top: '30%', left: '50%' },
    { top: '45%', left: '80%' },
    { top: '40%', left: '20%' },
    { top: '85%', left: '65%' }
  ]

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Invícta — це про незламність.
        <div className={styles.subtitle}>Вони за нас, а ми за них.</div>
      </h1>

      <div className={styles.mapWrapper}>
        <img src={mapSvg} alt="Карта України" className={styles.map} />
        {markers.map((pos, i) => (
          <div
            key={i}
            className={styles.marker}
            style={{ top: pos.top, left: pos.left }}
          >
            <img src={markerIcon} alt="Marker" className={styles.markerIcon} />
          </div>
        ))}
        <button
          className={styles.cta}
          onClick={() => scrollTo('projects')}
        >
          Допомогти прямо зараз
        </button>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.number}>75+</div>
          <div className={styles.label}>Проєктів</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>50 000₴</div>
          <div className={styles.label}>Інвестовано</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>80+</div>
          <div className={styles.label}>Інвесторів</div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;