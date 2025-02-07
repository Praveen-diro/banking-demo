import { Sidebar } from "@/components/Sidebar";
import { CreditAccount, CreditCard, CreditCardBack } from "@/components/CreditCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";

const transactions = [
  {
    id: "#12548796",
    description: "Spotify Subscription",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: -2500,
    direction: "up"
  },
  {
    id: "#12548796",
    description: "Freepik Sales",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10.40 PM",
    amount: 750,
    direction: "down"
  },
  {
    id: "#12548796",
    description: "Mobile Service",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10.40 PM",
    amount: -150,
    direction: "up"
  },
  {
    id: "#12548796",
    description: "Wilson",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03.29 PM",
    amount: -1050,
    direction: "up"
  },
  {
    id: "#12548796",
    description: "Emilly",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10.40 PM",
    amount: 840,
    direction: "down"
  }
];

const expenseData = [
  { month: "Aug", amount: 5000 },
  { month: "Sep", amount: 8500 },
  { month: "Oct", amount: 5500 },
  { month: "Nov", amount: 3500 },
  { month: "Dec", amount: 12500 },
  { month: "Jan", amount: 4500 },
];

const Transactions = () => {
  return (
    <Layout title="Transactions">
      <div className="p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-6 w-full">
              <div className="md:w-2/3">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">My Accounts</h2>
                  <button className="text-black hover:underline">+ Add Account</button>
                </div>
              </div>
              <div className="md:w-1/3">
                <h2 className="text-xl font-semibold">My Expense</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <CreditAccount
                balance={345601}
                cardHolder="Eddy Cusuma"
                cardNumber="9875 **** **** 9434"
                expiryDate="12/22"
                Active="Active"
                CardType="Corporate Account"
              />
            </div>
            <div className="md:w-1/3">

              <CreditAccount
                balance={57560545}
                cardHolder="Eddy Cusuma"
                cardNumber="5343 **** **** 7654"
                Active="Closed"
                expiryDate="12/22"
                CardType="Current Account"
              />
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-xl h-64">
                <div className="h-[300px] ">
                  <ResponsiveContainer width="100%" height="80%">
                    <BarChart data={expenseData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Bar
                        dataKey="amount"
                        fill="#2DD4BF"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
            <div className="flex gap-4">
              <button className="text-primary font-medium">All Transactions</button>
              <button className="text-gray-500 hover:text-primary">Income</button>
              <button className="text-gray-500 hover:text-primary">Expense</button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Card</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Receipt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id + transaction.description}>
                  <TableCell className="flex items-center gap-2">
                    {transaction.direction === "up" ? (
                      <ArrowUpIcon className="text-red-500" size={20} />
                    ) : (
                      <ArrowDownIcon className="text-green-500" size={20} />
                    )}
                    {transaction.description}
                  </TableCell>
                  <TableCell>{transaction.id}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.card}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell className={transaction.amount > 0 ? "text-green-500" : "text-red-500"}>
                    {transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <button className="text-primary hover:underline">Download</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-center gap-2 mt-6">
            <button className="text-primary hover:underline">← Previous</button>
            <button className="px-3 py-1 rounded-lg bg-primary text-white">1</button>
            <button className="px-3 py-1 rounded-lg hover:bg-gray-100">2</button>
            <button className="px-3 py-1 rounded-lg hover:bg-gray-100">3</button>
            <button className="px-3 py-1 rounded-lg hover:bg-gray-100">4</button>
            <button className="text-primary hover:underline">Next →</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;