import { px } from 'framer-motion';
import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 p-10">
     <div 
      className="flex flex-col overflow-hidden rounded-xl shadow-lg border border-gray-200"
      style={{ width: '252px', height: '500px' }}
    >
      {/* Top 70% - Image Section */}
      <div className="relative h-[70%] w-full bg-[#001f3f]">
        <Image
          src="/IT Hardware.webp" // Path to your image in the public folder
          alt="Hardware Card"
          fill
          sizes='250px'
          className="object-cover"
          priority // Ensures the image loads quickly
        />
      </div>

      {/* Bottom 30% - Dark Blue Section */}
      <div className="h-[30%] bg-white p-4 flex flex-col justify-center items-center text-center">
        <h3 className="text-[#001f3f] font-bold text-sm">IT Hardware</h3>
        <p className="text-[#001f3f] text-xs mt-1">Short description goes here.</p>
      </div>
    </div>
         <div 
      className="flex flex-col overflow-hidden rounded-xl shadow-lg border border-gray-200"
      style={{ width: '252px', height: '500px' }}
    >
      {/* Top 70% - Image Section */}
      <div className="relative h-[70%] w-full bg-white">
        <Image
          src="/IT SERVICES 1.webp" // Path to your image in the public folder
          alt="Services Card"
          fill
          sizes='250px'
          className="object-cover"
          priority // Ensures the image loads quickly
        />
      </div>

      {/* Bottom 30% - Dark Blue Section */}
      <div className="h-[30%] bg-[#001f3f] p-4 flex flex-col justify-center items-center text-center">
        <h3 className="text-white font-semibold text-sm">IT Services</h3>
        <p className="text-blue-200 text-xs mt-1">Short description goes here.</p>
      </div>
    </div>
         <div 
      className="flex flex-col overflow-hidden rounded-xl shadow-lg border border-gray-200"
      style={{ width: '252px', height: '500px' }}
    >
      {/* Top 70% - Image Section */}
      <div className="relative h-[70%] w-full bg-[#001f3f]">
        <Image
          src="/PERIPHERALS 1.webp" // Path to your image in the public folder
          alt="Peripherals Card"
          fill
          sizes='250px'
          className="object-cover"
          priority // Ensures the image loads quickly
        />
      </div>

      {/* Bottom 30% - Dark Blue Section */}
      <div className="h-[30%] bg-white p-4 flex flex-col justify-center items-center text-center">
        <h3 className="text-[#001f3f] font-bold text-sm">Peripherals</h3>
        <p className="text-[#001f3f] text-xs mt-1">Short description goes here.</p>
      </div>
    </div>
         <div 
      className="flex flex-col overflow-hidden rounded-xl shadow-lg border border-gray-200"
      style={{ width: '252px', height: '500px' }}
    >
      {/* Top 70% - Image Section */}
      <div className="relative h-[70%] w-full bg-white">
        <Image
          src="/SOFTWARE SOLUTIONS.webp" // Path to your image in the public folder
          alt="Solution Card"
          fill
          sizes='250px'
          className="object-cover"
          priority // Ensures the image loads quickly
        />
      </div>

      {/* Bottom 30% - Dark Blue Section */}
      <div className="h-[30%] bg-[#001f3f] p-4 flex flex-col justify-center items-center text-center">
        <h3 className="text-white font-semibold text-sm">Software Solutions</h3>
        <p className="text-blue-200 text-xs mt-1">Short description goes here.</p>
      </div>
    </div>
    </div>
    
  );
}