// src/pages/create-project/CreateProject.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import styles from './CreateProject.module.scss'

const CreateProject = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    targetSum: '',
    minInvestment: '',
    riskLevel: '',
    photoUrl: '',
    idProofUrl: '',
    description: '',
    phone: user?.phone || ''
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  if (!user) {
    navigate('/login')
    return null
  }

  const validate = () => {
    const errs = {}
    if (!formData.title) errs.title = 'Обов’язкове поле'
    if (!formData.type) errs.type = 'Обов’язкове поле'
    if (!formData.targetSum) errs.targetSum = 'Обов’язкове поле'
    if (!formData.minInvestment) errs.minInvestment = 'Обов’язкове поле'
    if (!formData.riskLevel) errs.riskLevel = 'Обов’язкове поле'
    if (!formData.phone) errs.phone = 'Обов’язкове поле'
    if (!formData.description) errs.description = 'Опишіть проєкт'
    return errs
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(fd => ({ ...fd, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    // Зберігати заявку в localStorage для адміна
    const stored = JSON.parse(localStorage.getItem('projectRequests') || '[]')
    const newRequest = {
      ...formData,
      id: Date.now(),
      status: 'pending',
      author: user.name
    }
    localStorage.setItem('projectRequests', JSON.stringify([...stored, newRequest]))

    // Показ сповіщення
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      navigate('/profile')
    }, 3000)
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Реєстрація проєкту</h2>

        <input
          className={styles.input}
          name="title"
          placeholder="Назва проєкту"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <div className={styles.error}>{errors.title}</div>}

        <input
          className={styles.input}
          name="type"
          placeholder="Тип проєкту"
          value={formData.type}
          onChange={handleChange}
        />
        {errors.type && <div className={styles.error}>{errors.type}</div>}

        <input
          className={styles.input}
          name="targetSum"
          placeholder="Сума, яку плануєте залучити"
          value={formData.targetSum}
          onChange={handleChange}
        />
        {errors.targetSum && <div className={styles.error}>{errors.targetSum}</div>}

        <input
          className={styles.input}
          name="minInvestment"
          placeholder="Мінімальна інвестиція"
          value={formData.minInvestment}
          onChange={handleChange}
        />
        {errors.minInvestment && <div className={styles.error}>{errors.minInvestment}</div>}

        <input
          className={styles.input}
          name="riskLevel"
          placeholder="Рівень ризику"
          value={formData.riskLevel}
          onChange={handleChange}
        />

        <input
          className={styles.input}
          name="phone"
          placeholder="Номер телефону"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className={styles.error}>{errors.phone}</div>}

        <input
          className={styles.input}
          name="photoUrl"
          placeholder="Фото проєкту (URL)"
          value={formData.photoUrl}
          onChange={handleChange}
        />

        <input
          className={styles.input}
          name="idProofUrl"
          placeholder="Перевірка посвідчення (URL)"
          value={formData.idProofUrl}
          onChange={handleChange}
        />

        <textarea
          className={styles.input}
          name="description"
          placeholder="Опис"
          rows={4}
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <div className={styles.error}>{errors.description}</div>}

        <button className={styles.button} type="submit">
          Надіслати заявку
        </button>
        {success && <div className={styles.success}>Ваш проєкт розглядається! Ми з вами зв’яжемося.</div>}
      </form>
      <button
        onClick={() => {
            localStorage.removeItem('projectRequests')
            setProjectRequests([])
        }}
        >
        Очистити всі заявки
    </button>

    </div>
  )
}

export default CreateProject
