import React from "react";
import { useEffect } from "react";

const allReviews = [
  {
    name: "Mrs. Sahani",
    location: "New Delhi, Delhi",
    date: "08-March-25",
    product: "Printed Ribbons",
    content: "Very professional and quick service.",
  },
  {
    name: "Aryan Bijay",
    location: "Pottore, Kerala",
    date: "21-February-25",
    product: "Woven Label",
    content: "Beautiful and durable labels!",
  },
  {
    name: "Ravi Kumar",
    location: "Lucknow, UP",
    date: "05-March-25",
    product: "Tag Labels",
    content: "Great experience!",
  },
  {
    name: "NUPUR AGGARWAL",
    location: "Amritsar, Punjab",
    date: "18-November-24",
    product: "Printed Satin Ribbon",
    content: "Good",
  },
  {
    name: "Ayesha Mehra",
    location: "Mumbai, Maharashtra",
    date: "01-April-25",
    product: "Twill Tapes",
    content: "Loved the print and quality!",
  },
  {
    name: "Ayesha Mehra",
    location: "Mumbai, Maharashtra",
    date: "01-April-25",
    product: "Twill Tapes",
    content: "Loved the print and quality!",
  },
  {
    name: "Ayesha Mehra",
    location: "Mumbai, Maharashtra",
    date: "01-April-25",
    product: "Twill Tapes",
    content: "Loved the print and quality!",
  },
  {
    name: "Ayesha Mehra",
    location: "Mumbai, Maharashtra",
    date: "01-April-25",
    product: "Twill Tapes",
    content: "Loved the print and quality!",
  },
  {
    name: "Ayesha Mehra",
    location: "Mumbai, Maharashtra",
    date: "01-April-25",
    product: "Twill Tapes",
    content: "Loved the print and quality!",
  },
];

const AllReviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mt-40">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">All Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allReviews.map((review, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-4 border border-gray-200"
          >
            <div className="flex items-center mb-2">
              <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                {review.name[0]}
              </div>
              <div className="ml-3">
                <div className="font-semibold">{review.name}</div>
                <div className="text-xs text-gray-500">{review.location}</div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-1">{review.date}</div>
            <div className="text-sm font-medium">Product: {review.product}</div>
            <p className="text-sm mt-2">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
