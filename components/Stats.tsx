'use client';
import React from 'react';

const statsData = [
  { id: 1, number: '123', text: 'Projects Completed', top: '40px', left: '40px', delay: '0s' },
  { id: 2, number: '84', text: 'Happy Clients', top: '0px', left: '260px', delay: '1s' },
  { id: 3, number: '37', text: 'Implementation', top: '180px', left: '220px', delay: '0.5s' },
  { id: 4, number: '30', text: 'Years in Experience', top: '280px', left: '60px', delay: '1.5s' },
];

const Stats = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes subtleWiggle {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(2px, -3px) rotate(1deg); }
        }
        .wiggle { animation: subtleWiggle 5s ease-in-out infinite; }
      `}</style>

      {/* 1. OUTER SECTION: Provides the "Space at the end" and background.
         2. CONTAINER: 'max-w-7xl' keeps it from stretching too far on wide screens.
         3. FLEX: 'items-center' keeps cards and text perfectly leveled.
      */}
      <section className="w-full bg-white py-24 px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
          
          {/* LEFT SIDE: The Card Wall (Fixed Area) */}
          <div className="relative w-[500px] h-[450px] shrink-0">
            {statsData.map((card) => (
              <div
                key={card.id}
                className="absolute wiggle bg-white p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-[210px] z-10 border border-gray-50"
                style={{
                  top: card.top,
                  left: card.left,
                  animationDelay: card.delay,
                }}
              >
                <h3 className="text-4xl font-bold text-[#1d2129] mb-1">
                  {card.number}
                </h3>
                <div className="flex items-center gap-2 border-l-4 border-orange-400 pl-3">
                  <p className="text-gray-500 text-sm font-medium leading-tight">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Background Decorative Element (Optional) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
          </div>

          {/* RIGHT SIDE: Expertise Text */}
          <div className="max-w-md lg:text-left text-center">
            <h2 className="text-[#2b44b1] text-5xl font-black tracking-tighter mb-6 uppercase">
              EXPERTISE
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Experienced team delivering advanced IT solutions with latest technologies.
            </p>
            <button className="bg-[#2b44b1] hover:bg-[#1e328f] text-white px-10 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
              Contact Us
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Stats;