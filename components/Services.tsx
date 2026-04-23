"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";

export default function WhyChooseUs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const cards = [
    { img: "/IT Hardware.webp", title: "IT Hardware", dark: false },
    { img: "/IT SERVICES 1.webp", title: "IT Services", dark: true },
    { img: "/PERIPHERALS 1.webp", title: "Peripherals", dark: false },
    { img: "/SOFTWARE SOLUTIONS.webp", title: "Software Solutions", dark: true },
  ];

  return (
    <div className="w-full px-4">
      
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-[0_0_80%] md:flex-[0_0_25%] flex justify-center"
            >
              <div className="w-[252px] h-[500px] flex flex-col overflow-hidden rounded-xl shadow-lg border border-gray-200 transition-transform duration-300">
                
                {/* Image */}
                <div className={`relative h-[70%] w-full ${card.dark ? "bg-white" : "bg-[#001f3f]"}`}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div
                  className={`h-[30%] p-4 flex flex-col justify-center items-center text-center ${
                    card.dark ? "bg-[#001f3f]" : "bg-white"
                  }`}
                >
                  <h3 className={`font-semibold text-sm ${card.dark ? "text-white" : "text-[#001f3f]"}`}>
                    {card.title}
                  </h3>
                  <p className={`text-xs mt-1 ${card.dark ? "text-blue-200" : "text-[#001f3f]"}`}>
                    Short description goes here.
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === selectedIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}