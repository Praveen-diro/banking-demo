import { Layout } from "@/components/Layout";
import { CreditAccount, CreditAccount2, CreditCard, CreditCardBack } from "@/components/CreditCard";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const weeklyActivityData = [
  { name: 'Sat', deposit: 450, withdraw: 200 },
  { name: 'Sun', deposit: 350, withdraw: 120 },
  { name: 'Mon', deposit: 320, withdraw: 250 },
  { name: 'Tue', deposit: 480, withdraw: 350 },
  { name: 'Wed', deposit: 150, withdraw: 280 },
  { name: 'Thu', deposit: 380, withdraw: 220 },
  { name: 'Fri', deposit: 400, withdraw: 300 },
];

const expenseData = [
  { name: 'Entertainment', value: 30, color: '#2F2E5F' },
  { name: 'Bill Expense', value: 15, color: '#FF8042' },
  { name: 'Investment', value: 20, color: '#FF00FF' },
  { name: 'Others', value: 35, color: '#3B3BF9' },
];

const recentTransactions = [
  {
    icon: "💳",
    name: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
    type: "card"
  },
  {
    icon: "🅿️",
    name: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    type: "paypal"
  },
  {
    icon: "👤",
    name: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    type: "transfer"
  }
];

const quickTransferUsers = [
  { name: "Livia Bator", role: "CEO", image: "https://ui-avatars.com/api/?name=Livia+Bator" },
  { name: "Randy Press", role: "Director", image: "https://ui-avatars.com/api/?name=Randy+Press" },
  { name: "Workman", role: "Designer", image: "https://ui-avatars.com/api/?name=Workman" },
];

const balanceHistoryData = [
  { name: 'Jul', value: 200 },
  { name: 'Aug', value: 350 },
  { name: 'Sep', value: 450 },
  { name: 'Oct', value: 750 },
  { name: 'Nov', value: 250 },
  { name: 'Dec', value: 580 },
  { name: 'Jan', value: 650 }
];

const Index = () => {
  return (
    <Layout title="Overview">
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-8">
          {/* My Cards */}
          <div className="w-full">
            <h2 className="text-xl font-semibold">My Accounts</h2>
            <div className="space-y-4 mt-4">
              <CreditAccount
                balance={510000024333}
                cardHolder="Eric Garcetti"
                cardNumber="3778 **** **** 1234"
                expiryDate="12/22"
                Active="Active"
                CardType="Corporate Account"

              />
            </div>
          </div>

          {/* Card Section */}
          <div className="w-full">
            <div className="flex justify-end mb-4">
              <button className="text-black hover:underline">See All</button>
            </div>
            <div className="space-y-4">
              <CreditAccount2
                balance={21005674}
                cardHolder="Eddy Cusuma"
                cardNumber="8712 **** **** 8945"
                expiryDate="12/22"
                Active="Closed"
                CardType="Current Account"
              />
            </div>
          </div>

          {/* Recent Transaction */}
          <div className="w-full">
            <h2 className="text-xl font-semibold ">Recent Transaction</h2>
            <div className="bg-white rounded-xl shadow-lg p-4 h-[250px] mt-4">
              <div className="overflow-y-auto h-[270px] pr-1">

                {recentTransactions.map((transaction, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between ${
                      index === 0 
                        ? 'bg-[#4C49ED]/5 p-4 rounded-lg'
                        : 'bg-white p-4 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-200 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${
                        index === 0 
                          ? 'bg-[#4C49ED]/10' 
                          : 'bg-gray-100 group-hover:bg-gray-200'
                      } flex items-center justify-center text-lg transition-colors duration-200`}>
                        {transaction.icon}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{transaction.name}</p>
                        <p className="text-xs text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className={`font-medium text-sm ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {transaction.amount > 0 ? '+$' : '-$'}{Math.abs(transaction.amount)}
                      </p>
                      {/* {index === 0 && (
                        <button className="w-8 h-8 rounded-full bg-[#4C49ED] text-white flex items-center justify-center hover:bg-[#4C49ED]/90">
                          +
                        </button>
                      )} */}
                      <button 
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = '/Pdf-Trasaction.pdf';
                          link.download = `transaction-${transaction.date}.pdf`;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200"
                        title="Download Statement"
                      >
                        📥
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-[#1814F3] to-blue-500 bg-clip-text text-transparent">
                Weekly Activity
              </h2>
              <div className="flex items-center gap-4 p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 transition-transform hover:scale-105">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-sm" />
                  <span className="text-sm font-medium">Deposit</span>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:scale-105">
                  <div className="w-3 h-3 rounded-full bg-blue-600 shadow-sm" />
                  <span className="text-sm font-medium">Withdraw</span>
                </div>
              </div>
            </div>
            <div className="h-64 transition-transform hover:scale-[1.02]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyActivityData}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#666', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#666', fontSize: 12 }}
                  />
                  <Bar 
                    dataKey="deposit" 
                    fill="#22D3EE" 
                    radius={[4, 4, 0, 0]}
                    className="transition-all duration-300 hover:opacity-80"
                  />
                  <Bar 
                    dataKey="withdraw" 
                    fill="#2563EB" 
                    radius={[4, 4, 0, 0]}
                    className="transition-all duration-300 hover:opacity-80"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-[#1814F3] to-blue-500 bg-clip-text text-transparent">
                Expense Statistics
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-0">
              <div className="w-full sm:w-1/2 h-48 sm:h-64 transition-transform hover:scale-105">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={0}
                      outerRadius={90}
                      startAngle={90}
                      endAngle={450}
                      paddingAngle={2}
                      stroke="#fff"
                      strokeWidth={3}
                      dataKey="value"
                      className="transition-transform hover:scale-105 focus:outline-none"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          className="transition-opacity hover:opacity-80 drop-shadow-md focus:outline-none"
                          style={{ outline: 'none' }}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full sm:w-1/2 sm:flex sm:items-center sm:h-64">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-4 w-full">
                  {expenseData.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:justify-between p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full shadow-sm transition-transform hover:scale-110" 
                          style={{ backgroundColor: item.color }} 
                        />
                        <span className="text-sm text-gray-600 text-center sm:text-left font-medium">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-center sm:text-right">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Quick Transfer</h2>
            </div>
            <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
              {quickTransferUsers.map((user, index) => (
                <div key={index} className="flex flex-col items-center min-w-[100px]">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-16 h-16 rounded-full mb-2"
                  />
                  <p className="font-medium text-sm">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              ))}
              <button className="flex flex-col items-center justify-center w-16 h-16 rounded-full border-2 border-dashed border-gray-300 min-w-[100px]">
                <span className="text-2xl text-gray-400">+</span>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Write Amount</label>
                <input
                  type="text"
                  value="525.50"
                  className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-50 border border-gray-200"
                />
              </div>
              <button className="w-full py-2 bg-primary text-white rounded-lg flex items-center justify-center gap-2">
                Send <span className="text-lg">➜</span>
              </button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Balance History</h2>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={balanceHistoryData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B3BF9" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#3B3BF9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    dx={-10}
                    ticks={[0, 200, 400, 600, 800]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3B3BF9"
                    strokeWidth={2}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

        </div>
      </div>
    </Layout>
  );
};

export default Index;