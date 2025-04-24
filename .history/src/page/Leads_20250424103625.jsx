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
    <div className="w-full md:w-full h-full bg-gray-200 shadow-xl p-4 max-[800px]:pt-15">
<h2  className="text-3xl font-bold text-center pb-10 font-["Raleway", "sans-serif] text-gray-700 mb-4 underline underline-offset-8">
  LEADS INSIDE
</h2>
      <div className="rounded-2xl w-full md:w-full overflow-hidden">
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
