import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const dataCards = [
  {
    title: "Stock Total",
    amount: "$15,000",
    change: "Increased by 60%",
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Total Profit",
    amount: "$25,000",
    change: "Increased by 30%",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Unique Visitors",
    amount: "$250,000",
    change: "Increased by 80%",
    color: "from-red-400 to-red-600",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full h-full bg-gray-200 max-[800px]:py ">
      {/* Header */}
      <header className=" z-10 bg-white h-[12vh] shadow-md px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4 ">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-800">
          Hey Everyone✌️
        </h2>
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-10 py-2 border-b b focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
        </div>
      </header>

      {/* Cards Section */}
      <section className="flex flex-wrap justify-center gap-6 px-4 py-10">
        {dataCards.map((card, i) => (
          <div
            key={i}
            className={`w-full sm:w-[300px] md:w-[350px] lg:w-[400px] p-6 rounded-2xl text-white bg-gradient-to-br ${card.color} shadow-xl hover:scale-105 transition-transform duration-300`}
          >
            <div className="text-sm opacity-90">{card.title}</div>
            <div className="text-3xl font-bold my-2">{card.amount}</div>
            <div className="text-sm opacity-80">{card.change}</div>
          </div>
        ))}
      </section>

    </div>
  );
}
