import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '../components/Header';
import { Layout } from '@/components/Layout';
interface LoanType {
  id: string;
  type: 'Personal' | 'Corporate' | 'Business' | 'Custom';
  amount: string;
  icon: React.ReactNode;
}

interface ActiveLoan {
  id: string;
  loanMoney: number;
  leftToRepay: number;
  duration: string;
  interestRate: number;
  installment: string;
}

const Loans: React.FC = () => {
  const loanTypes: LoanType[] = [
    {
      id: '1',
      type: 'Personal',
      amount: '$50,000',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    },
    {
      id: '2',
      type: 'Corporate',
      amount: '$100,000',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    },
    {
      id: '3',
      type: 'Business',
      amount: '$500,000',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    },
    {
      id: '4',
      type: 'Custom',
      amount: 'Choose Money',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    },
  ];

  const activeLoans: ActiveLoan[] = [
    { id: '01', loanMoney: 100000, leftToRepay: 40500, duration: '8 Months', interestRate: 12, installment: '$2,000 / month' },
    { id: '02', loanMoney: 500000, leftToRepay: 250000, duration: '36 Months', interestRate: 10, installment: '$8,000 / month' },
    { id: '03', loanMoney: 900000, leftToRepay: 40500, duration: '12 Months', interestRate: 12, installment: '$5,000 / month' },
    { id: '04', loanMoney: 50000, leftToRepay: 40500, duration: '25 Months', interestRate: 5, installment: '$2,000 / month' },
    { id: '05', loanMoney: 50000, leftToRepay: 40500, duration: '5 Months', interestRate: 16, installment: '$10,000 / month' },
    { id: '06', loanMoney: 80000, leftToRepay: 25500, duration: '14 Months', interestRate: 8, installment: '$2,000 / month' },
    { id: '07', loanMoney: 12000, leftToRepay: 5500, duration: '9 Months', interestRate: 13, installment: '$500 / month' },
    { id: '08', loanMoney: 160000, leftToRepay: 100800, duration: '3 Months', interestRate: 12, installment: '$900 / month' },
  ];

  return (
    <Layout title="Loans">
      <div className="flex h-screen">
        <div className="flex-1">
          <main className="bg-gray-100 min-h-screen p-4 md:p-6">
            {/* Loan Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {loanTypes.map((loan) => (
                <div key={loan.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      loan.type === 'Personal' ? 'bg-blue-100 text-blue-600' :
                      loan.type === 'Corporate' ? 'bg-yellow-100 text-yellow-600' :
                      loan.type === 'Business' ? 'bg-pink-100 text-pink-600' :
                      'bg-teal-100 text-teal-600'
                    }`}>
                      {loan.icon}
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">{loan.type} Loans</p>
                      <p className="font-semibold">{loan.amount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Loans Table */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Active Loans Overview</h2>
              </div>
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden">
                    {/* Mobile view cards */}
                    <div className="block md:hidden">
                      {activeLoans.map((loan) => (
                        <div key={loan.id} className="bg-white p-4 border-b">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">SL No: {loan.id}</span>
                            <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">
                              Repay
                            </button>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Loan Money:</span>
                              <span>${loan.loanMoney.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Left to repay:</span>
                              <span>${loan.leftToRepay.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Duration:</span>
                              <span>{loan.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Interest rate:</span>
                              <span>{loan.interestRate}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Installment:</span>
                              <span>{loan.installment}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop view table */}
                    <table className="hidden md:table w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">SL No</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Loan Money</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Left to repay</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Duration</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Interest rate</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Installment</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeLoans.map((loan) => (
                          <tr key={loan.id} className="border-t">
                            <td className="px-4 py-3 text-sm">{loan.id}</td>
                            <td className="px-4 py-3 text-sm">${loan.loanMoney.toLocaleString()}</td>
                            <td className="px-4 py-3 text-sm">${loan.leftToRepay.toLocaleString()}</td>
                            <td className="px-4 py-3 text-sm">{loan.duration}</td>
                            <td className="px-4 py-3 text-sm">{loan.interestRate}%</td>
                            <td className="px-4 py-3 text-sm">{loan.installment}</td>
                            <td className="px-4 py-3 text-sm">
                              <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">
                                Repay
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Loans; 