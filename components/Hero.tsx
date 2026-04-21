export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/Banner.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center text-white max-w-2xl">
        <h1 className="text-5xl font-bold">
          Cutting-Edge IT Solutions That Power Your Business Growth
        </h1>

        <p className="mt-4">
          From hardware infrastructure to cloud and software solutions.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-2 cursor-pointer hover:bg-[#0000ff] transition-colors">
            Get Free Consultation
          </button>
          <button className="border px-6 py-2 cursor-pointer hover:text-green-400 transition-colors">
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}