// components/About.tsx
const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img src="/about-image.jpg" alt="About image" className="rounded-md shadow" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="mb-4">Prospect Post specializes in high-quality signpost installation and removal...</p>
          <p className="mb-4 font-semibold">Our Commitment To Customer Support</p>
          <p>Our team is dedicated to providing outstanding customer care...</p>
        </div>
      </div>
    </section>
  );
};

export default About;
