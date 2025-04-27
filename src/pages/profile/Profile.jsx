// src/pages/profile/Profile.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Profile.module.scss'
import { useAuth } from '../../context/AuthContext'
import FlipCard from '../../components/flipcard/FlipCard'
import PortfolioChart from '../../components/portfolio/PortfolioChart'

const Profile = () => {
  const { user, updateProfile } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('profile')
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    password: user?.password || ''
  })
  const [msg, setMsg] = useState('')

  const handleChange = e =>
    setFormData(d => ({ ...d, [e.target.name]: e.target.value }))

  const handleSave = () => {
    updateProfile(formData)
    setMsg('Збережено ✅')
    setTimeout(() => setMsg(''), 2000)
  }

  const tabs = [
    {
      key: 'profile',
      label: 'Особистий профіль',
      content: (
        <div className={styles.form}>
          {msg && <div className={styles.success}>{msg}</div>}
          {['name','phone','email','password'].map(key => (
            <input
              key={key}
              name={key}
              type={key === 'password' ? 'password' : 'text'}
              value={formData[key]}
              onChange={handleChange}
              placeholder={{
                name: 'Ім’я користувача',
                phone: 'Номер телефону',
                email: 'Email',
                password: 'Пароль'
              }[key]}
            />
          ))}
          <button onClick={handleSave} className={styles.saveButton}>
            Зберегти
          </button>
        </div>
      )
    },
    {
      key: 'projects',
      label: 'Проекти',
      content: (
        <div className={styles.projectsActions}>
          <button
            className={styles.actionButton}
            onClick={() => navigate('/createproject')}
          >
            Створити проєкт
          </button>
          <button
            className={styles.actionButton}
            onClick={() => navigate('/projects')}
          >
            Інвестувати
          </button>
        </div>
      )
    },
    {
      key: 'favorites',
      label: 'Вподобані',
      content: (
        <div className={styles.projectsGrid}>
          {user?.favorites?.length
            ? user.favorites.map(p => <FlipCard key={p.id} data={p} />)
            : <p>У вас ще немає вподобаних проєктів.</p>
          }
        </div>
      )
    },
    {
      key: 'portfolio',
      label: 'Портфель',
      content: (
        <div className={styles.content}>
          <PortfolioChart />
        </div>
      )
    }
  ]

  const current = tabs.find(t => t.key === activeTab)

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        {tabs.map(t => (
          <button
            key={t.key}
            className={activeTab === t.key ? styles.active : ''}
            onClick={() => setActiveTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.contentBox}>
        <div className={styles.tabHeader}>{current.label}</div>
        <div className={styles.content}>
          {current.content}
        </div>
      </div>
    </div>
  )
}

export default Profile
