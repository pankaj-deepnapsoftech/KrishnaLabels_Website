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
    <div className="flex relative flex-col w-full h-[100%] bg-white ">
      <header className="sticky top-0 z-10 w-full bg-sky-800 max-[800px]:bg-white shadow-xl flex justify-center gap-5 py-8 max-[800px]:py-">
        <div className="w-50 relative left-5 flex justify-center items-center gap-2 rounded-[10px] content-center font-bold">
          <MdDashboardCustomize className="md:hidden max-[800px]:block text-[30px] text-sky-800" />
          <span className="md:hidden max-[800px]:block font-[800] text-sky-800 text-xl">
            Dashboard
          </span>
        </div>

        <div className="relative w-[40%] left-5">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-b text-white max-[800px]:text-black focus:outline-none"
          />
          <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black md:text-white" />
        </div>
      </header>


      {/* Cards Section */}
      <section className="flex flex-wrap  gap-6 px-4 py-10">
        {dataCards.map((card, i) => (
          <div
            key={i}
            className={`w-full  h-[250px] md:w-[350px] md:h-[300px] p-6 rounded-2xl text-white bg-gradient-to-br ${card.color} shadow-xl hover:scale-105 transition-transform duration-300`}
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
