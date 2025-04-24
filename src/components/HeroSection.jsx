import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden pt-20">
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

        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 md:px-12 text-white bg-opacity-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-800 drop-shadow-md">
            Clothing Label & Tag <br className="hidden sm:block" />
            Manufacturer Since 2010
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mb-8 font-medium text-white leading-relaxed">
            At <strong>KRISHNA LABELS INC</strong>, we’ve spent over 17 years
            helping brands bring their identity to life through premium,
            custom-made garment accessories. From woven labels, printed labels,
            tags, satin ribbons to paper bags—each item is crafted with
            precision.
            <br />
            <br />
            Whether you're a fashion brand or boutique, we provide tailored
            solutions that blend style and sustainability. We don’t just make
            accessories—we enhance brands.
          </p>
   
          <a
            href="/contact"
            className="bg-blue-700 hover:bg-blue-800 transition text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg shadow-lg"
          >   
            Get an Instant Quote Now!
          </a>
        </div>
      </section>
      <section className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-10 sm:py-14 px-4 sm:px-6 md:px-12 bg-white">      
  {[
    { title: "Custom Labels", bg: "bg-red-600" },
    { title: "Hand Tag", bg: "bg-orange-600" },
    { title: "Printed Ribbon", bg: "bg-blue-600" },
    { title: "Paper Bag", bg: "bg-pink-600" },
  ].map((item, index) => (
    <div
      key={index} 
      className={`${item.bg} text-white px-6 py-4 rounded-2xl shadow-xl font-semibold text-base sm:text-lg md:text-xl text-center transition transform hover:scale-105 w-[220px] h-[100px] flex justify-center items-center`}
    >                                                              
      {item.title}
    </div>
  ))}
</section>
    </>
  );
}