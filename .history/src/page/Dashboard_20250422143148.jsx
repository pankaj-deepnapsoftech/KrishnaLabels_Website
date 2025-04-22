import React from "react";
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
];

export default function Dashboard() {
  return (
    <div className="flex h-full bg-[#fcfcfc] mt-10 w-full">
      {/* Main Content */}
      <main className="flex-1 h-full p-4 md:p-8 lg:p-12">
        {/* Header */}
        <header className="flex  sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="text-2xl font-bold">Hey Everyone✌️,</div>

          <div className="relative w-full sm:w-[12rem]">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 pr-10 border-b focus:outline-none w-full"
            />
            <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {dataCards.map((card, i) => (
            <div
              key={i}
              className={`p-6 h-[200px] text-white rounded-xl bg-gradient-to-r ${card.color}`}
            >
              <div className="text-sm opacity-80">{card.title}</div>
              <div className="text-2xl font-bold">{card.amount}</div>
              <div className="text-xs mt-2 opacity-80">{card.change}</div>
            </div>
          ))}
        </div>

        {/* You can add responsive table or charts below */}
      </main>
    </div>
  );
}
