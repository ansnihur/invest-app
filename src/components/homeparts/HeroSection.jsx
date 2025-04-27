// src/components/homeparts/HeroSection.jsx
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './HeroSection.module.scss'
import mapSvg from '../../assets/icons/map.svg'

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

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
      Invicta — це про незламність.
      Вони за нас, а ми за них.
      </h1>

      <div className={styles.mapWrapper}>
        <img src={mapSvg} alt="Карта України" className={styles.map} />
        <div className={styles.marker} style={{ top: '30%', left: '50%' }} />
        <div className={styles.marker} style={{ top: '45%', left: '80%' }} />
        <div className={styles.marker} style={{ top: '40%', left: '20%' }} />
        <div className={styles.marker} style={{ top: '85%', left: '65%' }} />

        <button
          className={styles.cta}
          onClick={() => scrollTo('projects')}
        >
          Допомогти прямо зараз
        </button>
      </div>

      <nav className={styles.nav}>
        <button onClick={() => scrollTo('benefits')}>Чим це корисно?</button>
        <button onClick={() => scrollTo('projects')}>Наші проєкти</button>
        <button onClick={() => scrollTo('contacts')}>Контакти</button>
      </nav>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.number}>120+</div>
          <div className={styles.label}>Проєктів</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>5 000 000₴</div>
          <div className={styles.label}>Інвестовано</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>800+</div>
          <div className={styles.label}>Інвесторів</div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
