import React from 'react';
const data = [
  {
    id: "02584",
    name: "Kilgore Trout",
    company: "3127 Nicholas Brooks Apt. 164",
    status: "Active",
    date: "9/12/2017",
    revenue: "$3,221",
    tags: ["Label", "Label"],
  },
  {
    id: "31754",
    name: "Josie Santos",
    company: "4056 Keaton Mews Suite 545",
    status: "Active",
    date: "9/12/2017",
    revenue: "$3,221",
    tags: ["Label", "Label"],
  },
  {
    id: "72041",
    name: "Michael Hawkins",
    company: "253 Hauck Divide Apt. 845",
    status: "Active",
    date: "9/12/2017",
    revenue: "$3,221",
    tags: ["Label", "Label"],
  },
  {
    id: "67841",
    name: "Marc Reed",
    company: "2216 Beale Club",
    status: "Active",
    date: "9/12/2017",
    revenue: "$3,221",
    tags: ["Label", "Label"],
  },
  {
    id: "35297",
    name: "Wayne Molina",
    company: "119 Sandra Lodge Apt. 602",
    status: "Active",
    date: "9/12/2017",
    revenue: "$3,221",
    tags: ["Label", "Label"],
  },
  {
    id: "34513",
    name: "Sylvia Holmes",
    company: "620 Rodger Village",
    status: "Active",
    date: "9/12/2017",
    revenue: "$3,221",
    tags: ["Label", "Label"],
  }
];
const StatusDot = ({ status }) => {
  const color = status === "Active" ? "bg-green-500" : "bg-red-500";
  return <span className={`w-2 h-2 rounded-full ${color} inline-block mr-2`} />;
};

const Contect2 = () => {
  return (
    <div className=" px-6  h-full py-6 w-[100%]  md:w-[100%] mx-auto mt-10">
      <table className="w-full divide-y divide-gray-200 shadow-md rounded-md">
        <thead className="bg-gray-50 w-full text-gray-600 text-sm font-medium">
          <tr>
            <th className="px-4 py-3 text-left">ID</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left flex items-center gap-1">
              Company
              <svg className="w-3 h-3 text-sky-" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 8l4.5 4.5L14.5 8H5.5z" />
              </svg>
            </th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Revenue</th>
            <th className="px-4 py-3 text-left">Tags</th>
            <th className="px-4 py-3 text-center">⋮</th>
          </tr>
        </thead>
        <tbody className="text-sm  text-gray-700">
          {data.map((row, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50 transition">
              <td className="px-4 py-2">{row.id}</td>
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.company}</td>
              <td className="px-4 py-2">
                <StatusDot status={row.status} />
                {row.status}
              </td>
              <td className="px-4 py-2">{row.date}</td>
              <td className="px-4 py-2">{row.revenue}</td>
              <td className="px-4 py-2 space-x-1">
                {row.tags.map((tag, i) => (
                  <button
                    key={i}
                    className=" bg-[#185A59]  text-white text-xs px-2 py-2 mb-1 rounded-full hover:bg-blue-600"
                  >
                    {tag}
                  </button>
                ))}
              </td>
              <td className="px-4 py-2 text-center text-xl text-gray-400 cursor-pointer">⋮</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contect2;
