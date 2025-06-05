// components/Hero.tsx
const Hero = () => {
  return (
    <section className="bg-[#5B6D95] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">High-Quality Sign Post Installation Services Across Texas</h1>
          <p className="mb-4">Make Your Marketing Easier — NOW YOU CAN ADVERTISE ANYTHING EASILY</p>
          <button className="bg-white text-[#5B6D95] font-semibold px-6 py-2 rounded-md">Order Online</button>
        </div>
        <div>
          <img src="/hero-image.jpg" alt="Sign post example" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
