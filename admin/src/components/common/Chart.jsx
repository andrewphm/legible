import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

import { useEffect, useState, useMemo } from 'react';

import API from '../../api';

const Chart = () => {
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await API.getUserStats();

        let initialData = [
          {
            name: 'Dec',
            'New Users': null,
          },
          {
            name: 'Jan',
            'New Users': null,
          },
          {
            name: 'Feb',
            'New Users': null,
          },
        ];

        for (let item of data) {
          if (item._id === 12) {
            initialData[0]['New Users'] = item.total;
          }
          if (item._id === 1) {
            initialData[1]['New Users'] = item.total;
          }
          if (item._id === 2) {
            initialData[2]['New Users'] = item.total;
          }
        }

        console.log(initialData);

        setUserStats(initialData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="py-5 pr-5 pb-10 shadow-lg h-5/6 w-full max-w-xl bg-neutral-100 flex flex-col items-start">
      <h3 className="text-secondary font-semibold text-lg mb-3 pl-5">
        User Analytics
      </h3>

      <ResponsiveContainer>
        <LineChart data={userStats}>
          <YAxis stroke="#34515f" />
          <XAxis dataKey="name" stroke="#34515f" />
          <Line type="monotone" dataKey="New Users" stroke="#40806b" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
