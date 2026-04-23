"use client";

export default function CTA() {
  return (
    <section
      className="relative w-full h-[200px] flex items-center"
      style={{
        backgroundImage: "url('/banner.webp')", // put your image in /public
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-1 flex flex-col md:flex-row items-center justify-between text-white">
        
        {/* Left Text */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Business with Technology?
          </h1>

          <p className="text-lg md:text-xl">
            Just one call away:{" "}
            <a
              href="tel:+8411022703"
              className="underline hover:text-blue-400"
            >
              +84 1102 2703
            </a>
          </p>
        </div>

        {/* Button */}
        <a
  href="#contact"
  className="inline-block border border-white px-6 py-3 text-white text-lg font-medium whitespace-nowrap hover:bg-white hover:text-black transition duration-300"
>
  Book Free Consultation
</a>

      </div>
    </section>
  );
}