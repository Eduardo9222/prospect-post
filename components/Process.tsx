// components/Process.tsx
const steps = [
  { step: "01", title: "Order Online", description: "Choose post size, color..." },
  { step: "02", title: "Processing", description: "Review and approve design..." },
  { step: "03", title: "Installation", description: "Compliant with Texas 811 laws..." },
  { step: "04", title: "Completion", description: "Receive photos of install..." },
];

const Process = () => {
  return (
    <section className="bg-[#5B6D95] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Installation Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.step}>
              <div className="text-4xl font-bold">{step.step}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
