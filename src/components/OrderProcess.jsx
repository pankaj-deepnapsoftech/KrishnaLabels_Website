import React from "react";

const steps = [
  {
    step: "Step 1",
    title: "Request a Quote.",
    desc: "Submit the details for your labels or hangtags. Remember to include your logo, the quantity, and the size needed.",
    img: "1.png",
  },
  {
    step: "Step 2",
    title: "Approve Digital Artwork.",
    desc: "We send you the digital artwork together with a price quote for your approval.",
    img: "2.png",
  },
  {
    step: "Step 3",
    title: "Confirm Pre-production Sample.",
    desc: "A pre-production sample is then made to ensure you are happy before going to production. This pre-production sample will be sent to you for approval.",
    img: "3.png",
  },
  {
    step: "Step 4",
    title: "Mass Production.",
    desc: "Once approval is received mass production starts which includes weaving, printing, cutting, and folding.",
    img: "4.png",
  },
];

const CustomOrderProcess = () => {
  return (
    <section className="py-10 px-4 md:px-20 bg-white">
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white bg-blue-800 inline-block px-6 py-2 rounded-2xl mb-10">
          CUSTOM ORDER PROCESS
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {steps.map((item, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <img src={item.img} alt={`Step ${idx + 1}`} className="w-24 h-24 rounded-md object-cover" />
            <div>
              <span className="bg-green-600 text-white px-3 py-1 text-sm rounded-md font-semibold inline-block mb-2">
                {item.step}
              </span>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomOrderProcess;
