import React, { useRef, useEffect } from "react";
import "./scrollbar.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RatingsReviews = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const scrollByAmount = 300;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") scrollRight();
      else if (e.key === "ArrowLeft") scrollLeft();
    };

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRight();
        }
      }
    }, 3000);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-blue-800 inline-block px-6 py-2 rounded-2xl mb-6">
          Welcome Our Reviews
        </h2>
      </div>

      <div className="flex justify-center">
        <h3 className="text-sky-600 text-center font-semibold pb-5 text-sm sm:text-base">
          Real reviews from real customers
        </h3>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-8">
        <div>
          <div className="text-3xl sm:text-4xl font-bold text-yellow-500">
            4.2<span className="text-black text-xl sm:text-2xl">/5</span>
          </div>
          <div className="text-sm text-gray-600">Reviewed by 119 Users</div>
        </div>

        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((stars, i) => {
            const percents = [56, 20, 2, 8, 14];
            return (
              <div key={stars} className="flex items-center mb-1">
                <span className="w-6 text-sm">{stars}★</span>
                <div className="w-full bg-gray-200 h-2 rounded-full mx-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: `${percents[i]}%` }}
                  ></div>
                </div>
                <span className="w-10 text-sm text-right">{percents[i]}%</span>
              </div>
            );
          })}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">User Satisfaction</h3>
          {[
            { label: "Response", percent: 84 },
            { label: "Quality", percent: 77 },
            { label: "Delivery", percent: 83 },
          ].map(({ label, percent }) => (
            <div key={label} className="mb-2">
              <div className="flex justify-between text-sm">
                <span>{label}</span>
                <span>{percent}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
        Most Relevant Reviews
      </h3>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
        >
          <FaChevronRight />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-8 sm:px-12"
        >
          {[
            {
              name: "Mrs. Sahani",
              location: "New Delhi, Delhi",
              date: "08-March-25",
              product: "Printed Ribbons",
              content: "",
            },
            {
              name: "Aryan Bijay",
              location: "Pottore, Kerala",
              date: "21-February-25",
              product: "Woven Label",
              content: "",
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
          ].map(({ name, location, date, product, content }, i) => (
            <div
              key={i}
              className="bg-gray-50 min-w-[260px] sm:min-w-[300px] p-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
                  {name[0]}
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-sm sm:text-base">
                    {name}
                  </div>
                  <div className="text-xs text-gray-500">{location}</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-2">{date}</div>
              <div className="text-sm mb-1">
                <span className="font-medium">Product Name</span>: {product}
              </div>
              {content && <div className="text-sm">{content}</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-6">
        <button
          onClick={() => navigate("/allReviews")}
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          View More Reviews
        </button>
      </div>
    </div>
  );
};

export default RatingsReviews;
