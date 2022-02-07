import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { useState, useEffect } from 'react';

import API from '../../api';

const RevenueWidget = () => {
  const [income, setIncome] = useState(null);
  const [percentage, setPercentage] = useState(null);

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const res = await API.getMonthlyRevenue();
        setIncome((prev) => {
          return [
            ...res.data.sort((a, b) => {
              return a._id - b._id;
            }),
          ];
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchIncome();
  }, []);

  useEffect(() => {
    const calculatePercentChange = () => {
      const percentChange = Math.floor(
        ((income[1].total - income[0].total) / income[0].total) * 100
      );

      console.log(percentChange);

      setPercentage(percentChange);
    };

    income && calculatePercentChange();
  }, [income]);

  return (
    <div className="bg-neutral-50 shadow-lg p-4">
      <h2 className="font-semibold text-lg mb-3">Revenue</h2>

      {income ? (
        <div className="">
          <p className="font-semibold text-lg text-primary">
            ${income[1].total}
          </p>
          <div className="flex items-center font-medium">
            <p className="text-base">+{percentage}%</p>
            <div className="flex items-center">
              {percentage > 0 ? (
                <ArrowUpward className="text-green-600 text-lg" />
              ) : (
                <ArrowDownward className="text-red-600" />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="mx-auto">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="#34515f"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="#34515f"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      )}

      <p className="text-sm text-gray-500">Compared to last month</p>
    </div>
  );
};

export default RevenueWidget;
