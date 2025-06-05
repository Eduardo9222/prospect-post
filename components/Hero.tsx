// components/Hero.tsx
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center bg-[#6E7CA0] text-white p-10 space-y-6 md:space-y-0 md:space-x-6">
      <div className="max-w-md p-6 bg-black/40 rounded-2xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          High-Quality Sign Post <br /> Installation Services Across Texas
        </h1>
        <p className="mt-4 font-semibold text-lg">Make Your Marketing Easier</p>
        <p className="mt-2 font-bold text-white">NOW YOU CAN ADVERTISE ANYTHING EASILY</p>
        <p className="text-sm mt-1">Trusted Provider | Quality Materials | Simple Process</p>
        <p className="mt-4 font-bold text-white">TRUSTED. DURABLE. SAFE.</p>
        <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold">ORDER ONLINE NOW</button>
      </div>
      <div className="relative w-full max-w-sm">
        <Image 
          src="/signpost.png" 
          alt="Sign Post Example" 
          width={400} 
          height={500} 
          className="rounded-2xl object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-white bg-opacity-70 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12l-6.75 4.5v-9l6.75 4.5z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
