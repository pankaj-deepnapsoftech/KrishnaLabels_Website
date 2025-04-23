import React from "react";

const Leads = () => {
  const dummyData = [
    {
      name: "Amit Sharma",
      contact: "9876543210",
      email: "amit.sharma@example.com",
      address: "123 Green Park, Delhi"
    },
    {
      name: "Sneha Kapoor",
      contact: "9871234560",
      email: "sneha.kapoor@example.com",
      address: "45 MG Road, Mumbai"
    },
    {
      name: "Rahul Mehta",
      contact: "9123456789",
      email: "rahul.mehta@example.com",
      address: "78 Civil Lines, Lucknow"
    },
    {
      name: "Priya Sinha",
      contact: "9988776655",
      email: "priya.sinha@example.com",
      address: "5 Sector 21, Noida"
    },
    {
      name: "Karan Joshi",
      contact: "9090909090",
      email: "karan.joshi@example.com",
      address: "18 Residency Road, Bangalore"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-[30px] font-bold text-center text-gray-800 mb-6 ">LEADS DATA</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-sky-800 text-white">
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
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-cyan-50 transition-colors duration-200`}
                  >
                    <td className="py-3 px-4 text-gray-800 font-medium">{name}</td>
                    <td className="py-3 px-4 text-gray-700">{email}</td>
                    <td className="py-3 px-4 text-gray-700">{contact}</td>
                    <td className="py-3 px-4 text-gray-700">{address}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leads;
