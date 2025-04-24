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
    <div className="w-full h-full pt-8 md:pt-10 px-2 md:px-6 bg-gray-100">
      
      {/* Mobile-only info bar */}
      <div className="block max-[800px]:block hidden bg-sky-100 text-sky-800 p-4 rounded-lg mb-4 text-sm font-semibold">
        📱 You’re viewing this on a mobile device.
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-[600px] md:w-full text-sm md:text-base text-center border-collapse">
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
