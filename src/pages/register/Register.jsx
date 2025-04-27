import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.scss';
import BackgroundGradient from '../../components/background/BackgroundGradient';

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const onlyNumbers = value.replace(/\D/g, '');
      setForm({ ...form, [name]: onlyNumbers });
    } else {
      setForm({ ...form, [name]: value });
    }

    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim().length < 3) {
      setError('Введіть коректне ім’я (мінімум 3 символи)');
      return;
    }
    if (!/^\d{10,13}$/.test(form.phone)) {
      setError('Номер телефону має містити від 10 до 13 цифр');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Введіть коректну електронну пошту');
      return;
    }
    if (form.password.length < 6) {
      setError('Пароль має містити мінімум 6 символів');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = storedUsers.find((u) => u.email === form.email);

    if (existingUser) {
      setError('Користувач з такою поштою вже існує');
      return;
    }

    const newUser = { ...form, role: 'user' };
    const updatedUsers = [...storedUsers, newUser];

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    login(newUser);
    navigate('/profile');
  };

  return (
    <div className={styles.wrapper}>
      <BackgroundGradient />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Реєстрація</h1>
        {error && <div className={styles.error}>{error}</div>}
        <input
          name="name"
          placeholder="ПІБ"
          value={form.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          name="phone"
          placeholder="Номер телефону"
          value={form.phone}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          name="email"
          placeholder="Електронна пошта"
          value={form.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Зареєструватися
        </button>
      </form>
    </div>
  );
};

export default Register;
