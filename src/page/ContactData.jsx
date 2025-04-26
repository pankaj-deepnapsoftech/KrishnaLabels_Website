import React from "react";
import { useContactContext } from "../context/contactContext/contactContext";

const AdminContact = () => {
  const { data } = useContactContext();
  const api = data?.data || [];

  return (
    <div className="w-full md:w-full h-full bg-gray-200 pt-10 shadow-xl p-4 max-[800px]:pt-15">
        <div className=" rounded-sm max-[800px]:flex overflow-x-auto ">
        <table className="w-full text-left border-collapse" >
          <thead>
            <tr className="bg-sky-800 text-white text-md">
              <th className="py-3 px-4 font-semibold">Name</th>
              <th className="py-3 px-4 font-semibold">Email</th>
              <th className="py-3 px-4 font-semibold">Phone No.</th>
              <th className="py-3 px-4 font-semibold">Message</th>
            </tr>
          </thead>
          <tbody>
            {api.map((user, index) => {
              const { name, email, phone, message, id } = user;
              return (
                <tr
                  key={id || index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-cyan-50 transition-all`}
                >
                  <td className="py-3 px-4 text-gray-700 font-medium">{name}</td>
                  <td className="py-3 px-4 text-gray-600">{email}</td>
                  <td className="py-3 px-4 text-gray-600">{phone}</td>
                  <td className="py-3 px-4 text-gray-600">{message}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContact;

