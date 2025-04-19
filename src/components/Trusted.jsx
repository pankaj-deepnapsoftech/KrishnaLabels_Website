import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { name: "", src: "/trusted-1.png" },
  { name: "", src: "/trusted-2.png" },
  { name: "", src: "/trusted-3.png" },
  { name: "", src: "/trusted-4.png" },
  { name: "", src: "/trusted-1.png" },
  { name: "", src: "/trusted-4.png" },
  { name: "", src: "/trusted-2.png" },
  { name: "", src: "/trusted-3.png" },
  { name: "", src: "/trusted-4.png" },
  { name: "", src: "/trusted-4.png" },
  { name: "", src: "/trusted-2.png" },
  { name: "", src: "/trusted-1.png" },
  { name: "", src: "/trusted-4.png" },
  { name: "", src: "/trusted-4.png" },
  { name: "", src: "/trusted-4.png" },
];

const TrustedBrands = () => {
  const settings = {
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true, 
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white bg-blue-800 inline-block px-6 py-2 rounded-2xl mb-10">
          TRUSTED SINCE 2010
        </h2>
      </div>

      <Slider {...settings} className="mt-4">
        {brands.map((brand, index) => (
          <div key={index} className="px-4 flex justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-gray-300 bg-white p-2 shadow-md">
              <img
                src={brand.src}
                alt={brand.name}
                draggable={false}
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrustedBrands;
