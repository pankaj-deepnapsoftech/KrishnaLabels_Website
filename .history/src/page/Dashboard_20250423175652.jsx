import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";

const dataCards = [

  {
    title: "Total Profit",
    amount: "$25,000",
    change: "Increased by 30%",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, unde. At asperiores provident, nam dolor laborum nihil impedit nesciunt similique ratione optio consequuntur aperiam quae rerum excepturi vero corporis exercitationem?",
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Stock Total",
    amount: "$15,000",
    change: "Increased by 60%",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, unde. At asperiores provident, nam dolor laborum nihil impedit nesciunt similique ratione optio consequuntur aperiam quae rerum excepturi vero corporis exercitationem?",
    color: "from-cyan-400 to-cyan-600",
  },


  {
    title: "Total Profit",
    amount: "$25,000",
    change: "Increased by 30%",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, unde. At asperiores provident, nam dolor laborum nihil impedit nesciunt similique ratione optio consequuntur aperiam quae rerum excepturi vero corporis exercitationem?",
    color: "from-pink-400 to-pink-600",
  },

];

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full h-[100%] bg-white max-[800px]:py-15 ">
      <header className=" z-10 w-full h-[12vh] bg-gray-50 shadow-xl px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4 ">
        <h2 className="text-xl  w-50 flex justify-center items-center gap-2 text-white rounded-[10px] h-14  content-center md:text-2xl font-bold ">
        <MdDashboardCustomize  />
 Dashboard
        </h2>
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-10 py-2  border-b   focus:outline-none "
          />
          <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
        </div>
      </header>

      {/* Cards Section */}
      <section className="flex flex-wrap  gap-6 px-4 py-10">
        {dataCards.map((card, i) => (
          <div
            key={i}
            className={`w-full sm:w-[300px] h-[300px] md:w-[350px] lg:w-[400px] p-6 rounded-2xl text-white bg-gradient-to-br ${card.color} shadow-xl hover:scale-105 transition-transform duration-300`}
          >
            <div className="text-sm opacity-90">{card.title}</div>
            <div className="text-3xl font-bold my-2">{card.amount}</div>
            <div className="text-sm opacity-80">{card.change}</div>
            <div className="text-sm opacity-100 pt-5 ">{card.des}</div>
          </div>
        ))}
      </section>

    </div>
  );
}
