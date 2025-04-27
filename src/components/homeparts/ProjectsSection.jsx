import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectsSection.module.scss'
import project1 from '../../assets/images/project1.png'
import project2 from '../../assets/images/project2.png'

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>Популярні проєкти</h2>
      <div className={styles.projectsCards}>

        <div className={`${styles.projectCard} ${styles.orange}`}>
          <img
            src={project1}
            alt="Green Hills Residence"
            className={styles.projectImg}
          />
          <div className={styles.projectContent}>
            <h3 className={styles.projectName}>Green Hills Residence</h3>
            <p className={styles.projectLocation}>
              Місто: Київ (передмістя, Ірпінь)
            </p>
            <p className={styles.projectDetails}>
              Мінімальна сума інвестицій: 500 $
            </p>
            <p className={styles.projectDetails}>
              Дата початку: 15 червня 2025 року
            </p>
          </div>
          <Link to="/projects" className={styles.projectButton}>
            Інвестуй в ідеї, що живуть
          </Link>
        </div>

        <div className={`${styles.projectCard} ${styles.purple}`}>
          <img
            src={project2}
            alt="StartUA"
            className={styles.projectImg}
          />
          <div className={styles.projectContent}>
            <h3 className={styles.projectName}>StartUA</h3>
            <p className={styles.projectLocation}>
              Місто: Львів
            </p>
            <p className={styles.projectDetails}>
              Мінімальна сума інвестицій: 1 000 $
            </p>
            <p className={styles.projectDetails}>
              Дата початку: 1 липня 2025 року
            </p>
          </div>
          <Link to="/projects" className={styles.projectButton}>
            Інвестуй в ідеї, що живуть
          </Link>
        </div>

      </div>
    </section>
  )
}
