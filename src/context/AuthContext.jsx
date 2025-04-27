import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

  return (
    <AuthContext.Provider value={{ user, login, logout, toggleFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
