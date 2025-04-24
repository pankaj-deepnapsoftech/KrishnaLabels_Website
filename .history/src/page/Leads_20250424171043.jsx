import React from "react";

const Leads = () => {
 const {lead}
  return (
    <div className="w-full md:w-full pt-10 h-full bg-gray-200 shadow-xl p-4 max-[800px]:pt-15">
      <div className="rounded-sm md:w-full  overflow-x-auto ">
        <table className="w-full text-center border-collapse rounded-2xl ">
          <thead>
            <tr className="bg-sky-800 text-white text-sm">
              <th className="py-3 px-4 font-semibold">Name</th>
              <th className="py-3 px-4 font-semibold">Email</th>
              <th className="py-3 px-4 font-semibold">Phone No.</th>
              <th className="py-3 px-4 font-semibold">Address</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user, index) => {
              const { name, email, contact, address } = user;
              return (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-cyan-50 transition-all`}
                >
                  <td className="py-3 px-4 text-gray-700 font-medium">{name}</td>
                  <td className="py-3 px-4 text-gray-600">{email}</td>
                  <td className="py-3 px-4 text-gray-600">{contact}</td>
                  <td className="py-3 px-4 text-gray-600">{address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
