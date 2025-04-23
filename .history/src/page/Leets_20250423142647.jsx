import React from "react";
import { useContactContext } from "../context/ContactContext/ContactContext";



const statusColors = {
  Active: "bg-green-100 text-green-700",
  Blocked: "bg-red-100 text-red-700",
};

const Leets = () => {
  const {data} = useContactContext();
  console.log(data)
 
  return (
    <div className="w-full md:w-[100%] h-full  bg-gray-200 rounded bg- shadow-xl p-4  max-[800px]:pt-15  ">
      <h2 className="text-xl font-bold text-center text-gray-700 mb-4">User Requests</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-sky-800 text-white text-sm">
              <th className="py-3 px-4 font-semibold">Name</th>
              <th className="py-3 px-4 font-semibold">Email</th>
              <th className="py-3 px-4 font-semibold">Phone No.</th>
              <th className="py-3 px-4 font-semibold">Message</th>
            </tr>
          </thead>
          <tbody>
            {[].map((user) => (
              <tr
                key={index} 
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-cyan-50 transition-all`}
              >
                <td className="py-3 px-4">
              
                </td>
                <td className="py-3 px-4 text-gray-700 font-medium">
                  {user.name}
                </td>
                <td className="py-3 px-4 text-gray-600">{user.id}</td>
                <td className="py-3 px-4 text-gray-600">{user.requests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leets;
