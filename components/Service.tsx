import Image from "next/image";
import React from "react";

type Service = {
  image: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    image: "/poster1.jpg", // Add these images to /public
    title: "High-Quality Materials",
    description: "Posts engineered to resist weathering and breakage.",
  },
  {
    image: "/poster2.jpg",
    title: "Professional Services",
    description: "Fast and reliable installation and removal.",
  },
  {
    image: "/poster3.jpg",
    title: "Cost-Effective Pricing",
    description: "Exceptional services at competitive rates.",
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="flex items-center space-x-2">
              <Image src="/process.png" alt="icon" width={30} height={30} />
              <h2 className="text-xl font-medium text-gray-800">Our Services</h2>
            </div>
            <h3 className="text-3xl font-bold mt-2 max-w-xl">
              Post Installation And Removal Services In Texas
            </h3>
          </div>
          <div className="flex items-start justify-between gap-4">
            <p className="text-gray-600 max-w-md">
              We’ve streamlined the process of ordering and installing listing signs, offering:
            </p>
            <button className="bg-[#5D6EAB] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#4a5990] transition">
              View All
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <Image src={service.image} alt={service.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h4 className="text-lg font-semibold mb-1">{service.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-[#0E1C38] rounded-full flex items-center justify-center text-white">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
