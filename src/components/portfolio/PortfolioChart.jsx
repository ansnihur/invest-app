import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import styles from './PortfolioChart.module.scss';

const data = [
  { name: 'Акції',      value: 5000 },
  { name: 'Облігації',  value: 3000 },
  { name: 'Стартапи',   value: 2000 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const PortfolioChart = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={styles.chartWrapper}>
      <h3 className={styles.total}>Мій портфель: {total.toLocaleString()} грн</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, idx) => (
              <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={val => `${val} грн`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioChart;
