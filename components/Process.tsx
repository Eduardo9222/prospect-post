import React from "react";
import Image from "next/image";

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Order Online",
    description: "Choose your POST size and color (5’ or 6’, Natural or White).",
  },
  {
    number: "02",
    title: "Processing",
    description: "Review and approve your design.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Posts installed in compliance with Texas 811 laws, ensuring safety and efficiency.",
  },
  {
    number: "04",
    title: "Completion",
    description:
      "Receive notifications and photos of the finished installation.",
  },
];

const InstallationProcess: React.FC = () => {
  return (
    <section className="bg-[#5D6EAB] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative inline-block mb-10">
          <Image
            src="/process.png"
            alt="Decoration"
            width={48}
            height={48}
            className="absolute left-[-3rem] top-1"
          />
          <h2 className="text-3xl md:text-4xl font-semibold">Installation Process</h2>
          <div className="w-24 h-[2px] bg-white mt-2 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="w-16 h-16 bg-white text-black text-xl font-bold rounded-full flex items-center justify-center border-4 border-gray-300 z-10">
                {step.number}
              </div>
              <h3 className="mt-4 font-bold text-lg">{step.title}</h3>
              <p className="mt-2 text-sm px-4">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-[-2rem] w-6 h-6 border-t-2 border-r-2 border-white transform rotate-45 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationProcess;