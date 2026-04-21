"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow-md">
      <h1 className="text-xl font-bold">
        <Image
          src="/Logo.webp"
          alt="Logo"
          width={200}
          height={80}
        />
      </h1>

      <ul className="flex gap-4 justify-centre ">
        <li className="cursor-pointer hover:text-orange-400 transition-colors">Home</li>
        <li className="cursor-pointer hover:text-orange-400 transition-colors">About Us</li>
        <li className="cursor-pointer hover:text-orange-400 transition-colors">Projects</li>
        <li className="cursor-pointer hover:text-orange-400 transition-colors">Services</li>
        <li className="cursor-pointer hover:text-orange-400 transition-colors">Contact Us</li>
      </ul>
    </nav>
  );
}