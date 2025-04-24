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
    <div className="flex  flex-col w-full h-[100%] bg-white  ">
      <header className=" z-10 w-full max-[800px]:flex h-[12vh] bg-sky-800 max-[800px]:bg-white shadow-xl px-5 py-4 flex   items-center justify-between gap-4 ">
        <div className="w-full flex justify-end items-center gap-2  rounded-[10px]  font-bold">
          <MdDashboardCustomize className="text-[30px]  md:hidden max-[800px]:block text-sky-800" />
          <span className="  md:hidden max-[800px]:block  font-[800] text-sky-800   text-xl ">Dashboard</span>
        </div>
        <div className="relative w-[35%] hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-8 py-2  border-b  text-white  focus:outline-none  max-[800px]:text-black "
          />
          <IoSearchOutline className="absolute right-3 top-1/2 transform text-black -translate-y-1/2 text-black" />
        </div>
      </header>

      {/* Cards Section */}
      <section className="flex flex-wrap  gap-6 px-4 py-10">
        {dataCards.map((card, i) => (
          <div
            key={i}
            className={`w-full  md:h-[300px] md:w-[350px] h-[250px]  p-6 rounded-2xl text-white bg-gradient-to-br ${card.color} shadow-xl hover:scale-105 transition-transform duration-300`}
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
