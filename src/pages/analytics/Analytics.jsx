import { allProjects } from '@/data/projects';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from 'recharts';
import styles from './Analytics.module.scss';
import BackgroundGradient from '../../components/background/BackgroundGradient';
const Analytics = () => {
  const sortedProjects = [...allProjects].sort((a, b) => b.investedAmount - a.investedAmount);

  return (
    <div className={styles.wrapper}>
      <BackgroundGradient />
      <h3>Рейтинг Проєктів за Інвестиціями</h3>

      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={sortedProjects}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tickFormatter={(value) => `$${value/1000}k`} />
            <YAxis type="category" dataKey="title" />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Bar dataKey="investedAmount" fill="#4caf50">
              <LabelList dataKey="investedAmount" position="right" formatter={(value) => `$${(value/1000).toFixed(0)}k`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
