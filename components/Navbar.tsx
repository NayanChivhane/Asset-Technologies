"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white flex items-center justify-between px-8 py-4 fixed top-0 z-50">
      
      {/* Logo → Scroll to Home */}
      <a href="#home" className="flex items-center">
        <img src="/Logo.webp" alt="logo" className="h-13" />
      </a>

      {/* Menu */}
      <div className="flex gap-8 text-lg">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#services" className="hover:text-blue-400">Services</a>
        <a href="#about" className="hover:text-blue-400">About Us</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        
        <a href="#contact" className="hover:text-blue-400">Contact Us</a>
      </div>
    </nav>
  );
}