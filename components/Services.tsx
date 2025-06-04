// components/Services.tsx
const services = [
  { title: "High-Quality Materials", description: "Resist weathering and breakage", image: "/service1.jpg" },
  { title: "Professional Services", description: "Reliable installation and removal", image: "/service2.jpg" },
  { title: "Cost-Effective Pricing", description: "Competitive rates", image: "/service3.jpg" },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="shadow-md rounded-lg overflow-hidden">
              <img src={s.image} alt={s.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
