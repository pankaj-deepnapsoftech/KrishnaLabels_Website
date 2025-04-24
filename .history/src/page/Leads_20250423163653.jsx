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
    <div className="w-full h-full bg-gray-200 shadow-xl p-4">
      <h2 className="text-xl font-bold text-center text-gray-700 mb-4">CONTACT DATA</h2>
      
      {/* Desktop View */}
      <div className="hidden sm:block">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-sky-800 text-white text-sm">
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2">Email</th>
              <th className="py-3 px-2">Phone No.</th>
              <th className="py-3 px-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-cyan-50 transition-all text-sm`}
              >
                <td className="py-2 px-2 font-medium text-gray-700">{user.name}</td>
                <td className="py-2 px-2 text-gray-600">{user.email}</td>
                <td className="py-2 px-2 text-gray-600">{user.contact}</td>
                <td className="py-2 px-2 text-gray-600">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Cards */}
      <div className="block sm:hidden space-y-4">
        {dummyData.map((user, index) => (
          <div
            key={index}
            className="bg-sky-800 text-white rounded-xl shadow-sm p-4 text-sm"
          >
            <p><span className="font-semibold">Name:</span> {user.name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Phone:</span> {user.contact}</p>
            <p><span className="font-semibold">Address:</span> {user.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leads;
