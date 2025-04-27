import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import BackgroundGradient from '../../components/background/BackgroundGradient';
import styles from './Login.module.scss';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Введіть коректну електронну пошту');
      return;
    }

    if (form.password.length < 6) {
      setError('Пароль має містити мінімум 6 символів');
      return;
    }

    if (form.email === 'admin@gmail.com' && form.password === 'admin123') {
      login({ email: 'admin', role: 'admin' });
      navigate('/admin');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = storedUsers.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (foundUser) {
      login(foundUser);
      navigate('/profile');
    } else {
      setError('Невірний email або пароль');
    }
  };

  return (
    <div className={styles.wrapper}>
      <BackgroundGradient />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Вхід</h1>
        {error && <div className={styles.error}>{error}</div>}
        <input
          name="email"
          placeholder="Email"
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
          Увійти
        </button>
      </form>
    </div>
  );
};

export default Login;
