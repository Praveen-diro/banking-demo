import { Card, CardContent } from "@/components/ui/card";
import { CreditAccount, CreditCard } from "@/components/CreditCard";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import { DollarSign, CreditCard as CardIcon, ArrowUpRight, Wallet } from "lucide-react";
import { Layout } from "@/components/Layout";

const chartData = [
  { name: 'Sat', debit: 400, credit: 800 },
  { name: 'Sun', debit: 300, credit: 600 },
  { name: 'Mon', debit: 200, credit: 400 },
  { name: 'Tue', debit: 600, credit: 300 },
  { name: 'Wed', debit: 400, credit: 600 },
  { name: 'Thu', debit: 500, credit: 200 },
  { name: 'Fri', debit: 600, credit: 700 },
];

const transactions = [
  {
    id: 1,
    name: "Spotify Subscription",
    date: "25 Jan 2021",
    type: "Shopping",
    cardNumber: "1234 ****",
    status: "Pending",
    amount: -150,
  },
  {
    id: 2,
    name: "Mobile Service",
    date: "25 Jan 2021",
    type: "Service",
    cardNumber: "1234 ****",
    status: "Completed",
    amount: -340,
  },
  {
    id: 3,
    name: "Emilly Wilson",
    date: "25 Jan 2021",
    type: "Transfer",
    cardNumber: "1234 ****",
    status: "Completed",
    amount: 780,
  },
];

const invoices = [
  { name: "Apple Store", time: "5h ago", amount: 450 },
  { name: "Michael", time: "2 days ago", amount: 160 },
  { name: "Playstation", time: "5 days ago", amount: 1085 },
  { name: "William", time: "10 days ago", amount: 90 },
];

const Accounts = () => {
  return (
    <Layout title="Accounts">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card>
            <CardContent className="p-4 sm:p-6 flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Wallet className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted">My Balance</p>
                <p className="text-xl font-semibold">$12,750</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 sm:p-6 flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <ArrowUpRight className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted">Income</p>
                <p className="text-xl font-semibold">$5,600</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 sm:p-6 flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-full">
                <DollarSign className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted">Expense</p>
                <p className="text-xl font-semibold">$3,460</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 sm:p-6 flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <CardIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted">Total Saving</p>
                <p className="text-xl font-semibold">$7,920</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <Card className="lg:col-span-8">
            <CardContent className="p-2 sm:p-4">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-base sm:text-lg font-semibold">Last Transaction</h2>
              </div>
              <div className="space-y-3 max-h-[200px] overflow-y-auto">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-full ${
                        transaction.type === "Shopping" ? "bg-cyan-100" :
                        transaction.type === "Service" ? "bg-blue-100" : "bg-pink-100"
                      }`}>
                        <div className="w-5 sm:w-6 h-5 sm:h-6" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{transaction.name}</p>
                        <p className="text-xs text-muted">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium text-sm ${
                        transaction.amount > 0 ? "text-success" : "text-danger"
                      }`}>
                        {transaction.amount > 0 ? "+" : ""}{transaction.amount}
                      </p>
                      <p className="text-xs text-muted">{transaction.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-4">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <Card className="lg:col-span-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 sm:gap-0">
                <h2 className="text-base sm:text-lg font-semibold">Debit & Credit Overview</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm">Debit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FFA600]" />
                    <span className="text-sm">Credit</span>
                  </div>
                </div>
              </div>
              <div className="h-48 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <Bar dataKey="debit" fill="#3B3BF9" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="credit" fill="#FFA600" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4">
            <CardContent className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-base sm:text-lg font-semibold">Invoices Sent</h2>
              </div>
              <div className="space-y-4">
                {invoices.map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100" />
                      <div>
                        <p className="font-medium text-sm sm:text-base">{invoice.name}</p>
                        <p className="text-xs sm:text-sm text-muted">{invoice.time}</p>
                      </div>
                    </div>
                    <p className="font-medium text-sm sm:text-base">${invoice.amount}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Accounts;