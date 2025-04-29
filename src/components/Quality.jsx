import React from "react";

const qualitySteps = [
  {
    
    image: "/logo-4.png",
  },
  {
    
    image: "/logo-8.png",
  },
  {
    
    image: "/logo-10.png",
  },
  {

    image: "/logo-12.png",
  },
];

const QualityControl = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white bg-blue-800 inline-block px-6 py-2 rounded-2xl mb-10">
          How we control the quality
        </h2>
      </div>

      <div className="text-gray-700 max-w-4xl mx-auto mb-10 space-y-4 text-sm md:text-base">
        <p>
          All raw materials received by our warehouse are thoroughly inspected,
          and our staff checks the color, durability, and colorfastness.
        </p>

        <p>
          <strong>🖤 During Production Inspection</strong><br />
          It does not matter how your products were produced – on a weaving
          machine, printing machine, or on a cutting machine, our engineers
          conduct thorough checks throughout the production process to make sure
          that each label, hangtag and the woven patch is consistent with the
          approved pre-production sample.
        </p>

        <p>
          <strong>🖤 After Production Inspection</strong><br />
          The completed products are then checked once again by our professional
          QC personnel and our QC supervisors also conduct spot checks. Only
          once they are satisfied with the product are they packed, ready for
          delivery.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {qualitySteps.map((step, index) => (
          <div key={index} className="text-center">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-28 object-cover rounded shadow"
            />
            <p className="mt-2 text-sm font-medium">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityControl;
