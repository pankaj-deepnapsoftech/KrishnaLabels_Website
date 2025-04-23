import React from "react";
import { useContactContext } from "../context/ContactContext/ContactContext";

const data = [
  { status: "Blocked", name: "Marley Doe", id: "124562", requests: 22 },
  { status: "Active", name: "Rayna Levin", id: "719413", requests: 12 },
  { status: "Blocked", name: "John Doe", id: "512447", requests: 10 },
  { status: "Active", name: "Kate Martis", id: "822445", requests: 14 },
];

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Blocked: "bg-red-100 text-red-700",
};

const Leets = () => {
  const {data} = useContactContext()
 
  return (
    <div className="w-full md:w-[100%] h-full  bg-gray-200 rounded bg- shadow-xl p-4  max-[800px]:pt-15  ">
      <h2 className="text-xl font-bold text-center text-gray-700 mb-4">User Requests</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-sky-800 text-white text-sm">
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Name</th>
              <th className="py-3 px-4 font-semibold">ID</th>
              <th className="py-3 px-4 font-semibold">Requests</th>
            </tr>
          </thead>
          <tbody>
            {[].map((user, index) => (
              <tr
                key={index} 
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-cyan-50 transition-all`}
              >
                <td className="py-3 px-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[user.status]}`}
                  >
                    {user.status}
                  </span>
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
