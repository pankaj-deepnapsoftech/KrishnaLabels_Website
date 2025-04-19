import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full h-[100vh] overflow-hidden pt-20">
       
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/Hero-video.mp4" type="video/mp4" />
        </video> 

     
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full w-full px-4 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mt-20 mb-4 text-blue-800">
            Clothing Label & Tag <br />
            Manufacturer Since 2010
          </h1>

          <p className="text-sm md:text-lg max-w-3xl mb-6 font-medium text-white">
            At KRISHNA LABELS INC, we’ve spent over 17 years helping brands bring their identity to life through premium, custom made garment accessories. We are specialized in crafting everything from woven labels, printed labels, tag, tag seal, premium satin ribbon, paper bag to a wide range of personalized apparel accessories—designed to match your exact specifications.
            Whether you're a fashion brand, boutique, or manufacturer, we provide tailored solutions that blend function, fashion, and flawless craftsmanship. From concept to creation, our team ensures that each item is made using superior quality materials and ethical, sustainable production practices.
            <br />
            At KRISHNA LABELS INC, we don’t just make accessories—we enhance brands. Every detail is designed with care, every product crafted to ensure your brand stands out in a competitive market. Not just labels—your identity, stitched.
          </p>

          <a
            href="/contact"
            className="bg-blue-700 font-semibold px-8 py-4 rounded-full text-lg text-white"
          >
            Get an Instant Quote Now!                                                                                                                                                                                     
          </a>
        </div>
      </section>

      <section className="flex flex-wrap justify-center items-center gap-8 mt-14 mb-14 p-8 bg-white">
        <div className="bg-red-500 text-white px-12 py-8 rounded-3xl shadow-lg font-semibold text-2xl">
          Custom Labels
        </div>
        <div className="bg-orange-500 text-white px-12 py-8 rounded-3xl shadow-lg font-semibold text-2xl">
          Hand Tag
        </div>
        <div className="bg-blue-500 text-white px-12 py-8 rounded-3xl shadow-lg font-semibold text-2xl">
          Printed Ribbon
        </div>
        <div className="bg-pink-500 text-white px-12 py-8 rounded-3xl shadow-lg font-semibold text-2xl">
          Paper Bag
        </div>
      </section>

    </>
  );
}

