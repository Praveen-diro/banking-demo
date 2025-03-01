import { Home, Receipt, Users, PieChart, CreditCard, Wallet, Settings, HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  onClose?: () => void;
}

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Receipt, label: "Transactions", path: "/transactions" },
  { icon: Users, label: "Accounts", path: "/accounts" },
  { icon: PieChart, label: "Investments", path: "/investments" },
  { icon: CreditCard, label: "Credit Cards", path: "/credit-cards" },
  { icon: Wallet, label: "Loans", path: "/loans" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();

  const handleClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 z-50">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div 
            className="w-8 h-8 bg-[#1814F3] rounded-lg flex items-center justify-center cursor-pointer md:cursor-default"
            onClick={handleClick}
          >
            <span className="text-white font-bold">D</span>
          </div>
          <span className="text-xl font-bold">Bank Portal</span>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "text-[#1814F3] font-medium"
                    : "text-gray-500 hover:bg-gray-100 hover:text-[#1814F3]"
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};