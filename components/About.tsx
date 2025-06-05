// components/About.tsx
import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center bg-white text-black p-10 gap-8">
      <div className="w-full max-w-sm">
        <Image 
          src="/housemodel.jpg" 
          alt="House Model" 
          width={400} 
          height={400} 
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <h3 className="text-2xl font-bold mb-2">Who We Are</h3>
        <p className="text-lg mb-4">
          Prospect Post specializes in high-quality signpost installation and removal
          services designed to simplify advertising for realtors and marketers. With a
          focus on durability, compliance, and customer satisfaction, we aim to deliver
          exceptional service for your marketing needs.
        </p>
        <h3 className="text-2xl font-bold mb-2">Our Commitment To Customer Support</h3>
        <p className="text-lg mb-4">
          Our team is dedicated to providing outstanding customer care, from the
          moment you place an order to the installation and removal of your signpost.
          We house your inventory in our warehouse at no additional cost to ensure
          fast, reliable installations.
        </p>
        <button className="bg-[#6E7CA0] text-white px-6 py-2 rounded-full font-semibold shadow">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
