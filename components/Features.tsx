const features = [
  { title: "Fast", description: "Optimized for performance from day one.", icon: "⚡" },
  { title: "Secure", description: "Built with security best practices.", icon: "🔒" },
  { title: "Scalable", description: "Grows with your business effortlessly.", icon: "📈" },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
              <p className="mt-2 text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
