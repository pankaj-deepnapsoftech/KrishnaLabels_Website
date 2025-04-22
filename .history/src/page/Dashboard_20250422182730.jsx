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
    <div className="flex overflow-auto bg-gray-100 h-[100%] w-full ">
      {/* Main Content */}
      <main className="flex-1 h-[100%] py-[15px]">
        <header className="flex justify-between    text-black mx-5 px-5 py-5  h-[12vh] rounded-sm  items-center mb-8">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold ">Hey Everyone✌️, </span>
          </div>
          <div className="relative w-[12rem]">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 pr-10 border-b  text-black focus:outline-none w-full"
            />
            <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
          </div>
        </header>
        {/* Cards */}
        <div className="flex px-[35px] flex-wrap max-[800px]:justify-center gap-6  items-center mb-10 h-[300px] ">
          {dataCards.map((card, i) => (
            <div
              key={i}
              className={`p-6 w-[400px] text-white rounded-xl bg-gradient-to-r ${card.color}`}
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
