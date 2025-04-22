import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
const dataCards = [
  {
    title: "Stock Total",
    amount: "$15000",
    change: "Increased by 60%",
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Total Profit",
    amount: "$25000",
    change: "Increased by 30%",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Unique Visitors",
    amount: "$250000",
    change: "Increased by 80%",
    color: "from-red-400 to-red-600",
  },
  {
    title: "Total Profit",
    amount: "$25000",
    change: "Increased by 30%",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Unique Visitors",
    amount: "$250000",
    change: "Increased by 80%",
    color: "from-red-400 to-red-600",
  },
  {
    title: "Total Profit",
    amount: "$25000",
    change: "Increased by 30%",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Unique Visitors",
    amount: "$250000",
    change: "Increased by 80%",
    color: "from-red-400 to-red-600",
  },
  {
    title: "Total Profit",
    amount: "$25000",
    change: "Increased by 30%",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Total Profit",
    amount: "$25000",
    change: "Increased by 30%",
    color: "from-blue-400 to-blue-600",
  }
];

export default function Dashboard() {
  return (
    <div className="flex overflow-auto  h-[100%] bg-[#fcfcfc] w-full">
      {/* Main Content */}
      <main className="flex-1 h-[100%] p-15">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">Hey Everyone✌️, </span>
          </div>

          <div className="relative w-[12rem]">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 pr-10 border-b focus:outline-none w-full"
            />
            <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </header>

        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <RiDashboardLine className="text-blue-400" /> Dashboard
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 h-fit">
          {dataCards.map((card, i) => (
            <div
              key={i}
              className={`p-6 text-white rounded-xl bg-gradient-to-r ${card.color}`}
            >
              <div className="text-sm opacity-80">{card.title}</div>
              <div className="text-2xl font-bold">{card.amount}</div>
              <div className="text-xs mt-2 opacity-80">{card.change}</div>
            </div>
          ))}
        </div>

        {/* Table */}
      </main>
    </div>
  );
}
