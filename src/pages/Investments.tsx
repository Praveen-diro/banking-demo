import React from 'react';
import { Line } from 'react-chartjs-2';
import { Layout } from '../components/Layout';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface InvestmentCardProps {
  icon: string;
  title: string;
  value: string;
  subtitle?: string;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({ icon, title, value, subtitle }) => (
  <div className="bg-white rounded-xl p-4 flex items-center gap-4">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
      icon === '💰' ? 'bg-cyan-100' : 
      icon === '📈' ? 'bg-pink-100' : 
      'bg-blue-100'
    }`}>
      <span className="text-2xl">{icon}</span>
    </div>
    <div>
      <p className="text-gray-600 text-sm">{title}</p>
      <h3 className="text-xl font-semibold">{value}</h3>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  </div>
);

const MyInvestmentItem: React.FC<{
  logo: string;
  name: string;
  category: string;
  value: string;
  returnValue: string;
  returnPercentage: string;
  isPositive: boolean;
}> = ({ logo, name, category, value, returnValue, returnPercentage, isPositive }) => (
  <div className="bg-white rounded-xl p-4 mb-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
        {logo}
      </div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-semibold">{value}</p>
      <p className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {returnPercentage}
      </p>
    </div>
  </div>
);

const TrendingStockTable: React.FC = () => (
  <div className="bg-white rounded-xl p-4">
    <table className="w-full">
      <thead>
        <tr className="text-left text-gray-600">
          <th className="py-2">SL No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Return</th>
        </tr>
      </thead>
      <tbody>
        {[
          { id: '01', name: 'Trivago', price: '$520', return: '+5%' },
          { id: '02', name: 'Canon', price: '$480', return: '+10%' },
          { id: '03', name: 'Uber Food', price: '$350', return: '-3%' },
          { id: '04', name: 'Nokia', price: '$940', return: '+2%' },
          { id: '05', name: 'Tiktok', price: '$670', return: '-12%' },
        ].map((stock) => (
          <tr key={stock.id} className="border-t">
            <td className="py-3">{stock.id}</td>
            <td>{stock.name}</td>
            <td>{stock.price}</td>
            <td className={stock.return.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
              {stock.return}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Investments: React.FC = () => {
  const yearlyData = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'Yearly Investment',
        data: [5000, 20000, 15000, 35000, 20000, 25000],
        borderColor: '#FFB800',
        tension: 0.4,
        pointBackgroundColor: '#FFB800',
      },
    ],
  };

  const monthlyData = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [10000, 15000, 25000, 30000, 20000, 35000],
        borderColor: '#00D2FF',
        tension: 0.4,
        pointBackgroundColor: '#00D2FF',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `$${value.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <Layout title="Investments">
      <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <InvestmentCard
            icon="💰"
            title="Total Invested Amount"
            value="$150,000"
          />
          <InvestmentCard
            icon="📈"
            title="Number of Investments"
            value="1,250"
          />
          <InvestmentCard
            icon="📊"
            title="Rate of Return"
            value="+5.80%"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div className="bg-white rounded-xl p-0 sm:p-4">
            <h3 className="text-lg font-semibold mb-2 sm:mb-4 px-4 sm:px-0 pt-4 sm:pt-0">Yearly Total Investment</h3>
            <div className="w-full h-[250px] sm:h-[300px]">
              <Line data={yearlyData} options={chartOptions} />
            </div>
          </div>
          <div className="bg-white rounded-xl p-0 sm:p-4">
            <h3 className="text-lg font-semibold mb-2 sm:mb-4 px-4 sm:px-0 pt-4 sm:pt-0">Monthly Revenue</h3>
            <div className="w-full h-[250px] sm:h-[300px]">
              <Line data={monthlyData} options={chartOptions} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">My Investment</h3>
            <div className="space-y-4">
              <MyInvestmentItem
                logo="🍎"
                name="Apple Store"
                category="E-commerce, Marketplace"
                value="$54,000"
                returnValue="Investment Value"
                returnPercentage="+16%"
                isPositive={true}
              />
              <MyInvestmentItem
                logo="G"
                name="Samsung Mobile"
                category="E-commerce, Marketplace"
                value="$25,300"
                returnValue="Investment Value"
                returnPercentage="-4%"
                isPositive={false}
              />
              <MyInvestmentItem
                logo="T"
                name="Tesla Motors"
                category="Electric Vehicles"
                value="$8,200"
                returnValue="Investment Value"
                returnPercentage="+25%"
                isPositive={true}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Trending Stock</h3>
            <div className="overflow-x-auto">
              <TrendingStockTable />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Investments; 