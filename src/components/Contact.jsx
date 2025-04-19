import React, { useRef, useEffect } from "react";
import "./scrollbar.css";

const RatingsReviews = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 shadow-md rounded-2xl mt-10 mb-10">
            <div className="flex justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white bg-blue-800 inline-block px-6 py-2 rounded-2xl mb-10">
                    Welcome Our Reviews
                </h2>
            </div>

            <div className="flex justify-center">
                <h2 className="text-sky-600 font-semibold pb-5">Real reviews from real customers</h2>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                    <div className="text-4xl font-bold text-yellow-500">
                        4.2<span className="text-black text-2xl">/5</span>
                    </div>
                    <div className="text-sm text-gray-600">Reviewed by 119 Users</div>
                </div>

                <div className="flex-1 md:ml-8">
                    {[5, 4, 3, 2, 1].map(stars => {
                        const percent = { 5: 56, 4: 20, 3: 2, 2: 8, 1: 14 }[stars];
                        return (
                            <div key={stars} className="flex items-center mb-1">
                                <span className="w-6 text-sm">{stars}★</span>
                                <div className="w-full bg-gray-200 h-2 rounded-full mx-2">
                                    <div
                                        className="bg-yellow-500 h-2 rounded-full"
                                        style={{ width: `${percent}%` }}
                                    ></div>
                                </div>
                                <span className="w-10 text-sm text-right">{percent}%</span>
                            </div>
                        );
                    })}
                </div>

                <div className="md:ml-8">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">User Satisfaction</h3>
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

            <h3 className="text-xl font-semibold mb-4">Most Relevant Reviews</h3>

            <div className="relative">
                <button
                    onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
                >
                    ◀
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-6"
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
                        <div key={i} className="bg-gray-50 min-w-[250px] sm:min-w-[280px] p-4 rounded-xl shadow-sm flex-shrink-0">
                            <div className="flex items-center mb-2">
                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
                                    {name[0]}
                                </div>
                                <div className="ml-3">
                                    <div className="font-semibold">{name}</div>
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

                <button
                    onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
                >
                    ▶
                </button>
            </div>

            <div className="w-full flex justify-center mt-6">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md">
                    View More Reviews
                </button>
            </div>
        </div>
    );
};

export default RatingsReviews;
