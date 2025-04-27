import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './AdminProfile.module.scss';
import BackgroundGradient from '../../components/background/BackgroundGradient';

const AdminProfile = () => {
  // eslint-disable-next-line no-unused-vars
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('verification');
  const [projectRequests, setProjectRequests] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('projectRequests') || '[]');
    setProjectRequests(stored);
  }, []);

  const handleApprove = (id) => {
    const req = projectRequests.find(r => r.id === id);
    if (req?.phone) {
      window.location.href = `tel:${req.phone}`;
    }
  };

  const handleReject = (id) => {
    const updated = projectRequests.filter(req => req.id !== id);
    localStorage.setItem('projectRequests', JSON.stringify(updated));
    setProjectRequests(updated);
  };

  return (
    <div className={styles.wrapper}>
      <BackgroundGradient />

      <div className={styles.sidebar}>
        <button
          className={activeTab === 'verification' ? styles.active : ''}
          onClick={() => setActiveTab('verification')}
        >
          Верифікація проєктів
        </button>
      </div>

      <div className={styles.contentBox}>
        <div className={styles.tabHeader}>
          {activeTab === 'verification' && 'Перевірка проєктів'}
        </div>

        <div className={styles.content}>
          {activeTab === 'verification' && (
            <>
              {projectRequests.length > 0 ? (
                <div className={styles.requestsGrid}>
                  {projectRequests.map(req => (
                    <div key={req.id} className={styles.requestCard}>
                      <h3>{req.title}</h3>
                      <p><strong>Автор:</strong> {req.author}</p>
                      <p><strong>Телефон:</strong> {req.phone || '–––'}</p>
                      <p><strong>Тип:</strong> {req.type}</p>
                      <p><strong>Сума:</strong> {req.targetSum}</p>
                      <p><strong>Мін. інвестиція:</strong> {req.minInvestment}</p>
                      <p><strong>Ризик:</strong> {req.riskLevel}</p>
                      <p><strong>Опис:</strong> {req.description}</p>

                      <div className={styles.buttons}>
                        <button
                          className={styles.approveButton}
                          onClick={() => handleApprove(req.id)}
                        >
                          Подзвонити
                        </button>
                        <button
                          className={styles.rejectButton}
                          onClick={() => handleReject(req.id)}
                        >
                          Видалити
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Немає запитів на перевірку.</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
