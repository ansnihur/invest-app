import { useState } from 'react'
import styles from './Contacts.module.scss'

const Contacts = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', question: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(e => ({ ...e, [e.target.name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'Вкажіть ім’я'
    if (!form.lastName.trim())  errs.lastName  = 'Вкажіть прізвище'
    if (!form.question.trim())  errs.question  = 'Напишіть питання'
    return errs
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ firstName: '', lastName: '', question: '' })
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Хочете інвестувати, але не знаєте як?</h2>
      <p className={styles.subtitle}>
        Заповніть форму і ми надішлемо Вам всю потрібну інформацію
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label>Ваше ім’я*</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className={styles.error}>{errors.firstName}</div>}
        </div>

        <div className={styles.field}>
          <label>Ваше прізвище*</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div className={styles.error}>{errors.lastName}</div>}
        </div>

        <div className={styles.field}>
          <label>Питання*</label>
          <textarea
            name="question"
            rows={4}
            value={form.question}
            onChange={handleChange}
          />
          {errors.question && <div className={styles.error}>{errors.question}</div>}
        </div>

        <button type="submit" className={styles.button}>
          Надіслати
        </button>

        {submitted && (
          <div className={styles.success}>
            Дякуємо! Очікуйте на відповідь на вашу пошту.
          </div>
        )}
      </form>
    </div>
  )
}

export default Contacts;
