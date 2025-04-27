import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const saveUser = (u) => {
    setUser(u);
    localStorage.setItem('user', JSON.stringify(u));
  };

  const login = (data) => {
    const initial = { ...data, favorites: data.favorites || [] };
    saveUser(initial);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const toggleFavorite = (project) => {
    if (!user) return;
    const favs = user.favorites || [];
    const exists = favs.find((p) => p.id === project.id);
    const updated = exists
      ? favs.filter((p) => p.id !== project.id)
      : [...favs, project];
    saveUser({ ...user, favorites: updated });
  };

  // ✅ Додаємо оновлення профілю:
  const updateProfile = (updatedData) => {
    if (!user) return;
    const updatedUser = { ...user, ...updatedData };
    saveUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, toggleFavorite, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
