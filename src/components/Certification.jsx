import React from "react";

const Certifications = () => {
  return (
    <div className="py-10 px-4 md:px-20 bg-gray-100 min-h-cover">
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white bg-blue-800 inline-block px-6 py-2 rounded-2xl mb-10">
          Certifications
        </h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full md:w-[45%] lg:w-[30%] p-6 shadow-md rounded-bl-3xl text-center bg-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800">OEKO-TEX®</h3>
            <p className="text-sm text-gray-600 mt-4">
              STANDARD 100 by OEKO-TEX®: A globally recognized label ensuring customer confidence and product safety.
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Safety and quality in the production of woven labels will be put in the first place. With the exception of lurex yarn, all the yarn used in our labels is certified up to Product Class 1. This certification ensures that our labels are safe for babies and toddlers up to 3 years of age, meeting the stringent standards set by the OEKO-TEX® Standard 100.
            </p>
          </div>
          <button className="mt-6 px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition duration-200">
            View Our Certificate
          </button>
        </div>

        <div className="w-full md:w-[45%] lg:w-[30%] p-6 shadow-md rounded-bl-3xl text-center bg-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Global Recycled Standard</h3>
            <p className="text-sm text-gray-600 mt-4">
              The Global Recycle Standard (GRS): International Standards for Recyclables Certification, Chain of Custody, and Environmental Practices.
            </p>
            <p className="text-sm text-gray-600 mt-3">
              The primary objective of GRS is to minimize the adverse effects of production on both people and the environment. It aims to offer reassurance that products are manufactured with greater sustainability in mind, while also promoting increased utilization of recycled materials.
            </p>
          </div>
          <button className="mt-6 px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition duration-200">
            View Our Certificate
          </button>
        </div>

        <div className="w-full md:w-[45%] lg:w-[30%] p-6 shadow-md rounded-bl-3xl text-center bg-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800">ISO 9001:2015</h3>
            <p className="text-sm text-gray-600 mt-4">
              ISO 9001:2015 is a globally recognized quality management standard that ensures consistent product quality and customer satisfaction.
            </p>
            <p className="text-sm text-gray-600 mt-3">
              We follow strict quality assurance practices throughout our manufacturing process, ensuring reliability, traceability, and continuous improvement in our label production.
            </p>
          </div>
          <button className="mt-6 px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition duration-200">
            View Our Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
